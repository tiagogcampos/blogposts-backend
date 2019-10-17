import {
  Controller,
  Post,
  Body,
  Get,
  Request,
  UnauthorizedException,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.interface'
import { AuthUserDto } from '../dto/auth-user.dto'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GetUser } from './user.decorator'
import { IGetUser } from './get-user.interface'

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(@GetUser() user): IGetUser {
    if (!user) {
      throw new UnauthorizedException()
    }
    return {
      username: user.username,
      id: user.id,
      posts: user.posts,
    }
  }

  @Post()
  async registerUser(@Body() registerUserDto: AuthUserDto): Promise<User> {
    return await this.usersService.registerUser(registerUserDto)
  }
}
