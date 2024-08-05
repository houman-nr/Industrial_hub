from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.core.exceptions import ValidationError
from django import forms
from django.contrib.auth.forms import AuthenticationForm

class CustomUser(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_company = models.BooleanField(default=False)
    
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='user',
    )

    def clean(self):
        if self.is_customer and self.is_company:
            raise ValidationError("User cannot be both customer and company")

    def __str__(self):
        return self.username

class CompanyUser(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    company_name = models.CharField(max_length=255)
    company_address = models.CharField(max_length=255)
    company_phone = models.CharField(max_length=15)

    def __str__(self):
        return self.company_name

class CustomerUser(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.user.username
    
    
class CustomLoginForm(AuthenticationForm):
    username = forms.CharField(label='نام کاربری')
    password = forms.CharField(label='رمز عبور', widget=forms.PasswordInput)
