from django.contrib import admin
from .models import Contact, Chat, ChatMembership, Message

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('user', 'contact_user', 'created_at')
    search_fields = ('user__username', 'contact_user__username')
    list_filter = ('created_at',)

@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'is_group_chat')
    search_fields = ('name',)
    list_filter = ('created_at', 'is_group_chat')

@admin.register(ChatMembership)
class ChatMembershipAdmin(admin.ModelAdmin):
    list_display = ('chat', 'user', 'joined_at', 'role')
    search_fields = ('chat__name', 'user__username')
    list_filter = ('joined_at', 'role')

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('chat', 'user', 'content', 'timestamp', 'is_read')
    search_fields = ('chat__name', 'user__username', 'content')
    list_filter = ('timestamp', 'is_read')

