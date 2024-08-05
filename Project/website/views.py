from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate


def home_view(request):
    return render(request, 'website_templates/home.html')





