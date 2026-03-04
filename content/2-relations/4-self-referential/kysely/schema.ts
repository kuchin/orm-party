import { Generated } from 'kysely'

export interface EmployeeTable {
  id: Generated<number>
  name: string
  manager_id: number | null
}

export interface DB {
  employees: EmployeeTable
}
