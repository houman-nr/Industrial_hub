from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.core.exceptions import ValidationError
from .forms import CustomUserCreationForm, CompanyUserCreationForm, CustomerUserCreationForm
from .models import CustomUser, CompanyUser, CustomerUser
from django.contrib import messages

def signup_company_view(request):
    if request.method == 'POST':
        user_form = CustomUserCreationForm(request.POST)
        company_form = CompanyUserCreationForm(request.POST)
        if user_form.is_valid() and company_form.is_valid():
            user = user_form.save(commit=False)
            user.is_company = True
            try:
                user.clean()
                user.save()
                company_user = company_form.save(commit=False)
                company_user.user = user
                company_user.save()
                return redirect('website:home')
            except ValidationError as e:
                user_form.add_error(None, e.message)
        else:
            # Print form errors to debug
            print(user_form.errors)
            print(company_form.errors)
    else:
        user_form = CustomUserCreationForm()
        company_form = CompanyUserCreationForm()
    return render(request, 'signup_templates/companySignUpForm.html', {
        'user_form': user_form,
        'company_form': company_form
    })

def signup_customer_view(request):
    if request.method == 'POST':
        user_form = CustomUserCreationForm(request.POST)
        customer_form = CustomerUserCreationForm(request.POST)
        if user_form.is_valid() and customer_form.is_valid():
            user = user_form.save(commit=False)
            user.is_customer = True
            try:
                user.clean()
                user.save()
                customer_user = customer_form.save(commit=False)
                customer_user.user = user
                customer_user.save()
                return redirect('website:home')
            except ValidationError as e:
                user_form.add_error(None, e.message)
        else:
            print(user_form.errors)
            print(customer_form.errors)
    else:
        user_form = CustomUserCreationForm()
        customer_form = CustomerUserCreationForm()
    return render(request, 'signup_templates/customerSignUpForm.html', {
        'user_form': user_form,
        'customer_form': customer_form
    })

def login_company_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None and user.is_company:
            login(request, user)
            return redirect('website:home')
        else:
            messages.error(request, 'Invalid credentials or not a company user')
    return render(request, 'login_templates/companyLoginForm.html')

def login_customer_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None and user.is_customer:
            login(request, user)
            return redirect('website:home') 
        else:
            messages.error(request, 'Invalid credentials or not a customer user')
    return render(request, 'login_templates/customerLoginForm.html')

def logout_view(request):
    logout(request)
    return redirect('website:home')
