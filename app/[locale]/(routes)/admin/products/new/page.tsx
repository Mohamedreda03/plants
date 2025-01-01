"use client";

import { ProductForm } from "@/components/product-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/routing";
import { createProduct } from "@/lib/products";
import { ProductFormData } from "@/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight } from "lucide-react";

export default function NewProductPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (data: ProductFormData) => {
      await axios.post("/api/products", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "products" });
      router.push("/admin/products");
    },
  });
  const handleSubmit = async (data: ProductFormData) => {
    let newImages: string[] = [];

    // upload images
    for (let i = 0; i < data.images.length; i++) {
      const image = data.images[i];
      if (typeof image !== "string" && image.file) {
        const formData = new FormData(); // Create a new FormData object for each image
        formData.append("file", image.file);
        const res = await axios.post("/api/upload", formData);
        newImages.push(res.data.path);
      }
    }

    data.images = newImages;
    await mutateAsync(data);
  };

  return (
    <div className="container mx-auto max-w-screen-md py-10 px-5 md:px-10 flex flex-col">
      <div className="flex items-center justify-end mb-8">
        <Button onClick={() => router.back()} className="mr-4">
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
