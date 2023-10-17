import { FastifyInstance } from "fastify";
import { createSampleRoutes } from "./sample/route";

export const registerRoutes = async (server: FastifyInstance) => {
  await server.register(createSampleRoutes);
};
