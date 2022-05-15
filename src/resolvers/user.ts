import { User } from '../models/types';
import { userList } from '../__db__/mock';

const User = {
  Query: {
    userInfo: (params: any, args: { userId: string }, context: any, info: any) =>
      userList.filter((user: User) => user.userId === args.userId)[0],
  },
};

export default User;
