import ProductImages from "@/components/ProductImages";
import data from "@/lib/data_products.json";
import { cn } from "@/lib/utils";
import { ChevronLeft, Sprout } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProductPage({
  params,
}: {
  params: { locale: string; productId: string };
}) {
  const t = useTranslations("ProductPage");

  // العثور على المنتج بناءً على معرف المنتج
  const currentProduct = data.find(
    (product) => product.id === params.productId
  );

  // التحقق من وجود المنتج
  if (!currentProduct) {
    return <p></p>; // رسالة خطأ إذا لم يتم العثور على المنتج
  }

  return (
    <div
      className={cn(
        "flex px-5 py-10 max-w-screen-xl mx-auto flex-col-reverse md:flex-row",
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
            {params.locale === "en"
              ? currentProduct.en_name!
              : currentProduct.ar_name!}
          </span>
        </h1>
        {currentProduct.la_name.length > 0 && (
          <div>
            <h4 className="border-b-2 border-green-500 w-fit mb-2">
              {t("latin_name")}
            </h4>
            <p className="flex items-center gap-1">
              <span>
                <ChevronLeft size={25} className="text-green-500" />
              </span>
              {currentProduct.la_name!}
            </p>
          </div>
        )}

        {currentProduct.height_from.length > 0 && (
          <div>
            <h4 className="border-b-2 border-green-500 w-fit mb-2">
              {t("leg_height")}
            </h4>
            <p className="flex items-center gap-1">
              <span>
                <ChevronLeft size={25} className="text-green-500" />
              </span>
              {currentProduct.height_from.length === 0 ? (
                <>
                  {params.locale === "en"
                    ? `Varies by model`
                    : "يختلف حسب النموذج"}
                </>
              ) : (
                <>
                  {params.locale === "en"
                    ? `${currentProduct.height_from} to ${currentProduct.height_to} meters`
                    : `يتراوح من ${currentProduct.height_from} إلى ${currentProduct.height_to} أمتار`}
                </>
              )}
            </p>
          </div>
        )}

        {currentProduct.width_from.length > 0 && (
          <div>
            <h4 className="border-b-2 border-green-500 w-fit mb-2">
              {t("leg_width")}
            </h4>
            <p className="flex items-center gap-1">
              <span>
                <ChevronLeft size={25} className="text-green-500" />
              </span>
              {currentProduct.width_from.length === 0 ? (
                <>
                  {params.locale === "en"
                    ? `Varies by model`
                    : "يختلف حسب النموذج"}
                </>
              ) : (
                <>
                  {params.locale === "en"
                    ? `${currentProduct.height_from} to ${currentProduct.height_to} cm`
                    : `يتراوح من ${currentProduct.height_from} إلى ${currentProduct.height_to} سم`}
                </>
              )}
            </p>
          </div>
        )}

        {currentProduct.en_suitable_environment?.length! > 0 && (
          <div>
            <h4 className="border-b-2 border-green-500 w-fit mb-2">
              {t("suitable_environment")}
            </h4>
            <p className="flex items-center gap-1">
              <span>
                <ChevronLeft size={25} className="text-green-500" />
              </span>
              {params.locale === "en"
                ? currentProduct.en_suitable_environment
                : currentProduct.ar_suitable_environment}
            </p>
          </div>
        )}
      </div>

      <div className="flex-1">
        {/* التأكد من وجود الصور قبل تمريرها */}
        {currentProduct.images ? (
          <ProductImages images={currentProduct.images} />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
