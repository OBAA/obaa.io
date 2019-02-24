from .base import *
from .local_secrets import secrets

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '4z(18c2k&-u=je=f1k@6ml$gric!%(b3%$7!5ln0kh8lzdp3p6'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["127.0.0.1"]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog.apps.BlogConfig',
    'tags.apps.TagsConfig',
]