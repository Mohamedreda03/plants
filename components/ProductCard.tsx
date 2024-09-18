import React from "react";
import { PRODUCTS_TYPE } from "../lib/data";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function ProductCard({
  product,
  locale,
}: {
  product: PRODUCTS_TYPE;
  locale: "en" | "ar";
}) {
  return (
    <div className="group relative block">
      <div className="relative h-[350px] sm:h-[450px]">
        <Image
          fill
          src={product.images[0]}
          alt=""
          className={cn("absolute inset-0 h-full w-full object-cover", {
            "opacity-100": product.images.length === 1,
            "opacity-100 group-hover:opacity-100": product.images.length > 1,
          })}
        />

        {product.images.length > 1 && (
          <Image
            fill
            src={product.images[1]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        )}
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
        <h3 className="text-2xl font-medium text-white border-b-2 mb-2 border-green-500">
          {locale === "ar" ? product.ar_name : product.en_name}
        </h3>

        <p className="mt-1.5 text-pretty text-white">
          {locale === "ar"
            ? product.ar_suitable_environment
            : product.en_suitable_environment}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="mt-3 inline-block bg-green-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
        >
          {locale === "ar" ? "التفاصيل" : "Details"}
        </Link>
      </div>
    </div>
  );
}
