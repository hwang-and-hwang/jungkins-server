import User from '../models/User';

export const getUser = async () => {
  try {
    return await User.find();
  } catch (error) {
    console.log(error);
  }
};
