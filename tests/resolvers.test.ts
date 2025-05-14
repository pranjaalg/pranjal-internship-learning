import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from '../src/schema/typeDefs';
import { resolvers } from '../src/resolvers';
import gql from 'graphql-tag';
import { prismaMock } from './mocks/prismaClient';

describe('GraphQL Resolver Tests', () => {
  let testServer: ApolloServer;

  beforeAll(async () => {
    testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
  });

  it('should fetch all users', async () => {
    const result = await testServer.executeOperation({
      query: gql`
        query {
          users {
            id
            firstName
            lastName
          }
        }
      `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.users).toHaveLength(2);
    expect(result.data?.users[0]).toHaveProperty('firstName', 'John');
  });
});
