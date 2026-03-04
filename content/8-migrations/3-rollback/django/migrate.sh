# Revert to a previous migration
$ python manage.py migrate myapp 0001_initial

# Operations to perform:
#   Target: 0001_initial
# Running migrations:
#   Unapplying myapp.0002_user_age... OK
# Django auto-generates the reverse operation
# (drops the "age" column)

# Revert all migrations for an app
$ python manage.py migrate myapp zero
