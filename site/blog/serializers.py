from rest_framework import serializers
from .models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('id', 'author', 'title', 'content', 'category', 'tags', 'is_published')


