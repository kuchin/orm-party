# All fields displayed by default
from flask_admin import Admin
from flask_admin.contrib.peewee import ModelView

admin = Admin(app)
admin.add_view(ModelView(User))
