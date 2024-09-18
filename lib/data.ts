export type PRODUCTS_TYPE = {
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
  images: string[];
  category: string;
};

export const CATEGORY_DATA = [
  {
    id: "1",
    ar_name: "شجيرات",
    en_name: "Shrubs",
  },
  {
    id: "2",
    ar_name: "أشجار",
    en_name: "Trees",
  },
  {
    id: "3",
    ar_name: "نباتات داخلية",
    en_name: "Indoor Plants",
  },
];
