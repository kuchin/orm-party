# Create view via migration RunSQL
# Map to an unmanaged model
class ActiveUser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    class Meta:
        managed = False
        db_table = "active_users"

# Query like any model
users = ActiveUser.objects.filter(
    name__startswith="A"
)
