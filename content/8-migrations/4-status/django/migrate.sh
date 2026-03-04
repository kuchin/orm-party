$ python manage.py showmigrations myapp

# myapp
#  [X] 0001_initial
#  [X] 0002_user_age
#  [ ] 0003_user_avatar  ← pending

$ python manage.py showmigrations --plan

# [X]  myapp.0001_initial
# [X]  myapp.0002_user_age
# [ ]  myapp.0003_user_avatar
