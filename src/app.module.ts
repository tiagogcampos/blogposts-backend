import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/server', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
