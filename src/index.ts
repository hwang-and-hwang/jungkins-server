import fastify from 'fastify';
import typeDefs from './schema';
import resolvers from './resolver';
import { ApolloServer } from 'apollo-server-fastify';

const PORT = 5000;
const app = fastify();
const server = new ApolloServer({ typeDefs, resolvers });

app.get('/ping', async (request, reply) => {
  return 'pong\n';
});

(async function () {
  await server.start();
  app.register(server.createHandler());
  await app.listen(PORT, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();
