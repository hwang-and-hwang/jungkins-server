import { Repository } from '../models/Repository';
import { get, tableNames } from "../__db__";

const REPOSITORY: tableNames = 'Repository';

const repo = {
  repo: async (params: any, args: { id: string }) => {
    const result = await get({ table: REPOSITORY });
    return result.filter((repo: Repository) => repo.id === args.id)[0];
  }
};

export default repo;
