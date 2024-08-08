# from .models import Tour, TourImage, TourVideo
# from django import forms

# class TourForm(forms.ModelForm):
#     profile_image = forms.ImageField(required=True)
#     images = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': True}), required=False)
#     videos = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': True}), required=False)
#     description = forms.CharField(widget=forms.Textarea, required=True)

#     class Meta:
#         model = Tour
#         fields = ['profile_image', 'description']

#     def save(self, commit=True):
#         tour = super().save(commit=False)
        
#         if commit:
#             tour.save()

#         # Handling multiple images
#         for image in self.files.getlist('images'):
#             TourImage.objects.create(tour=tour, image=image)
        
#         # Handling multiple videos
#         for video in self.files.getlist('videos'):
#             TourVideo.objects.create(tour=tour, video=video)

#         return tour