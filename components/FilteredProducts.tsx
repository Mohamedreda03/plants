"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { PRODUCTS_TYPE } from "../lib/data";
import ProductCard from "./ProductCard";
import categories from "../lib/data_categories.json";

export default function FilteredProducts({
  products,
  locale,
}: {
  products: PRODUCTS_TYPE[];
  locale: "en" | "ar";
}) {
  const [search, setSearch] = useState<string>("");
  const [filteredProducts, setFilteredProducts] =
    useState<PRODUCTS_TYPE[]>(products);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    // نبدأ بمصفوفة المنتجات الأصلية
    let filtered = [...products];

    // تصفية حسب الفئة
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // تصفية حسب البحث
    if (search) {
      filtered = filtered.filter((product) =>
        locale === "en"
          ? product.en_name.toLowerCase().startsWith(search.toLowerCase())
          : product.ar_name.startsWith(search)
      );
    }

    // تحديث قائمة المنتجات المصفاة
    setFilteredProducts(filtered);
  }, [search, category, products, locale]); // تعتمد على search وcategory وproducts

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilter = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="flex flex-col gap-3 py-10">
      <div className="flex items-center gap-5">
        <input
          type="text"
          value={search}
          onChange={searchHandler}
          placeholder={locale === "en" ? "Search" : "ابحث"}
          className="w-full p-2 border border-gray-300 rounded-md outline-none"
        />
        <div>
          <Select onValueChange={handleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder={locale === "ar" ? "أختر النوع" : "Select the type"}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.en_name}>
                    {locale === "en" ? category.en_name : category.ar_name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            locale={locale as "ar" | "en"}
          />
        ))}
      </div>
    </div>
  );
}
