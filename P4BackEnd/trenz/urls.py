from . import views
from django.conf.urls import include
from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter



urlpatterns = [

    path('user-profile/<int:pk>/', views.UserProfile.as_view(), name='user-profile-detail'),
    path('friendship/', views.Friendship.as_view(), name='friendship-list-create'),
    path('message/', views.Message.as_view(), name='message-list-create'),
    path('stock/', views.Stock.as_view(), name='stock-list-create'),
    path('stock/<int:pk>/', views.StockDetail.as_view(), name='stock-detail'),


]
