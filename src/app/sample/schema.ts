import { z } from "zod";

export const getSampleRequestSchema = z.object({
  message: z.string().optional(),
});

export const getSampleResponseSchema = z.object({
  message: z.string(),
});

export type GetSampleRequest = z.infer<typeof getSampleRequestSchema>;

export type GetSampleResponse = z.infer<typeof getSampleResponseSchema>;

export const sampleSchemas = {
  getSampleRequestSchema,
  getSampleResponseSchema,
};
