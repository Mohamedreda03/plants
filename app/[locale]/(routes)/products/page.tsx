import FilteredProducts from "@/components/FilteredProducts";
import React from "react";

export default function ProductsPage({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}) {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <FilteredProducts locale={locale} />
    </div>
  );
}
