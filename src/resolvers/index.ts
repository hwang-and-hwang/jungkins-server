// export * from './history';
// export * from './repository';
// export * from './user';
import History from './history';
import Repo from './repository';
import User from './user';

const resolvers = { ...History, ...Repo, ...User };

export default resolvers;
