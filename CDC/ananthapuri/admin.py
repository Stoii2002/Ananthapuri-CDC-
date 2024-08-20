from django.contrib import admin
from .models import Testimonials
from .models import Gallery
from .models import Blog
from .models import Teachers
from .models import Contact

admin.site.register(Testimonials)
admin.site.register(Gallery)
admin.site.register(Teachers)

class BlogAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Blog, BlogAdmin)
admin.site.register(Contact)