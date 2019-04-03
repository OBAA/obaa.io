from django import forms
from .models import ContactMessage


class ContactMeForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ('full_name', 'email', 'message')

        # Form cleaning/validation would be done at the front-end.








