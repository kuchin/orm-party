from sqladmin import Admin, ModelView, action
from sqlmodel import Session

admin = Admin(app, engine)


class UserAdmin(ModelView, model=User):

    @action(name="deactivate", label="Deactivate users")
    def deactivate_action(self, request, pks):
        with Session(engine) as session:
            for pk in pks:
                user = session.get(User, int(pk))
                if user:
                    user.is_active = False
            session.commit()
        return "{}"


admin.add_view(UserAdmin)
