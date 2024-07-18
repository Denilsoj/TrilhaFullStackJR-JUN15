import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    validate: {
      validator: (value: string): boolean => {
        return validator.isEmail(value);
      },
      message: 'E-mail inválido',
    },
  },
  passwordHash: {
    type: String,
    require: true,
  },
});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
