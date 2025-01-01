"use client";

import Loading from "@/components/Loading";
import ProductImages from "@/components/ProductImages";
import { useGetProduct } from "@/hooks/getProduct";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Sprout } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProductPage({
  params,
}: {
  params: { locale: string; productId: string };
}) {
  const t = useTranslations("ProductPage");

  const { product, isProductLoading } = useGetProduct(params.productId);

  if (isProductLoading) {
    return <Loading className="h-[70vh]" />;
  }

  return (
    <>
      <div
        className={cn(
          "flex px-5 py-10 max-w-screen-xl mx-auto flex-col-reverse md:flex-row gap-14",
          {
            "md:flex-row-reverse": params.locale === "en",
          }
        )}
      >
        <div className="md:flex-1 flex flex-col gap-5 text-xl w-full">
          <h1 className="text-4xl font-bold w-fit mt-8 flex items-center gap-3">
            <span>
              <Sprout size={30} className="text-green-500" />
            </span>
            <span className="border-b-2 border-green-500">
              {params.locale === "en" ? product.en_name! : product.ar_name!}
            </span>
          </h1>
          {product.la_name.length > 0 && (
            <div>
              <h4 className="border-b-2 border-green-500 w-fit mb-2">
                {t("latin_name")}
              </h4>
              <p className="flex items-center gap-1">
                <span>
                  {params.locale === "en" ? (
                    <ChevronRight size={30} className="text-green-500" />
                  ) : (
                    <ChevronLeft size={25} className="text-green-500" />
                  )}
                </span>
                {product.la_name}
              </p>
            </div>
          )}

          {product.height_from.length > 0 && (
            <div>
              <h4 className="border-b-2 border-green-500 w-fit mb-2">
                {t("leg_height")}
              </h4>
              <p className="flex items-center gap-1">
                <span>
                  {params.locale === "en" ? (
                    <ChevronRight size={30} className="text-green-500" />
                  ) : (
                    <ChevronLeft size={25} className="text-green-500" />
                  )}
                </span>
                {product.height_from.length === 0 ? (
                  <>
                    {params.locale === "en"
                      ? `Varies by model`
                      : "يختلف حسب النموذج"}
                  </>
                ) : (
                  <>
                    {params.locale === "en"
                      ? `${product.height_from} to ${product.height_to} meters`
                      : `يتراوح من ${product.height_from} إلى ${product.height_to} أمتار`}
                  </>
                )}
              </p>
            </div>
          )}

          {product.width_from.length > 0 && (
            <div>
              <h4 className="border-b-2 border-green-500 w-fit mb-2">
                {t("leg_width")}
              </h4>
              <p className="flex items-center gap-1">
                <span>
                  {params.locale === "en" ? (
                    <ChevronRight size={30} className="text-green-500" />
                  ) : (
                    <ChevronLeft size={25} className="text-green-500" />
                  )}
                </span>
                {product.width_from.length === 0 ? (
                  <>
                    {params.locale === "en"
                      ? `Varies by model`
                      : "يختلف حسب النموذج"}
                  </>
                ) : (
                  <>
                    {params.locale === "en"
                      ? `${product.height_from} to ${product.height_to} cm`
                      : `يتراوح من ${product.height_from} إلى ${product.height_to} سم`}
                  </>
                )}
              </p>
            </div>
          )}

          {product.en_suitable_environment &&
            product.en_suitable_environment?.length > 0 && (
              <div>
                <h4 className="border-b-2 border-green-500 w-fit mb-2">
                  {t("suitable_environment")}
                </h4>
                <p className="flex items-center gap-1">
                  <span>
                    {params.locale === "en" ? (
                      <ChevronRight size={30} className="text-green-500" />
                    ) : (
                      <ChevronLeft size={25} className="text-green-500" />
                    )}
                  </span>
                  {params.locale === "en"
                    ? product.en_suitable_environment
                    : product.ar_suitable_environment}
                </p>
              </div>
            )}
        </div>

        <div className="flex-1">
          {/* التأكد من وجود الصور قبل تمريرها */}
          {product.images ? <ProductImages images={product.images} /> : <p></p>}
        </div>
      </div>
    </>
  );
}
