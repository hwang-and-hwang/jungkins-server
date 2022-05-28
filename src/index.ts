import cors from '@fastify/cors';
import { ApolloServer } from 'apollo-server-fastify';
import fastify from 'fastify';

import resolvers from './resolvers';
import typeDefs from './schema';

const PORT = 5000;
const app = fastify();
const server = new ApolloServer({ typeDefs, resolvers });

// app.register(cors, {
//   origin: (origin, cb) => {
//     const hostname = new URL(origin).hostname;
//     const allowedHostnameRegEx = /(localhost|127.0.0.[\d])/gi;
//     if(allowedHostnameRegEx.test(hostname)) {
//       cb(null, true);
//       return;
//     }
//     cb(new Error("Not Allowed"), false);
//   }
// });

app.get('/ping', async (request, reply) => {
  return 'pong\n';
});

(async function () {
  await server.start();
  app.register(
    server.createHandler({
      cors: {
        origin: true,
      },
    }),
  );
  await app.listen(PORT, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();
