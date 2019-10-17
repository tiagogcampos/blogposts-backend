import { Controller, UseGuards, Get } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
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
