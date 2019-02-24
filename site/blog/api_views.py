from rest_framework import viewsets, generics
from .serializers import BlogPostSerializer
from .models import BlogPost


# Create your views here.

class BlogPostView(viewsets.ModelViewSet):
    serializer_class = BlogPostSerializer
    queryset = BlogPost.objects.all()


class BlogPostListCreate(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

