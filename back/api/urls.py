from django.urls import path, include
from . import views

urlpatterns = [
    path('user/activation/<uidb64>/<token>/',  views.UserActivationView.as_view(), name='verify_email_confirm'),
    path('user/create/',  views.UserRegistrationView.as_view()),
    path('classes/',  views.ClassView.as_view()),
    path('student/create/',  views.StudentCreationView.as_view()),
]
