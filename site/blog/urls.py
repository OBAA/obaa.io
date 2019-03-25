from django.urls import path

from . import views as blog_views


urlpatterns = [
    path('', blog_views.BlogListView.as_view()),

]
