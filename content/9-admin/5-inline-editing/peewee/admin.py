from flask_admin import Admin
from flask_admin.contrib.peewee import ModelView
from flask_admin.contrib.peewee.form import InlineFormAdmin

admin = Admin(app)


class PostInline(InlineFormAdmin):
    form_columns = ["id", "title", "body"]


class UserAdmin(ModelView):
    inline_models = [PostInline(Post)]


admin.add_view(UserAdmin(User))
