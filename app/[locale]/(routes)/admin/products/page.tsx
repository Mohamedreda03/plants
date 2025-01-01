"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { ProductsTable } from "@/components/products/products-table";
import { Link } from "@/i18n/routing";

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10 px-5 md:px-10 min-h-[90vh]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link href="/admin/products/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </Link>
      </div>
      <ProductsTable />
    </div>
  );
}
