// Add a new column type to DB interface
export interface UserTable {
  id: number
  name: string
  email: string
  age: number | null // ← new
}
