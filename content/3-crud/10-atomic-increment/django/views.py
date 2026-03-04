from django.db.models import F

User.objects.filter(id=1).update(
    views=F("views") + 1
)
