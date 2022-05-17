// export * from './history';
// export * from './repository';
// export * from './user';
import history from './history';
import repo from './repository';
import User from './user';

const resolvers = {
  Query: {
    ...history.Query,
    ...repo.Query,
    ...User.Query,
  },
  Mutation: {
    ...history.Mutation,
    ...repo.Mutation,
    ...User.Mutation,
  },
};

export default resolvers;
