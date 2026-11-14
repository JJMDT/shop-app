import { tesloApi } from "@/api/teslaApi";
import type { Product } from "@/interfaces/products.interface";

export const getProductsById = async (id: string): Promise<Product> => {
  if (!id) throw new Error("El id es requerido");

  if (id === "new") {
    return {
      id: "new",
      title: "",
      price: 0,
      description: "",
      gender: "unisex",
      images: [],
      sizes: [],
      slug: "",
      stock: 0,
      tags: [],
    } as unknown as Product;
  }

  const { data } = await tesloApi.get<Product>(`/products/${id}`);
  const images = data.images.map((image) => {
    if (image.includes("http")) return image;
    return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
  });

  return {
    ...data,
    images,
  };
};
