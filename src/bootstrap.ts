import Fastify, { FastifyInstance } from "fastify";
import { FastifyZod, buildJsonSchemas, register } from "fastify-zod";
import { patchSchemas, registerRoutes } from "./app";
import ds from "./db/ds";

export const server: FastifyInstance = Fastify({
  logger: true,
});

declare module "fastify" {
  interface FastifyInstance {
    readonly zod: FastifyZod<typeof patchSchemas>;
  }
}

const bootstrap = async () => {
  await ds.initialize();
  await register(server, {
    jsonSchemas: buildJsonSchemas(patchSchemas),
  });

  await registerRoutes(server);

  try {
    await server.listen({
      host: process.env.APP_HOST || "127.0.0.1",
      port: 8000,
    });
    console.log(`Server listening on 8000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

bootstrap();
