from django.db import connection

with connection.cursor() as cursor:
    cursor.execute(
        "SELECT id, name, email FROM users "
        "WHERE age > %s AND city = %s",
        [25, "NYC"],
    )
    rows = cursor.fetchall()
