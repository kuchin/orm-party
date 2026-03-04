users = User.select().order_by(User.created_at.desc())
