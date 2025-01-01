"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/products";
import Loading from "./Loading";
import { Input } from "./ui/input";

export default function FilteredProducts({ locale }: { locale: "en" | "ar" }) {
  const [search, setSearch] = useState<string>("");
  const [searchBtn, setSearchBtn] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTotalPages, setSearchTotalPages] = useState<number>(1);
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["products", currentPage, searchBtn],
    queryFn: async () => {
      const res = await getProducts(currentPage, search, locale);

      setCurrentPage(res.data.meta.currentPage);

      setSearchTotalPages(res.data.meta.totalPages);

      return res.data.data;
    },
  });

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    setSearchBtn(Math.random().toString());
  };

  if (isLoading) {
    return <Loading className="h-[70vh]" />;
  }

  return (
    <div className="flex flex-col gap-3 py-10">
      <div
        className={cn("flex items-center gap-5", {
          "justify-end": locale === "en",
        })}
      >
        <form
          onSubmit={searchHandler}
          className={cn("flex items-center gap-3", {
            "flex-row-reverse": locale === "ar",
          })}
        >
          <Button
            className={cn({
              "flex-row-reverse": locale === "ar",
            })}
          >
            <Search size={15} className="mr-2" />
            {locale === "en" ? "search" : "بحث"}
          </Button>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={locale === "en" ? "Search" : "ابحث"}
            className="w-full p-2 px-4 border border-gray-300 rounded-md outline-none"
          />
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
        {isLoading && <Loading className="h-[70vh]" />}
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            locale={locale as "ar" | "en"}
          />
        ))}
      </div>

      <div className="flex items-center justify-center mt-5">
        {searchTotalPages > 1 && (
          <div className="mt-3 mb-4">
            <div
              className={cn("flex items-center gap-3", {
                "flex-row-reverse": locale === "en",
              })}
            >
              {/* زر الانتقال إلى الصفحة التالية */}
              <Button
                className={cn(
                  "flex items-center gap-1.5",
                  locale === "en" ? "flex-row-reverse" : ""
                )}
                disabled={currentPage === searchTotalPages}
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                <ArrowRight size={15} className="ml-1.5" />
                {locale === "en" ? <span>Next</span> : <span>التالي</span>}
              </Button>

              {/* أرقام الصفحات */}
              <div
                className={cn(
                  "flex items-center flex-row-reverse gap-2 text-lg",
                  {
                    "flex-row": locale === "en",
                  }
                )}
              >
                {Array.from({ length: searchTotalPages }, (_, i) => i + 1)
                  .filter((page) => {
                    const range = 2;
                    return (
                      page === 1 ||
                      page === searchTotalPages ||
                      (page >= currentPage - range &&
                        page <= currentPage + range)
                    );
                  })
                  .map((page, idx, filteredPages) => (
                    <React.Fragment key={page}>
                      {idx > 0 && page !== filteredPages[idx - 1] + 1 && (
                        <span key={`dots-${idx}`}>...</span>
                      )}
                      <span
                        key={page}
                        className={cn(
                          "cursor-pointer border px-2 rounded-md",
                          page === currentPage
                            ? "border-green-500 bg-green-300"
                            : ""
                        )}
                        onClick={() => {
                          setCurrentPage(page);
                        }}
                      >
                        {page}
                      </span>
                    </React.Fragment>
                  ))}
              </div>

              {/* زر الانتقال إلى الصفحة السابقة */}
              <Button
                className={cn(
                  "flex items-center gap-1.5",
                  locale === "en" ? "flex-row-reverse" : ""
                )}
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                {locale === "en" ? <span>Previous</span> : <span>السابق</span>}
                <ArrowLeft size={15} className="mr-1.5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
