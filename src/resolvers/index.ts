import HNH from '../db';

const tempResolvers = {
  Query: {
    teamMember: () => HNH,
  },
};

export default tempResolvers;
