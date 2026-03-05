from fastadmin import TortoiseModelAdmin, register


@register(User)
class UserAdmin(TortoiseModelAdmin):
    list_display = ["name", "email", "created_at"]
    search_fields = ["name", "email"]
    list_filter = ["created_at"]
