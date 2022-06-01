import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';

import { uri } from '../app';
import User from '../models/User';

const generateUserData = () =>
  Array.from({ length: 50 }, () => ({
    name: faker.fake(`{{name.firstName}}`),
    age: (Math.random() * 100) % 50,
  }));

(async () => {
  await mongoose.connect(uri).catch((err) => console.log(err));
  await User.insertMany(generateUserData());
  console.log('User added');
  process.exit();
})();
