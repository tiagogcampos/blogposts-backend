import { Controller, Get } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { Post, Body } from '@nestjs/common'
import { AuthUserDto } from '../dto/auth-user.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async validateCredentials(
    @Body() loginUserDto: AuthUserDto,
  ): Promise<object> {
    return this.usersService.credentialsValidation(loginUserDto)
  }

  @Get()
  getHello() {
    return {
      success: true,
    }
  }
}
