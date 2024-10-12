export interface PRODUCTS_TYPE {
  id: string;
  ar_name: string;
  en_name: string;
  la_name: string;
  height_from?: string; // Make optional
  height_to?: string; // Make optional
  width_from?: string; // Make optional
  width_to?: string; // Make optional
  ar_suitable_environment: string;
  en_suitable_environment: string;
  category: string;
  images: string[];
}
