from django.db import models
from authentication.models import CompanyUser
from django.utils import timezone
class Tour(models.Model):
    company_user = models.ForeignKey(CompanyUser, on_delete=models.CASCADE, related_name='tours')
    profile_image = models.ImageField(upload_to='tours/profile_images/')
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.company_user.company_name} - Tour"

class TourImage(models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='tours/images/')

    def __str__(self):
        return f"{self.tour.company_user.company_name} - Image"
