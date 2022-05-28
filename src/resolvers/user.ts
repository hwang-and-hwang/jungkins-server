import { get, tableNames } from '../__db__';
import { User } from '../models/User';

const USER: tableNames = 'User';

const User = {
  Query: {
    userInfo: async (params: any, args: { userId: string }) => {
      const result = await get<typeof USER>({ table: USER });
      return result.filter((user: User) => user.userId === args.userId)[0];
    },
  },
  // Mutation: {},
};

export default User;
