from .base import *
from .local_secrets import secrets

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = secrets.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["127.0.0.1", "localhost"]

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
    'localhost:3000/'
)

DEFAULT_FROM_EMAIL = secrets.get('DEFAULT_FROM_EMAIL')
EMAIL_HOST = secrets.get('EMAIL_HOST')


EMAIL_HOST_USER = secrets.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = secrets.get('EMAIL_HOST_PASSWORD')
EMAIL_PORT = secrets.get('EMAIL_PORT')
EMAIL_USE_TLS = True

MANAGERS = (
    ('OBAA', 'itsobaa@gmail.com'),
)

ADMINS = MANAGERS

# WEBPACK_LOADER = {
#     'DEFAULT': {
#         'BUNDLE_DIR_NAME': 'bundles/',
#         'STATS_FILE': os.path.join(os.path.dirname(BASE_DIR), 'webpack.config', 'webpack-stats.json'),
#     }
# }
#
# if not DEBUG:
#     WEBPACK_LOADER['DEFAULT'].update({
#         'BUNDLE_DIR_NAME': 'dist/',
#         'STATS_FILE': os.path.join(BASE_DIR, 'webpack.config', 'webpack-stats-prod.json')
#     })


WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(os.path.dirname(BASE_DIR), 'webpack-stats.json'),
    }
}

if not DEBUG:
    WEBPACK_LOADER['DEFAULT'].update({
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(os.path.dirname(BASE_DIR), 'webpack-stats-prod.json')
    })



