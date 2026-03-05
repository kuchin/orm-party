from django.contrib import admin
from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["name", "email"]}),
        ("Status", {"fields": ["is_active", "role"]}),
        ("Timestamps", {
            "classes": ["collapse"],
            "fields": ["created_at", "updated_at"],
        }),
    ]
    readonly_fields = ["created_at", "updated_at"]
