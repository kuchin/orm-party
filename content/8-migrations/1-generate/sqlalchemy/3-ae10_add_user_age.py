# Generated: alembic/versions/ae10_add_user_age.py

def upgrade():
    op.add_column(
        "users",
        sa.Column("age", sa.Integer(), nullable=True),
    )


def downgrade():
    op.drop_column("users", "age")
