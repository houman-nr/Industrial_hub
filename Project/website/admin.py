from django.contrib import admin
from .models import Tour, TourImage

@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = ('company_user', 'description')

@admin.register(TourImage)
class TourImageAdmin(admin.ModelAdmin):
    list_display = ('tour', 'image')