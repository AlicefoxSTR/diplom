from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .permissions import IsAuthenticatedAndVerfyEmail
from .utils import generate_random_password, generate_random_username, split_fio

from .models import (
    User,
    Teacher,
    UserStage,
    Student,
    Stage,
    Class,
    Test
)
from .serializers import (
    UserSerializer,
    StudentSerializer,
    ClassSerializer,
    UserDetailSerializer,
    ClassCreateSerializer,
    TeacherClassesSerializer,
    TestsSerializer,
    ClassDeleteSerializer
)



class UserRegistrationView(generics.CreateAPIView):
    #Регистрация нового пользователя
    queryset = User.objects.none()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
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
        
        print(request.GET)
        tests = Test.objects.filter(is_custom=False).prefetch_related('tasks', 'tasks__possible_answers')
        tests_serializer = TestsSerializer(tests, many=True)

        return Response(tests_serializer.data, status=status.HTTP_200_OK)