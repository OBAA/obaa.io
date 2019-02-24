from django.contrib import admin

from .models import Tag


# Register your admins here.
class TagAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'slug', 'is_active']
    list_filter = ['is_active']
    list_editable = ['is_active']

    class Meta:
        model = Tag


admin.site.register(Tag, TagAdmin)
