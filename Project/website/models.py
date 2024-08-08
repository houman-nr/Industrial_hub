from django.db import models
class Tour(models.Model):
    profile_image = models.ImageField(upload_to='profile_images/')
    description = models.TextField()

class TourImage(models.Model):
    tour = models.ForeignKey(Tour, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='tour_images/')

class TourVideo(models.Model):
    tour = models.ForeignKey(Tour, related_name='videos', on_delete=models.CASCADE)
    video = models.FileField(upload_to='tour_videos/')