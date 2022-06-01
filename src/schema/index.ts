import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import userController from '../controllers/userController';

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLID },
    user_id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: userType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await userController.getUser(args);
      },
    },
    users: {
      type: new GraphQLList(userType),
      args: {},
      async resolve(parent, args) {
        return await userController.getUsers(args);
      },
    },
  },
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addUser: {
      type: userType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        user_id: { type: GraphQLID },
      },
      async resolve(args) {
        const data = await userController.addUser(args);
        return data;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
