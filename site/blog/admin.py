from django.contrib import admin

from .models import Author, Category, Comments, BlogPost


# Register your admins here.
class AuthorAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'name', 'bio', 'is_active']
    list_filter = ['is_active']

    class Meta:
        model = Author


admin.site.register(Author, AuthorAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'description', 'parent_category', 'is_active']
    list_filter = ['is_active']
    list_editable = ['parent_category', 'is_active']

    class Meta:
        model = Category


admin.site.register(Category, CategoryAdmin)


class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'author', 'category', 'is_published', 'is_active', 'published_date']
    list_filter = ['is_published', 'is_active']
    list_editable = ['is_published', 'is_active']

    class Meta:
        model = BlogPost


admin.site.register(BlogPost, BlogPostAdmin)


class CommentsAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'author', 'post', 'anonymous_post', 'is_active', 'timestamp']
    list_filter = ['is_active']
    list_editable = ['is_active']

    class Meta:
        model = Comments


admin.site.register(Comments, CommentsAdmin)
