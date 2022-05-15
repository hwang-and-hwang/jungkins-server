const historyResolvers = {
  Query: {
    historyAll: () => console.log('hi'),
    history: (repoId: number) => console.log(repoId),
  },
};

export default historyResolvers;
