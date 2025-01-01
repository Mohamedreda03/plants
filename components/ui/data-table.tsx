"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/lib/products";

interface DataTableProps<TData> {
  columns: {
    accessorKey?: string;
    header: string;
    id?: string;
    cell?: (data: { row: { original: TData } }) => React.ReactNode;
  }[];
  data: TData[];
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function DataTable<TData>({
  columns,
  data,
  pageCount,
  currentPage,
  onPageChange,
}: DataTableProps<TData>) {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (id: string) => {
      await deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const handleDelete = async (id: string) => {
    await mutateAsync(id);
  };

  return (
    <div>
      <div className="rounded-md border">
        <Table dir="rtl">
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead
                  key={column.id || column.accessorKey || index}
                  className="text-center"
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.length > 0 ? (
              data?.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns?.map((column, columnIndex) => (
                    <TableCell
                      key={column.id || column.accessorKey || columnIndex}
                      className="text-center"
                    >
                      {column?.cell
                        ? column.cell({
                            row: {
                              original: row,
                            },
                          })
                        : column.accessorKey
                        ? (row as never)[column.accessorKey]
                        : null}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns?.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center mt-5">
        {pageCount > 1 && (
          <div className="mt-3 mb-4">
            <div className={cn("flex items-center gap-3 flex-row-reverse")}>
              {/* زر الانتقال إلى الصفحة التالية */}
              <Button
                className={cn("flex items-center gap-1.5 flex-row-reverse")}
                disabled={currentPage === pageCount}
                onClick={() => {
                  onPageChange(currentPage + 1);
                }}
              >
                <ArrowRight size={15} className="ml-1.5" />
                <span>Next</span>
              </Button>

              {/* أرقام الصفحات */}
              <div className={cn("flex items-center gap-2 text-lg flex-row")}>
                {Array.from({ length: pageCount }, (_, i) => i + 1)
                  .filter((page) => {
                    const range = 2;
                    return (
                      page === 1 ||
                      page === pageCount ||
                      (page >= currentPage - range &&
                        page <= currentPage + range)
                    );
                  })
                  .map((page, idx, filteredPages) => (
                    <React.Fragment key={page}>
                      {idx > 0 && page !== filteredPages[idx - 1] + 1 && (
                        <span key={`dots-${idx}`}>...</span>
                      )}
                      <span
                        key={page}
                        className={cn(
                          "cursor-pointer border px-2 rounded-md",
                          page === currentPage
                            ? "border-green-500 bg-green-300"
                            : ""
                        )}
                        onClick={() => {
                          onPageChange(page);
                        }}
                      >
                        {page}
                      </span>
                    </React.Fragment>
                  ))}
              </div>

              {/* زر الانتقال إلى الصفحة السابقة */}
              <Button
                className={cn("flex items-center gap-1.5 flex-row-reverse")}
                disabled={currentPage === 1}
                onClick={() => {
                  onPageChange(currentPage - 1);
                }}
              >
                <span>Previous</span>
                <ArrowLeft size={15} className="mr-1.5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
