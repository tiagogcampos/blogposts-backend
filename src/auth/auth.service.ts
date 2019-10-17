import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { AuthUserDto } from '../dto/auth-user.dto'
import { JwtService } from '@nestjs/jwt'
import { JwtPayload } from './jwt-payload.interface'
import { IToken } from './accessToken.interface'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginUserDto: AuthUserDto): Promise<IToken> {
    const credentialsValidation = await this.usersService.credentialsValidation(
      loginUserDto,
    )
    const { success, user } = credentialsValidation
    if (success) {
      const payload: JwtPayload = { username: user.username, id: user.id }
      const token: string = await this.jwtService.sign(payload)
      return {
        accessToken: token,
      }
    }
    throw new UnauthorizedException()
  }
}
