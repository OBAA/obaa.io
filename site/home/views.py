from django.shortcuts import render
from django.views import View


# Create your views here.

class IndexView(View):
    title = 'OBAA.IO | Digital Services'
    template = 'base/base.html'
    component = 'homeApp'
    component_render = 'bundles/homeApp.js'  # Static render. No hot reload

    def get(self, request):
        """
        Props are passed to React via window.props

        """
        props = {
            'users': [
                {'username': 'alice'},
                {'username': 'bob'},
            ]
        }

        context = {
            'title': self.title,
            'component': self.component,
            'component_render': self.component_render,
            'props': props,
        }

        return render(request, self.template, context)

