from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


# TAKE OUT THIS LINE
from django.http import HttpResponse


from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import UserProfile, Friendship, Message, Stock
from .serializers import (
    UserProfileSerializer,
    FriendshipSerializer,
    MessageSerializer,
    StockSerializer,
)


@csrf_exempt
def login_view(request):
    # Your login logic here
    return HttpResponse("Login view")

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


