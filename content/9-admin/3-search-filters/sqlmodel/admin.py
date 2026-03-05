from sqladmin import Admin, ModelView

admin = Admin(app, engine)


class UserAdmin(ModelView, model=User):
    column_list = [User.name, User.email, User.created_at]
    column_searchable_list = [User.name, User.email]
    column_filters = [User.created_at]


admin.add_view(UserAdmin)
