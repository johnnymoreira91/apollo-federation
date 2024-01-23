import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServer } from 'apollo-server';
import Debug from 'debug';

import defaultTypeDefs from "./graphql/typeDefs";
import { productResolver } from "./graphql/resolver";

const typeDefs = defaultTypeDefs
const resolvers = productResolver

const debug = Debug('user');

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
});

server.listen({ port: 4002 }).then(() => {
  debug('service started');
});
