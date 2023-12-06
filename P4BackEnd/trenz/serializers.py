from rest_framework import serializers
from .models import UserProfile, Friendship, Message, Stock

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

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
