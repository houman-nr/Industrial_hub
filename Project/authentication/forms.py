from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser, CompanyUser, CustomerUser

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email')  # 'password1' and 'password2' are included by default in UserCreationForm

class CompanyUserCreationForm(forms.ModelForm):
    class Meta:
        model = CompanyUser
        fields = ('company_name', 'company_address', 'company_phone')

class CustomerUserCreationForm(forms.ModelForm):
    class Meta:
        model = CustomerUser
        fields = [] 

class CustomAuthenticationForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'password')  # AuthenticationForm already handles these fields
