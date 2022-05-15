import { gql } from 'apollo-server-fastify';

const typeDefs = gql`
  type Query {
    userInfo(userId: ID!): User
    history(repoId: ID!): History
    repo(id: ID!): Repo
  }

  type User {
    userId: ID!
    nickname: String!
    email: String
    apiKey: String
  }
  type Repo {
    id: ID!
    repoId: ID
    userId: ID
    repoName: String!
    repoUrl: String!
    repoBranch: String
    deployRepo: String
    state: Boolean!
  }

  type History {
    id: ID!
    repoId: ID
    date: String
    state: String
  }
`;

export default typeDefs;
