from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .permissions import IsAuthenticatedAndVerfyEmail
from .utils import generate_random_password, generate_random_username, split_fio
from django.db.models import Q

from .models import (
    User,
    Teacher,
    UserStage,
    Student,
    Stage,
    Class,
    Test,
    Task,
    Answer
)
from .serializers import (
    UserSerializer,
    StudentSerializer,
    ClassSerializer,
    UserDetailSerializer,
    ClassCreateSerializer,
    TeacherClassesSerializer,
    TestsSerializer,
    ClassDeleteSerializer,
    TaskSerializer, 
    UserStageSerializer
)



class UserRegistrationView(generics.CreateAPIView):
    #Регистрация нового пользователя
    queryset = User.objects.none()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        #Создание User
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save() #Создаем экземляр класса User
        splited_fio = split_fio(request.data['fio'])
        user.first_name = splited_fio['first_name']
        user.last_name = splited_fio['last_name']
        user.save() #Добавляем ему имя и фамилию и сохраняем

        #Проверка роли создаваемого пользователя и создания профиля под соответствующую роль
        if request.data['role'] == 'teacher':
            teacher_profile = Teacher.objects.create(user=user)
            teacher_profile.save()
            user.teacher = teacher_profile
            user.save()
        elif request.data['role'] == 'user' or 'role' not in request.data:
            user_stage = UserStage.objects.create(user=user)
            if 'stage' in request.data:
                stages_passed = Stage.objects.filter(id__in = request.data['stage'])
                stages_not_passed = Stage.objects.exclude(id__in = request.data['stage'])
                user_stage.stages_passed.set(stages_passed)
                user_stage.stages_not_passed.set(stages_not_passed)
            user_stage.save()
            user.user = user_stage
            user.save()

        if user:
            return Response(
                {
                    "message": "Пользователь успешно зарегистрирован. Проверьте свою электронную почту для активации учетной записи.",
                },
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(
                {"message": "Ошибка регистрации пользователя."}, status=status.HTTP_400_BAD_REQUEST
            )

class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    
    def get(self, request):
        
        user_serializer = UserDetailSerializer(self.request.user)
        if(user_serializer):
            return Response(user_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Ошибка"})

class ClassListView(generics.ListAPIView):

    serializer_class = TeacherClassesSerializer
    permission_classes = [IsAuthenticatedAndVerfyEmail]
           
    def get_queryset(self):
        teacher = Teacher.objects.filter(user=self.request.user)
        return teacher

class ClassCreateView(generics.CreateAPIView):

    serializer_class = ClassCreateSerializer
    permission_classes = [IsAuthenticatedAndVerfyEmail]
    queryset = Class.objects.none()
    

    def post(self, request): #Создание класса учеников
        
        teacher = Teacher.objects.get(user=request.user.id)
        classes_serializer = self.get_serializer(data=request.data)
        classes_serializer.is_valid(raise_exception=True)
        classes = classes_serializer.save()
        teacher.classes.add(classes)
        teacher.save()

        if classes:
            return Response(
                {
                    'message': 'Класс успешно создан!',
                    "data": classes_serializer.data
                }, status=status.HTTP_201_CREATED
            )        
        else:
            return Response(
                {
                    'message': 'Ошибка при создании класса',
                }, status=status.HTTP_400_BAD_REQUEST
            )    


class ClassDeleteView(APIView):
    #Удаление класса с учениками
    permission_classes = [IsAuthenticatedAndVerfyEmail]

    def delete(self, request):
        try:
            class_room = Class.objects.get(id=request.data)  #Получение класса из бд
            students = Student.objects.filter(classroom=class_room.id) #Получения списка учеников из класса
            if students:
                for student in students:
                    student.delete()
            class_room.delete()
            return Response({"message": "Удаление прошло успешно."}, status=status.HTTP_200_OK)
        except:
            return Response({"message": "Ошибка удаленния класса."}, status=status.HTTP_400_BAD_REQUEST)
            


class StudentView(APIView):

    permission_classes = (IsAuthenticatedAndVerfyEmail,)

    def post(self, request): #Создание профиля ученика

        #Генерация данных ученика
        splited_fio = split_fio(request.data['fio'])
        username = generate_random_username()
        password = generate_random_password()

        #Создание User
        student_user = User.objects.create_user(username=username, password=password)
        student_user.first_name = splited_fio['first_name']
        student_user.last_name = splited_fio['last_name']
        student_user.role = 'student'
        student_user.email_confirmed = True 
        student_user.save()

        #Создание Student
        student = Student.objects.create(
            user=student_user, 
            username=username, 
            password=password, 
            classroom=Class.objects.get(id=request.data['classroom']['id'])
        )
        student.save()
        student_user.student = student
        student_user.save()
        

        if student_user and student:
            return Response({'message': 'Ученик успешно создан!' }, status=status.HTTP_201_CREATED)
        else:
            return Response(
                {
                    'message': 'Ошибка при создании ученика',
                }, status=status.HTTP_400_BAD_REQUEST
            )    
        
    def patch(self, request):
        try:
            student = Student.objects.get(id=request.data['student'])
            splited_fio = split_fio(request.data['fio'])
            student.user.first_name = splited_fio['first_name']
            student.user.last_name = splited_fio['last_name']
            student.save()
            student.user.save()
            return Response({"message": "Ученик успешно изменен!"}, status=status.HTTP_200_OK)
        except:
            return Response({"message": "Ошибка сохранения изменений!"}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):

        try:
            student = Student.objects.get(id=request.data['student'])
            student.user.delete()
            return Response({"message": "Ученик успешно удален!"}, status=status.HTTP_200_OK)
        except:
            return Response({"message": "Ошибка удаления ученика!"}, status=status.HTTP_400_BAD_REQUEST)


    

class UserActivationView(APIView):

    queryset = User.objects.none()
    permission_classes = [permissions.AllowAny]


    def get(self, request, uidb64, token):
        try:
            uid = int(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            user.email_confirmed = True
            user.save()
            return Response({"message": "Активация учетной записи прошла успешно."}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Недействительная ссылка активации."}, status=status.HTTP_400_BAD_REQUEST)
        


class TestsView(APIView):

    permission_classes = [IsAuthenticatedAndVerfyEmail]

    def get(self, request):
        
        if(request.GET.get('custom')):
            if(request.GET.get('role')=='teacher'):
                tests = Test.objects.filter(is_custom=True, creator=self.request.user.teacher).prefetch_related('tasks', 'tasks__possible_answers')
            elif(request.GET.get('role')=='student'):
                tests = Test.objects.filter(id__in=self.request.user.student.classroom.tests.all()).prefetch_related('tasks', 'tasks__possible_answers')
        else:
            tests = Test.objects.filter(is_custom=False).prefetch_related('tasks', 'tasks__possible_answers')
        tests_serializer = TestsSerializer(tests, many=True)

        if tests:
            return Response(tests_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Ошибка получения списка тестов."}, status=status.HTTP_400_BAD_REQUEST)

    
    def post(self, request):

        test_data = request.data
        teacher = Teacher.objects.get(user=self.request.user)
        tasks_data = test_data['tasks']
        task_list = []
        for task in tasks_data:
            possible_answers = []
            correct_answers = []
            try:
                new_task = Task.objects.get(id=task['id'])   
            except:
                new_task = Task.objects.create(
                    question_type = task['type'],
                    question_text = task['question'],
                    is_custom = task['isPersonal'],
                    creator = teacher,
                )
                for answer in task['answers']:
                    new_answer = Answer.objects.create(text=answer['text'], creator=teacher, is_custom=True)
                    possible_answers.append(new_answer)
                    if answer['isCorrect']:
                        correct_answers.append(new_answer)
            new_task.possible_answers.set(possible_answers)
            new_task.correct_answers.set(correct_answers)
            new_task.save()
            task_list.append(new_task)
        new_test = Test.objects.create(
            name=test_data['name'],
            creator = teacher,
            is_custom = True
        )
        new_test.tasks.set(task_list)
        new_test.save()

        teacher.custom_tests.add(new_test)
        teacher.save()

        if new_test:
            return Response({"message": "Тест успешно создан!."}, status=status.HTTP_200_OK)
        else: 
            return Response({"message": "Ошибка получения списка тестов."}, status=status.HTTP_400_BAD_REQUEST)


    def patch(self, request):

        test_data = request.data
        try:
            test = Test.objects.get(id=test_data['id'])
            teacher = Teacher.objects.get(user=self.request.user)
            tasks_data = test_data['tasks']
            task_list = []
            for task in tasks_data:
                try:
                    new_task = Task.objects.get(id=task['id'])
                    new_task.question_text = task['question']  
                    new_task.question_type = task['type']  
                    for answer in new_task.possible_answers.all():
                        answer.delete()
                except:
                    new_task = Task.objects.create(
                        question_type = task['type'],
                        question_text = task['question'],
                        is_custom = task['isPersonal'],
                        creator = teacher,
                    )

                possible_answers = []
                correct_answers = []
                for answer in task['answers']:
                    new_answer = Answer.objects.create(text=answer['text'], creator=teacher, is_custom=True)
                    possible_answers.append(new_answer)
                    if answer['isCorrect']:
                        correct_answers.append(new_answer)
                new_task.possible_answers.set(possible_answers)
                new_task.correct_answers.set(correct_answers)
                new_task.save()
                task_list.append(new_task)
            test.tasks.set(task_list)
            test.save()
            return Response({"message": "Тест успешно сохранен!."}, status=status.HTTP_200_OK)
        except:
            return Response({"message": "Ошибка изменения теста."}, status=status.HTTP_400_BAD_REQUEST)

        





class TaskView(APIView):

    permission_classes = [IsAuthenticatedAndVerfyEmail]

    def get(self, request):
        ready_tasks = []
        if request.GET.get('tasks_id'):
            ready_tasks = request.GET.get('tasks_id').split(',')
        if(request.GET.get('random')):
            tasks = Task.objects.filter(
                    Q(is_custom=False) | Q(creator=self.request.user.teacher)
                ).prefetch_related('possible_answers')
            if ready_tasks:
                tasks = tasks.exclude(id__in=ready_tasks)
            task = tasks.order_by('?').first()
        
        tasks_serializer = TaskSerializer(task, many=False)
        if task:
            return Response(tasks_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'meesage': 'Доступных вопросов не найдено'}, status=status.HTTP_400_BAD_REQUEST)


class TasksView(APIView):

    permission_classes = [IsAuthenticatedAndVerfyEmail]

    def get(self, request):

        stage = None
        if request.GET.get('stage'):
            stage = Stage.objects.filter(id=request.GET.get('stage')).prefetch_related('test', 'test__tasks').first()
            if stage:
                tasks = stage.test.tasks.all()
        else:
            tasks = Task.objects.filter(
                Q(is_custom=False)
            ).prefetch_related('possible_answers')
        
        tasks_serializer = TaskSerializer(tasks, many=True)

        if tasks:
            return Response(tasks_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'meesage': 'Доступных вопросов не найдено'}, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request):

        tasks_data = request.data
        new_task=None
        for task in tasks_data:
            new_task = Task.objects.get(id=task['id'])
            possible_answers = []
            correct_answers = []
            for answer in task['answers']:
                try:
                    new_answer = Answer.objects.get(id=answer['id'])
                    possible_answers.append(new_answer)
                    if answer['isCorrect']:
                        correct_answers.append(new_answer)
                except:
                    new_answer = Answer.objects.create(text=answer['text'], creator=self.request.user.teacher, is_custom=True)
                    possible_answers.append(new_answer)
                    if answer['isCorrect']:
                        correct_answers.append(new_answer)

                
            new_task.question_text = task['question']
            new_task.question_type = task['type']
            new_task.possible_answers.set(possible_answers)
            new_task.correct_answers.set(correct_answers)
            new_task.save()

        if new_task:
            return Response({"message": "Сохранение прошло успешно."}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Ошибка сохранения заданий."}, status=status.HTTP_400_BAD_REQUEST)


class StagesView(generics.ListAPIView):

    permission_classes = [IsAuthenticatedAndVerfyEmail]
    serializer_class = UserStageSerializer
    queryset = Stage.objects.all()

   