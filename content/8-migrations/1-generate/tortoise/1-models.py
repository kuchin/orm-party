# Add a new field to the model

class User(Model):
    name = fields.CharField(max_length=100)
    email = fields.CharField(max_length=255, unique=True)
    age = fields.IntField(null=True)  # ← new
