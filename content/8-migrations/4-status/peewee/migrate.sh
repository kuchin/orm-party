# No built-in migration status command in Peewee.
# Common workaround: track applied files in a custom
# migrations table and query it.
$ psql "$DATABASE_URL" -c "SELECT * FROM migrations ORDER BY id;"
