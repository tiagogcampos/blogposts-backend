import { Controller, Get } from '@nestjs/common'
import { Post, Body } from '@nestjs/common'
import { AuthUserDto } from '../dto/auth-user.dto'
import { IToken } from './accessToken.interface'
import { AuthService } from './auth.service'
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginUserDto: AuthUserDto): Promise<IToken> {
    return this.authService.login(loginUserDto)
  }
}
