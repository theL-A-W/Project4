# models.py
from django.db import models
from django.contrib.auth.models import User

class Message(models.Model):
    user1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    user2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user1.username} to {self.user2.username}: {self.content}"



class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    pinned_stocks = models.CharField(max_length=255, blank=True, null=True)
    messages = models.ManyToManyField(Message, related_name='user_messages', blank=True)

    def __str__(self):
        return self.user.username

class Friendship(models.Model):
    user1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='friends_user1')
    user2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='friends_user2')
    # def __str__(self):
    #     return f"{self.user1.username} - {self.user2.username}"
    def get_usernames(self):
        return f"{self.user1.username} - {self.user2.username}"

    def __str__(self):
        return self.get_usernames()

class Stock(models.Model):
    symbol = models.CharField(max_length=10)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    pe_ratio = models.DecimalField(max_digits=10, decimal_places=2)
    dividend = models.DecimalField(max_digits=5, decimal_places=2)
    high_52_week = models.DecimalField(max_digits=10, decimal_places=2)
    low_52_week = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.symbol} - {self.name}"
