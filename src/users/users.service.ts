import { Injectable, NotFoundException } from '@nestjs/common'
import { User } from './user.interface'
import { hash, compare } from 'bcryptjs'
import { AuthUserDto } from 'src/dto/auth-user.dto'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async registerUser(registerUserDto: AuthUserDto): Promise<User> {
    const { username, password } = registerUserDto
    const newPassword = await hash(password, 12)
    const newUser = new this.userModel({
      username,
      password: newPassword,
    })
    return await newUser.save()
  }

  async credentialsValidation(loginUserDto: AuthUserDto): Promise<{success: boolean, user: User}> {
    const { username, password } = loginUserDto
    const user = await this.getUserByUsername(username)
    const success = await compare(password, user.password)
    return {
      success,
      user,
    }
  }

  async getUserByUsername(username: string): Promise<User> {
    const found = await this.userModel.findOne({ username })
    if (!found) {
      throw new NotFoundException('User not found')
    }
    return found
  }

  async getUserById(id: string): Promise<User> {
    const found = await this.userModel.findById(id)
    if (!found) {
      throw new NotFoundException('User not found.')
    }

    return found
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec()
  }
}
