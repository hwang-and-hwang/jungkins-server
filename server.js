'use strict';

require('dotenv').config();

const closeWithGrace = require('close-with-grace');
const Fastify = require('fastify');

const app = Fastify({
  logger: true,
});

const appService = require('./dist/app.js');
app.register(appService);

const closeListeners = closeWithGrace({ delay: 500 }, async function ({ signal, err, manual }) {
  if (err) {
    app.log.error(err);
  }
  await app.close();
});

app.addHook('onClose', (instance, done) => {
  closeListeners.uninstall();
  done();
});

app.listen({ port: process.env.PORT || 3000 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
