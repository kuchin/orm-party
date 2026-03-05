from flask_admin import Admin
from flask_admin.contrib.peewee import ModelView

admin = Admin(app)


class UserAdmin(ModelView):
    column_list = ["name", "email", "created_at"]
    column_default_sort = ("created_at", True)


admin.add_view(UserAdmin(User))
