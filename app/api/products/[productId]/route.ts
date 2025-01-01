import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import axios from "axios";
import { existsSync } from "fs";
import { unlink } from "fs/promises";
import { join } from "path";

export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: params.productId,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("Error fetching products: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const body = await req.json();

    await prisma.product.update({
      where: {
        id: params.productId,
      },
      data: body,
    });

    return new NextResponse("updated");
  } catch (error) {
    console.log("Error fetching products: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: params.productId,
      },
    });

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    for (const image of product.images) {
      const fileName = image.split("/").pop() as string;

      let path = join("public", "images", fileName);

      if (existsSync(path)) {
        await unlink(path);
      }
    }

    await prisma.product.delete({
      where: {
        id: params.productId,
      },
    });

    return new NextResponse("deleted");
  } catch (error) {
    console.log("Error fetching products: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
