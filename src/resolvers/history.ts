import { History } from '../models/types';
import { historyList } from '../__db__/mock';

const history = {
  history: (params: any, args: { repoId: string }, context: any, info: any) =>
    historyList.filter((history: History) => history.repoId === args.repoId)[0],
};

export default history;
