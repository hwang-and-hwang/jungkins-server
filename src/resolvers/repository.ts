import { Repo } from '../models/types';
import { repoList } from '../__db__/mock';

const repo = {
  repo: (params: any, args: { id: string }, context: any, info: any) =>
    repoList.filter((repo: Repo) => repo.id === args.id)[0],
};

export default repo;
