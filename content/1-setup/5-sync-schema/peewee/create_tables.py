# Assumes db and models are imported

db.connect()
db.create_tables([User, Post, Order])
db.close()
