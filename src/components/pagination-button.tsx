"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const PaginationButton = ({
  articleLength,
}: {
  articleLength: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  return (
    <div className="place-self-end items-center flex  gap-2">
      <Button
        disabled={!page || parseInt(page) <= 1}
        onClick={() => {
          const prevPage = Math.max((Number(page) || 1) - 1, 1);
          const params = new URLSearchParams(
            Array.from(searchParams.entries()),
          );
          params.set("page", prevPage.toString());
          router.push(`${pathname}?${params.toString()}`);
        }}
      >
        <ChevronLeft /> Previous
      </Button>
      <Button
        disabled={articleLength < 10}
        onClick={() => {
          const params = new URLSearchParams(
            Array.from(searchParams.entries()),
          );
          const nextPage = (Number(page) || 1) + 1;
          params.set("page", nextPage.toString());
          router.push(`${pathname}?${params.toString()}`);
        }}
      >
        Next <ChevronRight />
      </Button>
    </div>
  );
};
