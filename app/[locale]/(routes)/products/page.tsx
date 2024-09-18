import FilteredProducts from "@/components/FilteredProducts";
// import { useTranslations } from "next-intl";
import React from "react";
import data from "@/lib/data_products.json";

export default function ProductsPage({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}) {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <FilteredProducts locale={locale} products={data} />
    </div>
  );
}
