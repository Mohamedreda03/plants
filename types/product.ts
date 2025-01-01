export interface Product {
  id: string;
  ar_name: string;
  en_name: string;
  la_name: string;
  height_from: string;
  height_to: string;
  width_from: string;
  width_to: string;
  ar_suitable_environment: string;
  en_suitable_environment: string;
  images: string[] | { url: string; file: File | null }[];
}

export type ProductFormData = Omit<Product, "id">;
