from django.contrib import admin
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget

from .models import User, UserStage, Teacher, Student, Class, Stage, Task, Test, Answer, TestResult

# Register your models here.
class StageAdminForm(forms.ModelForm):
    # Подключение виджета для поля теории при настройке этапов в админке
    theory = forms.CharField(label='Теоритическая информация', widget=CKEditorUploadingWidget())

    class Meta:
        model = Stage
        fields= "__all__"


# Регистрация модели User
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'first_name', 'last_name', 'role']