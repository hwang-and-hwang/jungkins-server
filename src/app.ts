import { join } from 'path';

import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import { FastifyPluginAsync } from 'fastify';
import * as mongoose from 'mongoose';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

export const uri =
  'mongodb+srv://hyunmindev:R2VFjGLXzAQNJ3BX@cluster0.8nrnd.mongodb.net/?retryWrites=true&w=majority';

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  await mongoose.connect(uri).catch((err) => console.log(err));

  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts,
  });
};

export default app;
export { app };
