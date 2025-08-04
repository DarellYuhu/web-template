import { z } from "zod/v4";

export const categorySchema = z.array(
  z.object({
    id: z.string().nonempty(),
    name: z.string(),
    slug: z.string(),
  }),
);

export const articleSchema = z.array(
  z.object({
    id: z.string().nonempty(),
    title: z.string(),
    contents: z.string(),
    categoryId: z.string(),
    authorName: z.string(),
    datePublished: z.iso.datetime(),
    slug: z.string(),
    imageUrl: z.string(),
  }),
);

export const otherSchema = z.array(
  z.object({
    articleId: z.string().nonempty(),
  }),
);

export const templateSchema = z.object({
  header: z.number().max(4).optional(),
  highlight: z.number().max(4).optional(),
  topPicks: z.number().max(4).optional(),
  articleHeader: z.number().max(3).optional(),
});
