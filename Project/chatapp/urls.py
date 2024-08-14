from django.urls import path, include
from chatapp.views import *
app_name = 'chatapp'
urlpatterns = [
    path('company/', company_chat, name='company'),
    path('customer/', customer_chat, name='customer'),
]