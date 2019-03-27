import mimetypes
from .base import *
from .local_secrets import secrets as local_secret

get_secrets = local_secret.get


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = get_secrets('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["127.0.0.1", "localhost", "178.62.76.148"]

AUTH_USER_MODEL = 'accounts.User'

BASE_URL = '127.0.0.1:8000'

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third Party
    'corsheaders',
    'rest_framework',
    'webpack_loader',

    # My APPS
    'accounts',
    'blog',
    'home',
    'tags',
]


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# We whitelist localhost:3000 because that's where frontend will be served
CORS_ORIGIN_WHITELIST = (
    'localhost:5000/'
)


DEFAULT_FROM_EMAIL = get_secrets('DEFAULT_FROM_EMAIL')
EMAIL_HOST = get_secrets('EMAIL_HOST')


EMAIL_HOST_USER = get_secrets('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = get_secrets('EMAIL_HOST_PASSWORD')
EMAIL_PORT = get_secrets('EMAIL_PORT')
EMAIL_USE_TLS = True

MANAGERS = (
    ('OBAA', 'itsobaa@gmail.com'),
)

ADMINS = MANAGERS


WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
    }
}

if not DEBUG:
    WEBPACK_LOADER['DEFAULT'].update({
        'BUNDLE_DIR_NAME': 'prod/',
        # 'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats-p.json'),
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats-prod.json')
    })


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Fix CSS mimetypes
mimetypes.add_type("text/css", ".css", True)
