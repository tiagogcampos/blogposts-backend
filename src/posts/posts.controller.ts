import { Controller, UseGuards, Get } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { AuthGuard } from '@nestjs/passport'
import { Model } from 'mongoose'
import { Post } from './post.interface'
import { GetUser } from '../users/user.decorator'
import { PostsService } from './posts.service'

@Controller('posts')
@UseGuards(AuthGuard('jwt'))
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPostsByUser(@GetUser() user): { username: string; posts: Post[] } {
    return this.postsService.getUserPosts(user)
  }
}
