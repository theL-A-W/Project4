from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
# TAKE OUT THIS LINE
from django.http import HttpResponse
import json

from django.http import JsonResponse
from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import UserProfile, Friendship, Message, Stock
from .serializers import (
    UserProfileSerializer,
    FriendshipSerializer,
    MessageSerializer,
    StockSerializer,
)


# @csrf_exempt
# def login_view(request):
#     user_data = {'username': username, 'email': email}
#     token = 'your_generated_token'
#     return JsonResponse({'user': user_data, 'token': token})

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        # Assuming the login data is sent in the request body as JSON
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        # Extract email and password from the request data
        username = data.get('username', '')
        password = data.get('password', '')
        print(username, password)
        # Authenticate the user
        user = authenticate(request, username=username, password=password)
        print(user) 
        if user is not None:
            
            # user_profile, created = UserProfile.objects.get_or_create(user=user)
            # Assuming UserProfile has an email field
            user_data = {'username': user.username, 'email': user.email}

            token = 'your_generated_token'

            return JsonResponse({'user': user_data, 'token': token})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

def list_all_users(request):
    users = User.objects.all()
    user_data = [{'username': user.username, 'email': user.email} for user in users]
    return JsonResponse({'users': user_data})

class UserProfile(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

class Friendship(generics.ListCreateAPIView):
    queryset = Friendship.objects.all()
    serializer_class = FriendshipSerializer
    permission_classes = [permissions.IsAuthenticated]

class Message(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

class StockDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    permission_classes = [permissions.IsAuthenticated]
    
class Stock(generics.ListCreateAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    permission_classes = [permissions.IsAuthenticated]


