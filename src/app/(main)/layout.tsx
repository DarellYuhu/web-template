import { getCategories } from "@/api/categories";
import { getTemplate } from "@/api/templates";
import { Header } from "@/components/header";
import { ReactNode } from "react";

export default async function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  const categories = await getCategories();
  const template = await getTemplate();
  return (
    <div>
      <Header categories={categories} selected={template.header} />
      {children}
    </div>
  );
}
