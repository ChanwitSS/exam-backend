import mongoose, { Schema } from 'mongoose';
import { MessageSchema } from './message';

export const RoomSchema = new Schema({
  roomName: String,
});

export const RoomModel = mongoose.model('Room', RoomSchema);
