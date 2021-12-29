"""sentag URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from django.contrib.auth import views as auth_views
from users import views as users_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('tag_sentenze.urls')),
    path('register/', users_views.register, name='register'),
    path('create_users/', users_views.createUsers, name='create_users'),
    path('delete_user/<int:id>', users_views.deleteUser, name='delete_user'),
    path('update_user/<int:id>', users_views.updateUser, name='update_user'),
    path('create_schemas/', users_views.createSchemas, name='create_schemas'),
    path('create_tasks/', users_views.createTasks, name='create_tasks'),
    path('delete_task/<int:id>', users_views.deleteTask, name='delete_task'),
    path('update_task/<int:id>', users_views.updateTask, name='update_task'),
    path('new_task/', users_views.newTask, name='new_task'),
    path('create_juds/', users_views.createJuds, name='create_juds'),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),
    path("select2/", include("django_select2.urls")),
    path('editor_page/', include('users.urls'))
]

# for visualizing uploaded files during developement
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)