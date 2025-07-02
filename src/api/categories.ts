import prisma from "@/lib/prisma";

export const getCategories = () => {
  return prisma.category.findMany();
};

export const getCategory = ({ slug }: { slug?: string }) => {
  return prisma.category.findUniqueOrThrow({ where: { slug } });
};
