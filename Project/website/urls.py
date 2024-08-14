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
from website.views import *
app_name = 'website'
urlpatterns = [
    path('', home_view, name='home'),
    path('tour_create/', tour_create_view, name='tour_create'),
    path('tour/<int:tour_id>/', tour_detail_view, name='tour_detail'),
    path('own_tour_detail/<int:tour_id>/', own_tour_detail_view, name='own_tour_detail')

]