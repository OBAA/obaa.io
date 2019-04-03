from django.urls import path, re_path

from . import views as blog_views


urlpatterns = [
    path('', blog_views.BlogListView.as_view()),

    # Catch all url
    re_path(r'^.*/$', blog_views.BlogListView.as_view()),

]
