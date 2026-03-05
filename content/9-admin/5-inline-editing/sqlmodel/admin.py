# sqladmin doesn't support inline editing
# Edit related models through their own admin view
from sqladmin import Admin, ModelView

admin = Admin(app, engine)


class UserAdmin(ModelView, model=User):
    column_details_list = [User.name, User.email, User.posts]


admin.add_view(UserAdmin)
