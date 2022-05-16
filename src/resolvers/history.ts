import { History } from '../models/History';
import { get, tableNames } from "../__db__";

const HISTORY: tableNames = 'History';

const history = {
  history: async (params: any, args: { repoId: string }) => {
    const result = await get({ table: HISTORY });
    return result.filter((history: History) => history.repoId === args.repoId)[0];
  }
};

export default history;
