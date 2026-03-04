import { Generated } from 'kysely'

export interface PostTable {
  id: Generated<number>
  title: string
}

export interface TagTable {
  id: Generated<number>
  name: string
}

export interface PostTagTable {
  post_id: number
  tag_id: number
}

export interface DB {
  posts: PostTable
  tags: TagTable
  post_tags: PostTagTable
}
