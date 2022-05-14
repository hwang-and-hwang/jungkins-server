import HNH from "./db";

const resolvers = {
    Query: {
        teamMember: () => HNH,
    },
};

export default resolvers;
