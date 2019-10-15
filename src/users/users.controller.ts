import { Controller, Post, Body } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.interface'
import { AuthUserDto } from '../dto/auth-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async getUserById(id: string) {
    return await this.usersService.getUserById(id)
  }

  @Post()
  async registerUser(@Body() registerUserDto: AuthUserDto): Promise<User> {
    return await this.usersService.registerUser(registerUserDto)
  }
}
