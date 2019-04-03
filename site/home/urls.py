from django.urls import path, re_path

from . import views as home_views


urlpatterns = [
    # match the root
    path('', home_views.IndexView.as_view()),
    path('contact-me/', home_views.ContactMeView.as_view()),

    # match all other pages
    re_path(r'^(?:.*)/?$', home_views.IndexView.as_view()),
]
