import { FastifyRequest, FastifyReply } from "fastify";
import { PostMessageRequest } from "./schema";
import ds from "../../db/ds";
import { Message } from "../../db/entities";

export const getMessageHandler = async (
  _: FastifyRequest,
  reply: FastifyReply
) => {
  const repo = ds.getRepository(Message);
  const latest = await repo
    .createQueryBuilder()
    .orderBy("created_at", "DESC")
    .getOne();

  if (latest) {
    reply.code(200).send({
      message: `Fastify GET Sample. Latest Message is "${latest.message}"`,
    });
  } else {
    reply.code(404).send({
      message: `Fastify GET Sample. No messages have been registered yet.`,
    });
  }
};

export const postMessageHandler = async (
  request: FastifyRequest<{ Body: PostMessageRequest }>,
  reply: FastifyReply
) => {
  const repo = ds.getRepository(Message);
  await repo.save(request.body);

  reply.code(200).send({
    message: `Fastify POST Sample. Posted Message is "${request.body.message}"`,
  });
};
