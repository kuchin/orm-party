from django.contrib import admin
from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser

    def has_change_permission(self, request, obj=None):
        return request.user.has_perm("app.change_user")

    def get_readonly_fields(self, request, obj=None):
        if not request.user.is_superuser:
            return ["email", "role"]
        return []
