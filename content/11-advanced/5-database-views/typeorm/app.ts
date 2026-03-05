@ViewEntity({
  name: "active_users",
  expression: `
    SELECT id, name, email
    FROM users WHERE is_active = true
  `,
})
class ActiveUser {
  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  email: string;
}

const users = await dataSource
  .getRepository(ActiveUser)
  .createQueryBuilder("u")
  .where("u.name LIKE :name", { name: "A%" })
  .getMany();
