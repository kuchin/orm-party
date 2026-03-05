from flask_admin import Admin
from flask_admin.contrib.peewee import ModelView

admin = Admin(app)


class UserAdmin(ModelView):
    form_columns = ["name", "email", "is_active", "role", "created_at", "updated_at"]
    form_widget_args = {
        "created_at": {"readonly": True},
        "updated_at": {"readonly": True},
    }


admin.add_view(UserAdmin(User))
