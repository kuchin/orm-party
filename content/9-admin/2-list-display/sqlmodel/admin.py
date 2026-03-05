from sqladmin import Admin, ModelView

admin = Admin(app, engine)


class UserAdmin(ModelView, model=User):
    column_list = [User.name, User.email, User.created_at]
    column_default_sort = ("created_at", True)


admin.add_view(UserAdmin)
