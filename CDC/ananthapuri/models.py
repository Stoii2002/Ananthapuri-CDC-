from django.db import models

class Feature(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    name = models.CharField(max_length=255)  # Add this line

    def __str__(self):
        return self.title
class Departments(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='department_images/', blank=True, null=True)

    def __str__(self):
        return self.title
