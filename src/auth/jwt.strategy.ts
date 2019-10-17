import { Strategy, ExtractJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'teste123',
    })
  }

  async validate(payload: any) {
    if (!payload) {
      throw new UnauthorizedException()
    }
    const { username } = payload
    const userFound = this.userService.getUserByUsername(username)
    if (!userFound) {
      throw new UnauthorizedException()
    }

    return userFound
  }
}
