"use server";

import prisma from "@/lib/db";
import { Product } from "@prisma/client";

export async function updateProduct(productId: string, data: Product) {
  try {
    await prisma.product.update({
      where: {
        id: productId,
      },
      data: data,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log("Error creating product: ", error);
    return {
      success: false,
    };
  }
}
