"use client";

import { ProductFormData } from "@/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useUpdateProduct(product: any, id: string) {
  const queryClient = useQueryClient();

  const { mutateAsync: updateProduct } = useMutation({
    mutationFn: async (data: ProductFormData) => {
      const newImages: string[] = [];

      // for (let i = 0; i < product.images.length; i++) {
      //   if (
      //     product.images[i].url &&
      //     !data.images.find(
      //       (image: any) => image.url === product.images[i].url
      //     ) &&
      //     product.images[i].url.startsWith("/images/")
      //   ) {
      //     await axios.delete("/api/upload", {
      //       data: { path: product.images[i].url },
      //     });
      //   }
      // }

      // for (let i = 0; i < data.images.length; i++) {
      //   const image = data.images[i];
      //   if (typeof image !== "string" && image.file) {
      //     if (image.url && image.url.startsWith("/images/")) {
      //       await axios.delete(`/api/upload`, {
      //         data: { path: image.url },
      //       });
      //     }
      //     const formData = new FormData();
      //     formData.append("file", image.file);
      //     const res = await axios.post("/api/upload", formData);
      //     newImages.push(res.data.path);
      //   }

      //   if (typeof image !== "string" && !image.file) {
      //     newImages.push(image.url);
      //   }
      // }

      // حذف الصور القديمة
      const deletePromises = product.images.map(async (image: any) => {
        if (
          image.url &&
          !data.images.find((img: any) => img.url === image.url)
        ) {
          try {
            console.log(`Deleting image: ${image.url}`);
            await axios.delete("/api/upload", {
              data: { path: image.url },
            });
          } catch (error) {
            console.error(`Failed to delete image: ${image.url}`, error);
          }
        }
      });

      await Promise.all(deletePromises);

      // رفع الصور الجديدة
      const uploadPromises = data.images.map(async (image: any) => {
        if (typeof image !== "string" && image.file) {
          try {
            const formData = new FormData();
            formData.append("file", image.file);
            const response = await axios.post("/api/upload", formData);
            newImages.push(response.data.path);
          } catch (error) {
            console.error("Failed to upload image", error);
          }
        } else {
          newImages.push(image.url);
        }
      });

      await Promise.all(uploadPromises);

      data.images = newImages;
      await axios.patch(`/api/products/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return { updateProduct };
}
