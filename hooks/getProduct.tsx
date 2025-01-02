"use client";

import { getProduct } from "@/lib/products";
import { useQuery } from "@tanstack/react-query";

export function useGetProduct(id: string) {
  const { data: product, isLoading: isProductLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => await getProduct(id),
  });

  return { product, isProductLoading };
}
