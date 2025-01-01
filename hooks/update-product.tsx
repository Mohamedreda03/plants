"use client";

import { ProductFormData } from "@/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useUpdateProduct(product: any, id: string) {
  const queryClient = useQueryClient();

  const { mutateAsync: updateProduct } = useMutation({
    mutationFn: async (data: ProductFormData) => {
      const newImages: string[] = [];

      for (let i = 0; i < product.images.length; i++) {
        if (
          product.images[i].url &&
          !data.images.find(
            (image: any) => image.url === product.images[i].url
          ) &&
          product.images[i].url.startsWith("/images/")
        ) {
          await axios.delete("/api/upload", {
            data: { path: product.images[i].url },
          });
        }
      }

      for (let i = 0; i < data.images.length; i++) {
        const image = data.images[i];
        if (typeof image !== "string" && image.file) {
          if (image.url && image.url.startsWith("/images/")) {
            await axios.delete(`/api/upload`, {
              data: { path: image.url },
            });
          }
          const formData = new FormData();
          formData.append("file", image.file);
          const res = await axios.post("/api/upload", formData);
          newImages.push(res.data.path);
        }

        if (typeof image !== "string" && !image.file) {
          newImages.push(image.url);
        }
      }

      data.images = newImages;
      await axios.patch(`/api/products/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return { updateProduct };
}
