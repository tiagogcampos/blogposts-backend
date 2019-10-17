import { Module } from '@nestjs/common'
import { PostsController } from './posts.controller'
import { PostsService } from './posts.service'
import { UsersModule } from '../users/users.module'
import { PostSchema } from '../schemas/Post.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
