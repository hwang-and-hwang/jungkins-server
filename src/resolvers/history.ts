import { get, tableNames } from '../__db__';
import { History } from '../models/History';

const HISTORY: tableNames = 'History';

const history = {
  Query: {
    history: async (params: any, args: { repoId: string }) => {
      const result = await get<typeof HISTORY>({ table: HISTORY });
      return result.filter((history: History) => history.repoId === args.repoId)[0];
    },
  },
  // Mutation: {},
};

export default history;
