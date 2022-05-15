const userResolvers = {
  Query: {
    userInfo: (userId: number) => console.log('userId 해당 유저 정보'),
  },
};

export default userResolvers;
