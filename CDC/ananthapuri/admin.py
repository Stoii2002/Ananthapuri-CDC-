from django.contrib import admin
from .models import Feature  # Import the Feature model
from .models import Departments
from .models import Testimonials
from .models import Gallery
from .models import Blog

admin.site.register(Feature)  # Register the Feature model
admin.site.register(Departments)
admin.site.register(Testimonials)
admin.site.register(Gallery)

class BlogAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Blog, BlogAdmin)