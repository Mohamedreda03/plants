import { useTranslations } from "next-intl";
import HeroSwiper from "@/components/HeroSwiper";
import ProductsGroup from "@/components/ProductsGroup";
import data from "@/lib/data_products.json";

export default function HomePage({
  params,
}: {
  params: { locale: "ar" | "en" };
}) {
  const t = useTranslations("ProductsGroup");

  return (
    <div>
      <HeroSwiper />
      <ProductsGroup
        title={t("title_1")}
        products={data}
        locale={params.locale}
      />
    </div>
  );
}
