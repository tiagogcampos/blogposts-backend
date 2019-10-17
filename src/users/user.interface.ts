import { Document } from 'mongoose'
import { Post } from '../posts/post.interface'

export interface User extends Document {
  id: string
  username: string
  password: string
  posts: Post[]
}
