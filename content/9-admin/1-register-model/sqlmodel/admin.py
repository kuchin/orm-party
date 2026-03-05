# All fields displayed by default
from sqladmin import Admin, ModelView

admin = Admin(app, engine)


class UserAdmin(ModelView, model=User):
    pass


admin.add_view(UserAdmin)
