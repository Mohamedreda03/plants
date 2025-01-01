"use server";

import prisma from "@/lib/db";
import { Product } from "@prisma/client";
import { join } from "path";
import axios from "axios";

export async function createProduct(data: Product) {
  try {
    await prisma.product.create({
      data: data,
    });

    if (data.images) {
      data.images.forEach(async (image) => {
        await axios.post("/api/upload", {
          file: image,
        });
      });
    }

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
