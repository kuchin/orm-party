# Add a new field to the model

class User(Model):
    name = CharField(max_length=100)
    email = CharField(max_length=255, unique=True)
    age = IntegerField(null=True)  # ← new
