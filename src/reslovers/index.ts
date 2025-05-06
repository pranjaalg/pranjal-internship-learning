import { users } from './queries/users';
import { user } from './queries/user';
import { createUser } from './mutation/createUser';
import { updateUser } from './mutation/updateUser';
import { deleteUser } from './mutation/deleteUser';
import { typeDefs } from '../schema/typeDefs';
import { ApolloServer, gql } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

 export const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users,
    user,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};


const PORT = process.env.PORT || 4001;

// Start Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
