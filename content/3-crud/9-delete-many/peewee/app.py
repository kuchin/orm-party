User.delete().where(
    User.email.endswith("@old-domain.com")
).execute()
