from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser, CompanyUser, CustomerUser


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email')  # 'password1' and 'password2' are included by default

    def __init__(self, *args, **kwargs):
        super(CustomUserCreationForm, self).__init__(*args, **kwargs)
        if self.instance.pk:
            self.fields['password1'].required = False
            self.fields['password2'].required = False

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if self.instance.pk and not password1 and not password2:
            return None
        return super().clean_password2()

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


