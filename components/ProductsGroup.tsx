"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";
import { Navigation } from "swiper/modules";
import { PRODUCTS_TYPE } from "../lib/data";

export default function ProductsGroup({
  title,
  products,
  locale,
}: {
  title: string;
  products: any[];
  locale: "en" | "ar";
}) {
  const t = useTranslations("ProductsGroup");
  return (
    <div className="flex flex-col gap-3 py-10 max-w-screen-xl mx-auto px-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <Link
          href="#"
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
          {products.map((product: PRODUCTS_TYPE) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} locale={locale} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
