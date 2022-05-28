import { get, tableNames } from '../__db__';
import { Repository } from '../models/Repository';

const REPOSITORY: tableNames = 'Repository';

const repo = {
  Query: {
    repo: async (params: any, args: { id: string }) => {
      const result = await get<typeof REPOSITORY>({ table: REPOSITORY });
      return result.filter((repo: Repository) => repo.id === args.id)[0];
    },
  },
  // Mutation: {},
};

export default repo;
