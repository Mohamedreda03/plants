import { Product } from "@/types/product";
import axios from "axios";

// This is a mock database. In a real application, you would use a proper database
let products: Product[] = [
  {
    id: "1",
    ar_name: "باهونيا",
    en_name: "Bauhinia",
    la_name: "Bauhinia spp",
    height_from: "3",
    height_to: "8",
    width_from: "15",
    width_to: "30",
    ar_suitable_environment: "تربة جيدة التصريف، مناخ دافئ، يتم الري كل أسبوع",
    en_suitable_environment: "Well-drained soil, warm climate, watering weekly",
    images: [
      "/products/bauhinia/1.webp",
      "/products/bauhinia/2.webp",
      "/products/bauhinia/3.webp",
    ],
  },
];

export async function getProducts(
  page: number,
  en_name: string = "",
  locale?: string
) {
  const res = await axios.get(
    `/api/products?page=${page}&name=${en_name}&locale=${locale}`
  );

  return res;
}

export async function getProduct(id: string) {
  const res = await axios.get(`/api/products/${id}`);
  return res.data;
}

export async function createProduct(product: Omit<Product, "id">) {
  const newProduct = {
    ...product,
    id: (products.length + 1).toString(),
  };
  products.push(newProduct);
  return newProduct;
}

export async function updateProduct(id: string, product: any) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updatedProduct = { ...product, id };
  products[index] = updatedProduct;
  return updatedProduct;
}

export async function deleteProduct(id: string) {
  await axios.delete(`/api/products/${id}`);
}
