import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServer } from 'apollo-server';
import Debug from 'debug';

import typeDefs from "./graphql/typeDefs";
import { userResolver } from "./graphql/resolver";

const debug = Debug('user');

const resolvers = userResolver

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  context: ({ req }) => {
    if (req.body.operationName === 'signIn') {
      return {}
    }
    // @ts-ignore
    const user = req.headers.user ? JSON.parse(req.headers.user) : null;
    // console.log(req.headers)
    return { user };
  }
});

server.listen({ port: 4001 }).then(() => {
  debug('service started');
});
