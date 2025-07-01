import { z } from "zod/v4";

export const categorySchema = z.array(
  z.object({
    id: z.uuid(),
    name: z.string(),
    short: z.string(),
  }),
);

export const articleSchema = z.array(
  z.object({
    id: z.uuid(),
    title: z.string(),
    article: z.string(),
    categoryId: z.string(),
    authorName: z.string(),
    datePublished: z.iso.datetime(),
    imageUrl: z.string(),
  }),
);

export const otherSchema = z.array(
  z.object({
    articleId: z.uuid(),
  }),
);
