import { Controller } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from 'src/users/user.interface'
import { UsersService } from '../users/users.service'
import { Post, Body } from '@nestjs/common'
import { AuthUserDto } from '../dto/auth-user.dto'

@Controller('auth')
export class AuthController {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly usersService: UsersService,
  ) {}

  @Post('')
  async validateCredentials(
    @Body() loginUserDto: AuthUserDto,
  ): Promise<object> {
    return this.usersService.credentialsValidation(loginUserDto)
  }
}
