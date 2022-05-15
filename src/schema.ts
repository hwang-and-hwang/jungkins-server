import { gql } from 'apollo-server-fastify';

const typeDefs = gql`
  type Query {
    teamMember: [Person]
  }

  type Person {
    name: String!
    age: Int
  }

  type User {
    userId: Int
    nickname: String
    email: String
    apiKey: String
  }
  type Repo {
    repoId: Int
    userId: Int
    repoName: String
    repoUrl: String
    repoBranch: String
    deployRepo: String
    state: boolean
  }

  type History {
    id: Int
    repoId: Int
    date: String
    state: String
  }
`;

export default typeDefs;
