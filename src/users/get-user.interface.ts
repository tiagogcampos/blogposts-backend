import { Post } from '../posts/post.interface'

export interface IGetUser {
  username: string
  id: string
  posts: Post[]
}
