$ alembic upgrade head

# INFO [alembic.runtime.migration]
#   Running upgrade  -> ae10, add user age

# Apply next migration only
$ alembic upgrade +1
