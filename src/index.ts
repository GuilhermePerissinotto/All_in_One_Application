import { resolvers } from './graphql/resolvers/allResolvers';
import { ApolloServer } from "apollo-server";
import { createConnection } from "typeorm";
import { typeDefs } from "./graphql/schemas/allSchema";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

createConnection().then(async connection => {
  server
    .listen()
    .then(({ url }) =>
      console.log(`Server is running on ${url}`)
    );

}).catch(err => console.log(err));


