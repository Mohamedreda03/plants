import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await prisma.product.create({
      data: body,
    });

    return new NextResponse("Product created successfully", { status: 201 });
  } catch (error) {
    console.log("Error creating product: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const name = req.nextUrl.searchParams.get("name");
    const locale = req.nextUrl.searchParams.get("locale");
    const page = parseInt(req.nextUrl.searchParams.get("page") || "1");
    const pageSize = 15;

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    let products: any;
    let totalProducts: number;

    if (locale === "en") {
      products = await prisma.product.findMany({
        where: {
          en_name: {
            startsWith: name!,
            mode: "insensitive",
          },
        },
        skip,
        take,
      });

      totalProducts = await prisma.product.count({
        where: {
          en_name: {
            startsWith: name!,
            mode: "insensitive",
          },
        },
      });
    } else {
      products = await prisma.product.findMany({
        where: {
          ar_name: {
            startsWith: name!,
            mode: "insensitive",
          },
        },
        skip,
        take,
      });

      totalProducts = await prisma.product.count({
        where: {
          ar_name: {
            startsWith: name!,
            mode: "insensitive",
          },
        },
      });
    }

    const totalPages = Math.ceil(totalProducts / pageSize);

    return NextResponse.json({
      data: products,
      meta: {
        totalProducts,
        totalPages,
        currentPage: page,
        pageSize,
      },
    });
  } catch (error) {
    console.log("Error fetching products: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
