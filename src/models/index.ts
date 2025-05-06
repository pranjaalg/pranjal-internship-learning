import { ApolloServer, gql } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config(); 

const prisma = new PrismaClient();

// GraphQL Schema
const typeDefs = gql`

  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!): User
    updateUser(id: ID!, firstName: String, lastName: String): User
    deleteUser(id: ID!): Boolean
  }
`;

// Resolvers
const resolvers = {
  Query: {
    users: async () => await prisma.user.findMany(),
    user: async (_: any, { id }: { id: string }) =>
      await prisma.user.findUnique({ where: { id } }),
  },
  Mutation: {
    createUser: async (_: any, { firstName, lastName }: { firstName: string; lastName: string }) =>
      await prisma.user.create({
        data: { firstName, lastName },
      }),

    updateUser: async (
      _: any,
      { id, firstName, lastName }: { id: string; firstName?: string; lastName?: string }
    ) =>
      await prisma.user.update({
        where: { id },
        data: { firstName, lastName },
      }),

    deleteUser: async (_: any, { id }: { id: string }) => {
      try {
        await prisma.user.delete({ where: { id } });
        return true;
      } catch (e) {
        return false;
      }
    },
  },
};


const PORT = process.env.PORT || 4001;

// Start Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
