import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please, add name.'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please, add email.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please, add password.'],
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
