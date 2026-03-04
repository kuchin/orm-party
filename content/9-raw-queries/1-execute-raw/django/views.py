from django.db import connection

with connection.cursor() as cursor:
    cursor.execute(
        "SELECT id, name, email FROM users "
        "WHERE created_at > '2024-01-01'"
    )
    rows = cursor.fetchall()
