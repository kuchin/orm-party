from sqladmin import Admin, ModelView

admin = Admin(app, engine)


class UserAdmin(ModelView, model=User):
    form_columns = [User.name, User.email, User.is_active, User.role]
    form_excluded_columns = [User.created_at, User.updated_at]
    column_details_list = [
        User.name, User.email, User.is_active,
        User.role, User.created_at, User.updated_at,
    ]


admin.add_view(UserAdmin)
