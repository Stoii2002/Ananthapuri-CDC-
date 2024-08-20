# views.py
from rest_framework import viewsets
from .models import Testimonials, Gallery
from .serializers import TestimonialsSerializer, GallerySerializer
from rest_framework import generics
from .models import Blog
from .serializers import BlogSerializer
from .models import Teachers
from .serializers import Teachersserializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer
from rest_framework.pagination import LimitOffsetPagination



class TestimonialsViewset(viewsets.ModelViewSet):
    queryset = Testimonials.objects.all()
    serializer_class = TestimonialsSerializer

class GalleryViewset(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class TeacherViewset(viewsets.ModelViewSet):
    queryset = Teachers.objects.all()   
    serializer_class = Teachersserializer


#Blogs
class BlogListView(generics.ListAPIView):
    serializer_class = BlogSerializer

    def get_queryset(self):
        return Blog.objects.all().order_by('-id')[:10]


class StandardResultsSetPagination(LimitOffsetPagination):
    default_limit = 3
    max_limit = 100

class FullBlogListView(generics.ListAPIView):
    queryset = Blog.objects.all().order_by('-id')
    serializer_class = BlogSerializer
    pagination_class = StandardResultsSetPagination



class BlogDetailView(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'



@api_view(['POST'])
def contact_form_submission(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)