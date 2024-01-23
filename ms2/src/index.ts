import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServer } from 'apollo-server';
import Debug from 'debug';

import typeDefs from "./graphql/typeDefs";
import { userResolver } from "./graphql/resolver";

const debug = Debug('user');

const resolvers = userResolver

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
});

server.listen({ port: 4001 }).then(() => {
  debug('service started');
});
