"use server";

import prisma from "@/lib/db";
import { checkAuth } from "./auth";
import { join } from "path";
import { existsSync, unlinkSync } from "fs";

export async function deleteProduct(productId: string) {
  try {
    const isAuth = await checkAuth();

    if (!isAuth) {
      return {
        success: false,
      };
    }

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (product?.images) {
      product.images.forEach((image) => {
        const fileName = image.split("/").pop() as string;

        let path = join(process.cwd(), "..", "uploads", "images", fileName);

        if (existsSync(path)) {
          unlinkSync(path);
        }
      });
    }

    await prisma.product.delete({
      where: {
        id: productId,
      },
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
