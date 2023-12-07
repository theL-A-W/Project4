from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.http import HttpResponse
import json
from django.db.models import Q
from django.db import models
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


@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username', '')
        password = data.get('password', '')

        # Authenticate the user
        user = authenticate(request, username=username, password=password)

        if user is not None and user.is_active:
            # Assuming TokenAuthentication is used, get or create the token
            token, created = Token.objects.get_or_create(user=user)

            # Return user data along with the token
            user_data = {'username': user.username, 'email': user.email, 'id': user.id}
            return JsonResponse({'user': user_data, 'token': token.key})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

def list_all_users(request):
    users = User.objects.all()
    user_data = [{'username': user.username, 'email': user.email, 'id':user.id} for user in users]
    return JsonResponse({'users': user_data})

class UserProfile(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

class SendMessageView(generics.CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

class InboxView(generics.ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Message.objects.filter(receiver=self.request.user)


class Friendship(generics.ListCreateAPIView):
    queryset = Friendship.objects.all()
    serializer_class = FriendshipSerializer
    permission_classes = [permissions.IsAuthenticated]

class MessageView(generics.ListCreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

# class FriendshipMessagesView(generics.ListAPIView):
#     serializer_class = MessageSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         friend_username = self.request.query_params.get('friend', None)

#         if friend_username:
#             return Message.objects.filter(
#                 (models.Q(user1=self.request.user) & models.Q(user2__username=friend_username)) |
#                 (models.Q(user2=self.request.user) & models.Q(user1__username=friend_username))
#             )

#         return Message.objects.none()
# class FriendshipMessagesView(generics.ListCreateAPIView):
#     serializer_class = MessageSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         friend_username = self.request.query_params.get('friend', None)

#         if friend_username:
#             return Message.objects.filter(
#                 (models.Q(user1=self.request.user) & models.Q(user2__username=friend_username)) |
#                 (models.Q(user2=self.request.user) & models.Q(user1__username=friend_username))
#             )

#         return Message.objects.none()

#     def create(self, request, *args, **kwargs):
#         # Handle the creation of a new message
#         friend_username = request.data.get('friend', None)
#         friend_user = User.objects.get(username=friend_username)

#         # Ensure the friendship exists
#         friendship = Friendship.objects.filter(
#             (models.Q(user1=request.user, user2=friend_user) | models.Q(user1=friend_user, user2=request.user))
#         ).first()

#         if not friendship:
#             return Response({'error': 'Friendship not found'}, status=400)

#         # Create the message
#         data = {
#             'user1': request.user.id,
#             'user2': friend_user.id,
#             'content': request.data.get('content', ''),
#             'friendship_id': friendship.id,
#         }
#         serializer = self.get_serializer(data=data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()

#         return Response(serializer.data, status=201)
class FriendshipMessagesView(generics.ListCreateAPIView):
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        friend_username = self.request.query_params.get('friend', None)

        if friend_username:
            return Message.objects.filter(
                Q(user1=self.request.user, user2__username=friend_username) |
                Q(user2=self.request.user, user1__username=friend_username)
            )

        return Message.objects.none()

    def create(self, request, *args, **kwargs):
        friend_username = request.data.get('friend', None)
        content = request.data.get('content', '')
        user1 = request.data.get('sender','')
        user2 = request.data.get('receiver','')

        print("printing request data", request.data)

        friend_user = User.objects.filter(username=friend_username).first()


        # Create the message
        data = {
            'user1': user1,
            'user2': user2,
            'content': content,
            # 'friendship_id': friendship.id,
        }

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)

class StockDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    permission_classes = [permissions.IsAuthenticated]
    
class Stock(generics.ListCreateAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    permission_classes = [permissions.IsAuthenticated]


