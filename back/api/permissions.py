from rest_framework.permissions import BasePermission

class IsAuthenticatedAndVerfiendEmail(BasePermission):
   
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.email_confirmed)