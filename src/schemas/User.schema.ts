import { Schema } from 'mongoose';
import { PostSchema } from './Post.schema';

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: {
    type: [PostSchema],
    default: [],
  },
});
