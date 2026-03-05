from django.contrib import admin
from .models import User, Post


class PostInline(admin.TabularInline):
    model = Post
    extra = 1


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    inlines = [PostInline]
