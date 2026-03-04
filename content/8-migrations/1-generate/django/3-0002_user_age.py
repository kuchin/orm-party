# Generated: myapp/migrations/0002_user_age.py

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("myapp", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="age",
            field=models.IntegerField(null=True),
        ),
    ]
