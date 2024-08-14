from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.core.exceptions import ValidationError
from .forms import CustomUserCreationForm, CompanyUserCreationForm, CustomerUserCreationForm
from .models import CustomUser, CompanyUser, CustomerUser
from django.contrib import messages
from django.contrib.auth.decorators import login_required


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
                return redirect('authentication:login_company')
            except ValidationError as e:
                user_form.add_error(None, e.message)
                print(e.message)
        else:
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
                return redirect('authentication:login_customer')
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
            return render(request, 'website_templates/companyProfile.html',{'user' : user})
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
            return render(request, 'website_templates/customerProfile.html', {'user' : user})
        else:
            messages.error(request, 'Invalid credentials or not a customer user')
    return render(request, 'login_templates/customerLoginForm.html')

def logout_view(request):
    logout(request)
    return render(request,'website_templates/home.html')



@login_required
def edit_company_profile_view(request):
    print(request.user)
    try:
        company_user = request.user.companyuser
    except CompanyUser.DoesNotExist:
        company_user = CompanyUser.objects.create(user=request.user)

    if request.method == 'POST':
        company_form = CompanyUserCreationForm(request.POST, instance=company_user)
        user_form = CustomerUserCreationForm(request.POST, instance=request.user)
        if company_form.is_valid() and user_form.is_valid():
            user_form.save()
            company_form.save()
            return render(request, 'website_templates/companyProfile.html',{'user' : request.user})
    else:

        company_form = CompanyUserCreationForm(instance=company_user)
        user_form = CustomerUserCreationForm(instance=request.user)

    return render(request, 'website_templates/companyProfileEdit.html', {
        'user_form': user_form,
        'company_form': company_form
    })

def edit_customer_profile_view(request):
    if not request.user.is_customer:
        messages.error(request, "You are not authorized to access this page.")
        return redirect('authentication:login_customer')
    
    if request.method == 'POST':
        user_form = CustomUserCreationForm(request.POST, instance=request.user)
        if user_form.is_valid():
            user_form.save()
            messages.success(request, 'Profile updated successfully.')
            return render(request, 'website_templates/customerProfile.html', {'user' : request.user})
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        user_form = CustomUserCreationForm(instance=request.user)

    return render(request, 'website_templates/customerProfileEdit.html', {
        'user_form': user_form
    })