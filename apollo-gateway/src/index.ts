import { ApolloGateway, RemoteGraphQLDataSource } from "@apollo/gateway";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import jwt from "jsonwebtoken";

const port = 4000;
const app = express();

app.use((req, res, next) => {
  try {
    const authToken = req.headers.authorization;
    if (authToken) {
      const decodedToken = jwt.verify(authToken, "teste");
      // @ts-ignore
      req.user = decodedToken;
    }
    next();
  } catch (err) {
    next(err);
  }
});

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
      },
    });
  },
});

const server = new ApolloServer({
  gateway,
  context: ({ req }) => {
    // @ts-ignore
    return { user: req.user };
  },
});

server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port }, () =>
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
});
