from django.urls import path, include
from . import views

urlpatterns = [
    path('user/activation/<uidb64>/<token>/',  views.UserActivationView.as_view(), name='verify_email_confirm'),
    path('user/',  views.UserView.as_view()),
    path('user/create/',  views.UserRegistrationView.as_view()),
    path('classes/',  views.ClassListView.as_view()),
    path('classes/create/',  views.ClassCreateView.as_view()),
    path('classes/delete/',  views.ClassDeleteView.as_view()),
    path('classes/student/',  views.StudentView.as_view()),
    path('tests/',  views.TestsView.as_view()),

]
