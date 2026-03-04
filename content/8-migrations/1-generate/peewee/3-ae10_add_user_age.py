from playhouse.migrate import PostgresqlMigrator, migrate

migrator = PostgresqlMigrator(db)


def upgrade():
    migrate(
        migrator.add_column(
            "users",
            "age",
            IntegerField(null=True),
        )
    )


def downgrade():
    migrate(
        migrator.drop_column("users", "age")
    )
