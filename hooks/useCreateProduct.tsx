import { useRouter } from "@/i18n/routing";
import { ProductFormData } from "@/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useCreateProduct() {
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

    // رفع الصور بشكل متوازي
    const uploadPromises = data.images.map(async (image: any) => {
      if (typeof image !== "string" && image.file) {
        const formData = new FormData(); // Create a new FormData object for each image
        formData.append("file", image.file);
        const res = await axios.post("/api/upload", formData);
        return res.data.path;
      }
      return image.url;
    });

    newImages = await Promise.all(uploadPromises);

    data.images = newImages;
    await mutateAsync(data);
  };

  return { handleSubmit };
}
