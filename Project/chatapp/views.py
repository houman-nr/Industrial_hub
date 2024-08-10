from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Contact, Chat, ChatMembership, Message

def contact_list(request):
    contacts = Contact.objects.all().values('user__username', 'contact_user__username', 'created_at')
    return JsonResponse(list(contacts), safe=False)

def chat_list(request):
    chats = Chat.objects.all().values('name', 'created_at', 'is_group_chat')
    return JsonResponse(list(chats), safe=False)

def chat_membership_list(request):
    memberships = ChatMembership.objects.all().values('chat__name', 'user__username', 'joined_at', 'role')
    return JsonResponse(list(memberships), safe=False)

def message_list(request):
    messages = Message.objects.all().values('chat__name', 'user__username', 'content', 'timestamp', 'is_read')
    return JsonResponse(list(messages), safe=False)