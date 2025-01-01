"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Pencil, Trash } from "lucide-react";
import { Link } from "@/i18n/routing";
import { deleteProduct } from "@/lib/products";
import DeleteProductModel from "./deleteModel";

const ActionsCell = ({ product }: { product: Product }) => {
  const queryClient = useQueryClient();

  return (
    <div className="flex items-center gap-2 justify-center">
      <Link href={`/products/${product.id}`}>
        <Button variant="ghost" size="icon">
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </Link>
      <Link href={`/admin/products/${product.id}/edit`}>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </Link>
      {/* <DeleteProductModel onDelete={handleDelete} /> */}
    </div>
  );
};

export const columns = [
  {
    accessorKey: "en_name",
    header: "Name (English)",
  },
  {
    accessorKey: "ar_name",
    header: "Name (Arabic)",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }: { row: { original: Product } }) => {
      const product = row.original;
      return <ActionsCell product={product} />;
    },
  },
];
