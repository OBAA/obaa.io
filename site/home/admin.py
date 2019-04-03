from django.contrib import admin
from .models import ContactMessage


# Register your models here.
class ContactMeAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'full_name']
    # list_filter = ['']
    # list_editable = ['']

    class Meta:
        model = ContactMessage


admin.site.register(ContactMessage, ContactMeAdmin)




