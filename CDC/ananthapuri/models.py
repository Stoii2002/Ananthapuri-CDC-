from django.db import models

class Feature(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    name = models.CharField(max_length=255)  # Add this line

    def __str__(self):
        return self.title