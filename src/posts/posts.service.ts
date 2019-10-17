import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Post } from './post.interface'
import { Model } from 'mongoose'
import { UsersService } from '../users/users.service'
import { User } from '../users/user.interface'

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<Post>,
    private readonly usersService: UsersService,
  ) {}

  getUserPosts(user: User): { username: string; posts: Post[] } {
    return {
      username: user.username,
      posts: user.posts,
    }
  }
}
