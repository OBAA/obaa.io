import json
from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from django.middleware.csrf import get_token
from .forms import ContactMeForm

DEBUG = getattr(settings, "DEBUG")


# Create your views here.

class IndexView(View):
    title = 'OBAA.IO | Digital Services'
    template = 'base/base.html'
    component = 'homeApp'
    if DEBUG:
        component_render = 'bundles/homeApp.js'  # Static render. No hot reload
    else:
        component_render = 'prod/homeApp.js'

    def get(self, request):
        """
        Props are passed to React via window.props

        """
        props = {
            'auth': True,
            'csrfToken': get_token(request),
            'users': [
                {'username': 'alice'},
                {'username': 'bob'},
            ],
        }

        context = {
            'title': self.title,
            'component': self.component,
            'component_render': self.component_render,
            'props': props,
            'debug': DEBUG
        }

        return render(request, self.template, context)


class ContactMeView(View):
    form_class = ContactMeForm

    def post(self, request, *args, **kwargs):
        form = ContactMeForm()

        # Receive POST request from React frontend
        json_data = json.loads(request.body)

        # Initiate Form instance
        obj = form.save(commit=False)
        obj.full_name = json_data['fullname']
        obj.email = json_data['email']
        obj.message = json_data['message']
        obj.save()

        response = {
            'message': {
                'title': 'Message Delivered.',
                'content': "Your message was sent successfully. Give at least 24hrs "
                           "for a response. Thank you.",
            },
        }

        return JsonResponse(response, safe=False)
