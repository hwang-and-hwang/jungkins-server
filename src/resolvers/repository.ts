import { repoList } from '../__db__/mock';

const Repo = {
  Query: {
    Repo: () => repoList,
  },
};

export default Repo;
