import { gql } from "apollo-server-fastify";

const typeDefs = gql`
    type Query {
        teamMember: [Person]
    }

    type Person {
        name: String!
        age: Int
    }
`;

export default typeDefs;
