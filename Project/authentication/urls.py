"""
URL configuration for VirtualExhibitionSite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path, include
from .views import *
app_name = 'authentication'
urlpatterns = [
    path('signup_company/',signup_company_view, name='signup_company'),
    path('signup_customer/', signup_customer_view, name='signup_customer'),
    path('login_company/', login_company_view, name='login_company'),
    path('login_customer/', login_customer_view, name='login_customer'),
    path('logout/', logout_view, name='logout')
]