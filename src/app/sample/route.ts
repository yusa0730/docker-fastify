import { FastifyInstance } from "fastify";
import { getSampleHandler } from "./controller";

export const createSampleRoutes = async (server: FastifyInstance) => {
  server.zod.get(
    "/sample",
    {
      operationId: "getSample",
      querystring: "getSampleRequestSchema",
      response: {
        200: {
          description: "Sample",
          key: "getSampleResponseSchema",
        },
      },
      tags: ["Sample"],
    },
    getSampleHandler
  );
};
