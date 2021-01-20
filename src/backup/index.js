const { ApolloServer } = require('apollo-server');
const { resolvers } = require('../graphql/resolvers/allResolvers')
const { typeDefs } = require('./schema')
const { createConnection } = require('typeorm')
const { Human } = require('./graphql/db/entity/Human')

console.log(typeDefs);
const server = new ApolloServer({
    typeDefs,
    resolvers
})

createConnection().then(async connection => {
    //Each entity has its own repository which handles all operations with its entity. 
    //When you deal with entities a lot, Repositories are more convenient to use than EntityManagers
    let humanRepository = connection.getRepository(Human);

});

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );