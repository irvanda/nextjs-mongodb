import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
  },
  {
    collection: 'user',
  }
);

const user = mongoose.model('user', userSchema);

export default user;
