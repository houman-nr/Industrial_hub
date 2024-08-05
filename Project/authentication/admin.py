from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, CompanyUser, CustomerUser

class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser',
                                    'groups', 'user_permissions', 'is_customer', 'is_company')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2'),
        }),
    )

    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'is_customer', 'is_company')
    search_fields = ('username', 'first_name', 'last_name', 'email')
    ordering = ('username',)

@admin.register(CompanyUser)
class CompanyUserAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'company_address', 'company_phone', 'user')
    search_fields = ('company_name', 'user__username', 'user__email')

@admin.register(CustomerUser)
class CustomerUserAdmin(admin.ModelAdmin):
    list_display = ('user',)
    search_fields = ('user__username', 'user__email')

admin.site.register(CustomUser, CustomUserAdmin)
