from django.db import models
from tinymce.models import HTMLField

class Testimonials(models.Model):
    name = models.CharField(max_length=15)
    Discription = models.TextField()
    def __str__(self):
        return self.name
class Gallery(models.Model):
    image = models.ImageField(upload_to='Gallery/')

class Blog(models.Model):
    name = models.CharField(max_length=255)
    description = HTMLField()
    image = models.ImageField(upload_to='blogs/')
    Banner = models.ImageField(upload_to='blogs/', default='blogs/default_banner.jpg')  # Add a default value here
    slug = models.SlugField(unique=True)
    meta_title = models.CharField(max_length=30,default="blog")

    def __str__(self):
        return self.name

class Teachers(models.Model):
    Name = models.CharField(max_length=15)
    Image = models.ImageField(upload_to='Teachers/')
    Designation = models.CharField(max_length=15)

    def __str__(self):
        return self.Name
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    message = models.TextField()

    def __str__(self):
        return self.name