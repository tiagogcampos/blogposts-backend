import { Controller, Get } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { Post, Body } from '@nestjs/common'
import { AuthUserDto } from '../dto/auth-user.dto'
import { User } from '../users/user.interface'
@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async validateCredentials(
    @Body() loginUserDto: AuthUserDto,
  ): Promise<{success: boolean, user: User}> {
    return this.usersService.credentialsValidation(loginUserDto)
  }
}
