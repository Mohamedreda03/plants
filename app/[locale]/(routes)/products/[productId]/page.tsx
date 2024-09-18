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
  const currentProduct = data.find(
    (product) => product.id === params.productId
  );
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
              ? currentProduct?.en_name!
              : currentProduct?.ar_name!}
          </span>
        </h1>
        <div>
          <h4 className="border-b-2 border-green-500 w-fit mb-2">
            {t("latin_name")}
          </h4>
          <p className="flex items-center gap-1">
            <span>
              <ChevronLeft size={25} className="text-green-500" />
            </span>
            {currentProduct?.la_name}
          </p>
        </div>

        <div>
          <h4 className="border-b-2 border-green-500 w-fit mb-2">
            {t("leg_height")}
          </h4>
          <p className="flex items-center gap-1">
            <span>
              <ChevronLeft size={25} className="text-green-500" />
            </span>
            {params.locale === "en"
              ? `${currentProduct?.height_from!} to ${currentProduct?.height_to!} meters`
              : `يتراوح من ${currentProduct?.height_from!} إلى ${currentProduct?.height_to!} أمتار`}
          </p>
        </div>
        <div>
          <h4 className="border-b-2 border-green-500 w-fit mb-2">
            {t("leg_width")}
          </h4>
          <p className="flex items-center gap-1">
            <span>
              <ChevronLeft size={25} className="text-green-500" />
            </span>
            {params.locale === "en"
              ? `${currentProduct?.height_from} to ${currentProduct?.height_to} cm`
              : `يتراوح من ${currentProduct?.height_from} إلى ${currentProduct?.height_to} سم`}
          </p>
        </div>
        <div>
          <h4 className="border-b-2 border-green-500 w-fit mb-2">
            {t("suitable_environment")}
          </h4>
          <p className="flex items-center gap-1">
            <span>
              <ChevronLeft size={25} className="text-green-500" />
            </span>
            {params.locale === "en"
              ? currentProduct?.en_suitable_environment
              : currentProduct?.ar_suitable_environment}
          </p>
        </div>
      </div>
      <div className="flex-1">
        <ProductImages images={currentProduct?.images!} />
      </div>
    </div>
  );
}
