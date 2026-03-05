from flask_admin import Admin
from flask_admin.contrib.peewee import ModelView

admin = Admin(app)


class UserAdmin(ModelView):
    column_list = ["name", "email", "created_at"]
    column_searchable_list = ["name", "email"]
    column_filters = ["created_at"]


admin.add_view(UserAdmin(User))
