"use client";

import { useRouter } from "next/navigation";
import { DataTable } from "../ui/data-table";
import { columns } from "../columns";
import { Product } from "@/types/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getProducts } from "@/lib/products";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pencil,
  Search,
} from "lucide-react";
import { Input } from "../ui/input";
import Loading from "../Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Link } from "@/i18n/routing";

export function ProductsTable() {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTotalPages, setSearchTotalPages] = useState(1);
  const [search, setSearch] = useState<string>("");
  const [searchBtn, setSearchBtn] = useState<string>("");

  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["products", currentPage, searchBtn],
    queryFn: async () => {
      const res = await getProducts(currentPage, search, "en");

      setCurrentPage(res.data.meta.currentPage);
      setSearchTotalPages(res.data.meta.totalPages);

      return res.data.data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (id: string) => {
      await deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      router.refresh();
    },
  });

  const handleDelete = async (id: string) => {
    await mutateAsync(id);
  };

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchBtn(Math.random().toString());
  };

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <form
          onSubmit={searchHandler}
          className={cn("flex items-center gap-3")}
        >
          <Button>
            <Search size={15} className="mr-2" />
            search
          </Button>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full p-2 px-4 border border-gray-300 rounded-md outline-none"
          />
        </form>
      </div>

      {isLoading ? (
        <Loading className="h-[300px]" />
      ) : (
        <Table dir="rtl" className="mb-8 border">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Arabic Name</TableHead>
              <TableHead className="text-center">English Name</TableHead>
              <TableHead className="text-center"></TableHead>
            </TableRow>
          </TableHeader>
          {data?.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-lg">
                لا يوجد بيانات
              </TableCell>
            </TableRow>
          )}
          <TableBody>
            {data?.map((product: any) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium text-center">
                  {product.ar_name}
                </TableCell>
                <TableCell className="text-center">{product.en_name}</TableCell>

                <TableCell className="text-center">
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
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {searchTotalPages > 1 && (
        <div className="mt-3 mb-4">
          <div className="flex items-center gap-3">
            {/* زر الانتقال إلى الصفحة التالية */}
            <Button
              disabled={currentPage === searchTotalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <ArrowRight size={15} className="ml-1.5" />
              <span>التالي</span>
            </Button>

            {/* أرقام الصفحات */}
            <div className="flex items-center flex-row-reverse gap-2 text-lg">
              {Array.from({ length: searchTotalPages }, (_, i) => i + 1)
                .filter((page) => {
                  // منطق عرض الصفحات:
                  // - يجب عرض الصفحة الحالية
                  // - عرض الصفحات المحيطة بالصفحة الحالية (نطاق محدد)
                  // - عرض أول صفحة وآخر صفحة دائمًا
                  const range = 2; // عدد الصفحات حول الصفحة الحالية
                  return (
                    page === 1 || // أول صفحة
                    page === searchTotalPages || // آخر صفحة
                    (page >= currentPage - range && page <= currentPage + range)
                  );
                })
                .map((page, idx, filteredPages) => (
                  <React.Fragment key={page}>
                    {idx > 0 &&
                      page !== filteredPages[idx - 1] + 1 && ( // إضافة النقاط إذا كانت الصفحات غير متتالية
                        <span key={`dots-${idx}`}>...</span>
                      )}
                    <span
                      key={page}
                      className={cn(
                        "cursor-pointer border px-2 rounded-md",
                        page === currentPage ? "border-secondary/75" : ""
                      )}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </span>
                  </React.Fragment>
                ))}
            </div>

            {/* زر الانتقال إلى الصفحة السابقة */}
            <Button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <span>السابق</span>
              <ArrowLeft size={15} className="mr-1.5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
