import prisma from "@/lib/prisma";

export const getHighligts = async () => {
  const highlights = await prisma.highlight.findMany({
    include: { article: true },
  });
  const normalized = highlights.map((item) => item.article);
  return normalized;
};
