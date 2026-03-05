from fastadmin import TortoiseModelAdmin, register


@register(User)
class UserAdmin(TortoiseModelAdmin):

    async def has_delete_permission(self, user_id: int) -> bool:
        user = await User.get(id=user_id)
        return user.is_superuser

    async def has_change_permission(self, user_id: int) -> bool:
        user = await User.get(id=user_id)
        return user.is_active
