import User from '../models/user.model';

export const getAll = async () => {
  const users = await User.find();

  return users;
};

export default {
  getAll,
};
