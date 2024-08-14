from django import forms
from .models import Tour, TourImage

class TourForm(forms.ModelForm):
    class Meta:
        model = Tour
        fields = ['profile_image', 'description']

class TourImageForm(forms.ModelForm):
    class Meta:
        model = TourImage
        fields = ['image']
