"use client";

import Loading from "@/components/Loading";
import { ProductForm } from "@/components/product-form";
import { Button } from "@/components/ui/button";
import { useGetProduct } from "@/hooks/getProduct";
import { useUpdateProduct } from "@/hooks/update-product";
import { useRouter } from "@/i18n/routing";
import { ProductFormData } from "@/types/product";
import { ArrowRight } from "lucide-react";

interface EditProductPageProps {
  params: { id: string };
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const router = useRouter();

  const { product, isProductLoading } = useGetProduct(params.id);

  const { updateProduct } = useUpdateProduct(product, params.id);

  const handleSubmit = async (data: ProductFormData) => {
    await updateProduct(data);
    router.push("/admin/products");
  };

  if (isProductLoading) {
    return <Loading className="h-[70vh]" />;
  }

  console.log(product);

  product.images = product.images.map((image: any) => ({
    url: typeof image === "string" ? image : image.url,
    file: null,
  }));

  return (
    <div className="container mx-auto max-w-screen-md py-10 px-5 md:px-10 flex flex-col">
      <div className="flex items-center justify-end mb-8">
        <Button onClick={() => router.back()} className="mr-4">
          <span>Back</span>
          <ArrowRight size={16} />
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-8">Edit Product</h1>
      <div className="max-w-2xl w-full">
        <ProductForm initialData={product} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
