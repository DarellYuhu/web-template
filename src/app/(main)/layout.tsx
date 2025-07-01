import { getCategories } from "@/api/categories";
import { Header } from "@/components/header";
import { ReactNode } from "react";

export default async function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  const categories = await getCategories();
  return (
    <div>
      <Header categories={categories} />
      {children}
    </div>
  );
}
