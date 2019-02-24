from django.shortcuts import render
from django.views.generic import ListView
from .models import BlogPost


# Create your views here.


class BlogListView(ListView):
    template_name = 'base/base.html'
    title = 'Blog | OBAA.IO'
    component = 'blogApp'
    component_render = 'bundles/blogApp.js'  # Static render. No hot reload

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super(BlogListView, self).get_context_data(**kwargs)
        context['title'] = self.title
        context['component'] = self.component
        context['component_render'] = self.component_render
        return context

    def get_queryset(self):
        return BlogPost.objects.all()


