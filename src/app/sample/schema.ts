import { z } from "zod";

export const getMessageRequestSchema = z.object({});

export const getMessageResponseSchema = z.object({
  message: z.string(),
});

export type GetMessageRequest = z.infer<typeof getMessageRequestSchema>;

export type GetMessageResponse = z.infer<typeof getMessageResponseSchema>;

export const postMessageRequestSchema = z.object({
  message: z.string(),
});

export const postMessageResponseSchema = z.object({
  message: z.string(),
});

export type PostMessageRequest = z.infer<typeof postMessageRequestSchema>;

export type PostMessageResponse = z.infer<typeof postMessageResponseSchema>;

export const sampleSchemas = {
  getMessageRequestSchema,
  getMessageResponseSchema,
  postMessageRequestSchema,
  postMessageResponseSchema,
};
