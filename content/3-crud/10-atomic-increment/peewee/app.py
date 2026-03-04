User.update(
    views=User.views + 1
).where(User.id == 1).execute()
