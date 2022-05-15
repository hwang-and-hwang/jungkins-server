const repoResolvers = {
  Query: {
    repoAll: () => console.log('git에 등록된 모든 repo 꺼내기'),
    repo: (repoId: number) => console.log(repoId),
  },
};

export default repoResolvers;
