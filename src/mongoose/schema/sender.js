import mongoose, { Schema } from "mongoose";

export const SenderSchema = new Schema({
    name: String
});

export const SenderModel = mongoose.model('Sender', SenderSchema);
