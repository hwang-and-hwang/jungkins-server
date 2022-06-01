import { FastifyRequest } from 'fastify';

import User from '../models/User';

const getUser = async (req: FastifyRequest) => {
  try {
    const id = req.id;
    return await User.findById(id);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req: FastifyRequest) => {
  try {
    return await User.find();
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (req: FastifyRequest) => {
  try {
    const user = new User(req);
    const newUser = await user.save();
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export default { getUser, getUsers, addUser };
