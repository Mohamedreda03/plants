"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { PRODUCTS_TYPE } from "@/lib/data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";
import { Navigation } from "swiper/modules";
import { getProducts } from "@/lib/products";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

export default function ProductsGroup({
  title,
  locale,
}: {
  title: string;
  locale: "en" | "ar";
}) {
  const t = useTranslations("ProductsGroup");

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await getProducts(1);

      return res.data.data;
    },
  });

  if (isLoading) {
    return <Loading className="h-[70vh]" />;
  }

  return (
    <div className="flex flex-col gap-3 py-10 max-w-screen-xl mx-auto px-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <Link
          href="/products"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          {t("see_all")}
        </Link>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((product: PRODUCTS_TYPE) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} locale={locale} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
