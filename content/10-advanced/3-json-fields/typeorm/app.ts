// entity: @Column({ type: "jsonb" }) metadata: object;

// Store JSON
await dataSource.getRepository(User).update(
  { id: 1 },
  { metadata: { theme: "dark", lang: "en" } }
);

// Query JSON field
const users = await dataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .where(
    "user.metadata->>'theme' = :theme",
    { theme: "dark" }
  )
  .getMany();

// Nested JSON
const users2 = await dataSource
  .getRepository(User)
  .createQueryBuilder("user")
  .where(
    "user.metadata->'address'->>'city' = :city",
    { city: "NYC" }
  )
  .getMany();
