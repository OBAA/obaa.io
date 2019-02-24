import os
import random
from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import pre_save
from django.urls import reverse
from django.utils import timezone
from django.utils.text import slugify

from main.utils import unique_slug_generator
from tags.models import Tag

User = get_user_model()


# Create your models here.

class Author(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=120, unique=True)
    slug = models.SlugField(max_length=120, blank=True, unique=True)
    bio = models.TextField(max_length=400, help_text="Enter your bio details here.")
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["pk"]

    def __str__(self):
        return str(self.user)

    def get_absolute_url(self):
        return reverse('blog:author', kwargs={'slug': self.slug})


def author_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.name)
    if not instance.name:
        instance.name = instance.user.full_name


pre_save.connect(author_pre_save_receiver, sender=Author)


class Category(models.Model):
    title = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=120, blank=True, unique=True)
    description = models.TextField(blank=True)
    # order = models.IntegerField(blank=True)

    parent_category = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)

    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['pk']

    def __str__(self):
        full_path = [self.title]
        k = self.parent_category

        while k is not None:
            full_path.append(k.title)
            k = k.parent_category

        return ' -> '.join(full_path[::-1])

    def get_absolute_url(self):
        return reverse('blog:category', kwargs={'slug': self.slug})

    def get_cat_list(self):
        k = self.parent_category
        breadcrumb = ["dummy"]
        while k is not None:
            breadcrumb.append(k.slug)
            k = k.parent

        for i in range(len(breadcrumb) - 1):
            breadcrumb[i] = '/'.join(breadcrumb[-1:i - 1:-1])
        return breadcrumb[-1:0:-1]


def category_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(category_pre_save_receiver, sender=Category)


class BlogPostQuerySet(models.query.QuerySet):
    def all(self):
        return self.filter(is_active=True)


class BlogPostManager(models.Manager):
    def get_queryset(self):
        return BlogPostQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().all()


class BlogPost(models.Model):
    author = models.ForeignKey(Author, on_delete=models.SET_NULL, null=True, related_name='blog')

    title = models.CharField(max_length=120)
    slug = models.SlugField(max_length=120, blank=True, unique=True)

    content = models.TextField(max_length=6000)

    category = models.ForeignKey(Category, related_name='blog', on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, related_name='blog')

    is_active = models.BooleanField(default=True)
    is_published = models.BooleanField(default=False)

    created_date = models.DateTimeField(auto_now_add=True)
    published_date = models.DateTimeField(blank=True, null=True)
    updated_date = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['created_date', 'published_date']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:post', kwargs={'slug': self.slug})

    def publish(self):
        self.published = True
        self.published_date = timezone.now()
        self.save()


def post_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(post_pre_save_receiver, sender=BlogPost)


class Comments(models.Model):
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='blog_comment')
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE)
    content = models.TextField(max_length=600, help_text="Enter comments here.")
    anonymous_post = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Comments'
        ordering = ["timestamp"]

    def __str__(self):
        """
        String for representing the Model object.
        """
        len_title = 75
        if len(self.content) > len_title:
            title_string = self.content[:len_title] + '...'
        else:
            title_string = self.content
        return title_string
