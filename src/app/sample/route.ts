import { FastifyInstance } from "fastify";
import { getMessageHandler, postMessageHandler } from "./controller";

export const createSampleRoutes = async (server: FastifyInstance) => {
  server.zod.get(
    "/message",
    {
      operationId: "getMessage",
      querystring: "getMessageRequestSchema",
      response: {
        200: {
          description: "Sample",
          key: "getMessageResponseSchema",
        },
      },
      tags: ["Message"],
    },
    getMessageHandler
  );

  server.zod.post(
    "/message",
    {
      operationId: "postMessage",
      body: "postMessageRequestSchema",
      response: {
        200: {
          description: "Sample",
          key: "postMessageResponseSchema",
        },
      },
      tags: ["Message"],
    },
    postMessageHandler
  );
};
