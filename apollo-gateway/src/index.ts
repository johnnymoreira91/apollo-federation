import { ApolloGateway, RemoteGraphQLDataSource }from '@apollo/gateway'
import { ApolloServer } from 'apollo-server-express'
import { expressjwt } from 'express-jwt'
import express from 'express'

const port = 4000;
const app = express();

app.use(
  expressjwt({
    secret: "teste",
    algorithms: ["HS256"],
    credentialsRequired: false
  })
);

const gateway = new ApolloGateway({
  serviceList: [
    { name: "user", url: "http://localhost:4001" },
    { name: "product", url: "http://localhost:4002" },
  ],
  buildService({ name, url }) {
    return new RemoteGraphQLDataSource({
      url,
      willSendRequest({ request, context }) {
        request.http?.headers.set(
          "user",
          // @ts-ignore
          context.user ? JSON.stringify(context.user) : null
        );
      }
    });
  }
});

const server = new ApolloServer({
  gateway,
  context: ({ req }) => {
    if (req.body.operationName === 'signIn') {
      return {}
    }
    // @ts-ignore
    const user = req.user || null;
    return { user };
  }
});

const startServer = async() => {
  await server.start()
  server.applyMiddleware({ app });
  
  app.listen({ port }, () =>
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
}

startServer()
// import { ApolloServer } from "apollo-server";
// import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

// const gateway = new ApolloGateway({
//   supergraphSdl: new IntrospectAndCompose({
//     subgraphs: [
//       { name: "user", url: "http://localhost:4001" },
//       { name: "product", url: "http://localhost:4002" },
//     ],
//   }),
// });

// const server = new ApolloServer({
//   gateway,
// });

// server
//   .listen({
//     port: 4000,
//   })
//   .then(({ url }: { url: string }) => {
//     console.log(`🚀 Gateway ready at ${url}`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
