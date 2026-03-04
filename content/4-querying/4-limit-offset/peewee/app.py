users = (
    User.select()
    .order_by(User.created_at.desc())
    .offset(20)
    .limit(10)
)
