import { Module } from '@nestjs/common'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { JwtStrategy } from './jwt.strategy'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [UsersModule, JwtModule.register({ secret: 'teste123' })],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService],
  exports: [JwtStrategy, JwtModule],
})
export class AuthModule {}
