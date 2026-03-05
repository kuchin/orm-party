from flask_admin import Admin
from flask_admin.contrib.peewee import ModelView
from flask_admin.actions import action

admin = Admin(app)


class UserAdmin(ModelView):

    @action("deactivate", "Deactivate", "Are you sure?")
    def action_deactivate(self, ids):
        User.update(is_active=False).where(User.id.in_(ids)).execute()


admin.add_view(UserAdmin(User))
