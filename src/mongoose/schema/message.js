import mongoose, { Schema } from 'mongoose';
import { SenderSchema } from './sender';

export const MessageSchema = new Schema({
  id: String,
  body: String,
  image: String,
  from: SenderSchema,
  createAt: Date,
  // room: { type: mongoose.Types.ObjectId, ref: 'Room' },
  roomName: String,
});

export const MessageModel = mongoose.model('Message', MessageSchema);
