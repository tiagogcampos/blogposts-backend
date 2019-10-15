import { Schema } from 'mongoose';

export const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
