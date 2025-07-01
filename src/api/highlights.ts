import prisma from "@/lib/prisma";

export const getHighligts = async () => {
  const highlights = await prisma.highlight.findMany({
    include: { article: { include: { category: true } } },
  });
  const normalized = highlights.map(({ article }) => ({
    ...article,
    category: article.category.name,
  }));
  return normalized;
};
export type HighlightType = Awaited<ReturnType<typeof getHighligts>>;
