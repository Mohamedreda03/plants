"use client";

import { ProductForm } from "@/components/product-form";
import { Button } from "@/components/ui/button";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { useRouter } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export default function NewProductPage() {
  const router = useRouter();

  const { handleSubmit } = useCreateProduct();

  return (
    <div className="container mx-auto max-w-screen-md py-10 px-5 md:px-10 flex flex-col">
      <div className="flex items-center justify-end mb-8">
        <Button
          variant="secondary"
          onClick={() => router.back()}
          className="mr-4"
        >
          <span>Back</span>
          <ArrowRight size={16} />
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-8">Create New Product</h1>
      <div className="max-w-2xl w-full">
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
