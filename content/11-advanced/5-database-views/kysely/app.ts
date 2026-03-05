// Map view in DB types
interface DB {
  active_users: {
    id: number
    name: string
    email: string
  }
}

// Query like any table
const users = await db
  .selectFrom('active_users')
  .selectAll()
  .where('name', 'like', 'A%')
  .execute()
