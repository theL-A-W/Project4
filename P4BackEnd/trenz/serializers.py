from rest_framework import serializers
from .models import UserProfile, Friendship, Message, Stock

class MessageSerializer(serializers.ModelSerializer):
    user1_username = serializers.ReadOnlyField(source='user1.username')
    user2_username = serializers.ReadOnlyField(source='user2.username')
    class Meta:
        model = Message
        fields = ['id', 'user1', 'user2', 'user1_username', 'user2_username', 'content', 'timestamp']

class UserProfileSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)
    class Meta:
        model = UserProfile
        fields = '__all__'

class FriendshipSerializer(serializers.ModelSerializer):
    usernames = serializers.SerializerMethodField() 
    class Meta:
        model = Friendship
        fields = ['id', 'usernames']

    def get_usernames(self, obj):
        return [obj.user1.username, obj.user2.username]

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = '__all__'
