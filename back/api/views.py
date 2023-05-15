from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from .permissions import IsAuthenticatedAndVerfiendEmail

from .models import (
    User
)
from .serializers import (
    UserSerializer
)



class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.none()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        if user:
            return Response(
                {
                    "message": "Пользователь успешно зарегистрирован. Проверьте свою электронную почту для активации учетной записи."
                },
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(
                {"message": "Ошибка регистрации пользователя."}, status=status.HTTP_400_BAD_REQUEST
            )


class UserActivationView(generics.GenericAPIView):

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
        
