import { Generated } from 'kysely'

export interface PostTable {
  id: Generated<number>
  title: string
  content: string | null
  views: number
  is_published: boolean
  published_at: Date | null
  created_at: Date
}

export interface DB {
  posts: PostTable
}
