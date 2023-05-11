import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
  id: String,
  body: String,
  image: String,
  senderName: String,
  roomName: String,
  createAt: Date,
});

export const MessageModel = mongoose.model('Message', messageSchema);
