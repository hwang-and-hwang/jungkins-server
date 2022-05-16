import { User } from '../models/User';
import { get, tableNames } from "../__db__";

const USER: tableNames = 'User';

const User = {
  userInfo: async (params: any, args: { userId: string }) => {
    const result = await get({ table: USER });
    return result.filter((user: User) => user.userId === args.userId)[0];
  },
};

export default User;
