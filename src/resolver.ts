import tempResolvers from './resolvers';
import historyResolvers from './resolvers/history';
import repoResolvers from './resolvers/repository';
import userResolvers from './resolvers/user';

const resolvers = [tempResolvers, historyResolvers, repoResolvers, userResolvers];

export default resolvers;
