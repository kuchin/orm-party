from fastadmin import TortoiseModelAdmin, register


@register(User)
class UserAdmin(TortoiseModelAdmin):
    fieldsets = [
        (None, {"fields": ["name", "email"]}),
        ("Status", {"fields": ["is_active", "role"]}),
    ]
    readonly_fields = ["created_at", "updated_at"]
