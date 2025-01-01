import React from "react";
import { Alert } from "./Alert";
import { Trash } from "lucide-react";

export default function DeleteProductModel({
  onDelete,
  isLoading,
}: {
  onDelete: () => void;
  isLoading?: boolean;
}) {
  return (
    <Alert
      dialogTitle="delete product"
      dialogDescription="Are you sure you want to delete this product?"
      dialogCancel="No, keep it"
      dialogAction="Yes, delete it"
      buttonTitle={(<Trash size={16} />) as any}
      action={onDelete}
      isLoading={isLoading}
      buttonStyle="bg-transparent border dark:border-gray-700 text-black dark:text-white hover:bg-red-500 hover:text-white"
    />
  );
}
