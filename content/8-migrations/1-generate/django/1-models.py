# Add a new field to the model

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    age = models.IntegerField(null=True)  # ← new
