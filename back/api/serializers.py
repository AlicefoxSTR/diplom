from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from rest_framework import serializers
from .models import User, Teacher, Student, UserStage, Stage, Class


class ClassSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Class
        fields = ['id']

    
class TeacherSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Teacher
        fields = '__all__'

   
class UserStageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stage
        fields = ('id', 'title')


class UserSerializer(serializers.ModelSerializer):

    # stage = UserStageSerializer(many=True, required=False)

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'role')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        if validated_data['role'] == 'teacher' or validated_data['role'] == 'user':
            user.email_confirmed = False  # Устанавливаем флаг is_active в False для активации почты
            self.send_activation_email(user)  # Отправляем письмо для активации почты
        user.save()
        return user

    def send_activation_email(self, user):
        current_site = get_current_site(self.context.get('request'))
        mail_subject = 'Активация учетной записи'
        message = render_to_string('api/activation_email.html', {
            'user': user,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': default_token_generator.make_token(user),
        })
        to_email = user.email
        email = EmailMessage(mail_subject, message, to=[to_email])
        email.send()



class StudentSerializer(serializers.ModelSerializer):


    user = UserSerializer(read_only=True)

    class Meta: 
        model = Student
        fields = '__all__'