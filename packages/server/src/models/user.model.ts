import { model, Schema, Types } from 'mongoose';

import Names from '../constants/databaseCollectionNames';
import { UserTypes } from '../interfaces/enums';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHashed: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  address: String,
  phone: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: UserTypes,
    default: UserTypes.CUSTOMER,
  },
});

const User = model(Names.USER, userSchema);
export default User;
