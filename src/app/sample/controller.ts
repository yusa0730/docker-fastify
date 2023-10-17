import { FastifyRequest, FastifyReply } from "fastify";
import { GetSampleRequest } from "./schema";

export const getSampleHandler = async (
  request: FastifyRequest<{ Querystring: GetSampleRequest }>,
  reply: FastifyReply
) => {
  reply.code(200).send({
    message: `Fastify Sample. Received Message is "${request.query.message}"`,
  });
};
