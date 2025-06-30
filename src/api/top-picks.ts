import prisma from "@/lib/prisma";

export const getTopPick = async () => {
  const data = await prisma.topPick.findMany({ include: { article: true } });
  const normalized = data.map((item) => item.article);
  return normalized;
};
