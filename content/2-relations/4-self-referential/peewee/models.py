from peewee import CharField, ForeignKeyField, Model


class Employee(Model):
    name = CharField(max_length=255)
    manager = ForeignKeyField("self", null=True, backref="reports", column_name="manager_id")

    class Meta:
        table_name = "employees"
