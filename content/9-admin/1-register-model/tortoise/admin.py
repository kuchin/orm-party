# Shows __str__ representation by default
from fastadmin import TortoiseModelAdmin, register


@register(User)
class UserAdmin(TortoiseModelAdmin):
    pass
