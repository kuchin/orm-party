from fastadmin import TortoiseModelAdmin, register


@register(User)
class UserAdmin(TortoiseModelAdmin):
    list_display = ["name", "email", "created_at"]
    ordering = ["-created_at"]
