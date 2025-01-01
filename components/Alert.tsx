"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

export function Alert({
  buttonTitle,
  dialogTitle,
  dialogDescription,
  dialogCancel,
  dialogAction,
  buttonStyle,
  isLoading,
  action,
}: {
  buttonTitle: string;
  dialogTitle: string | JSX.Element;
  dialogDescription: string;
  dialogCancel: string;
  dialogAction: string;
  buttonStyle?: string;
  isLoading?: boolean;
  action: () => void;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="secondary"
          className={buttonStyle}
          disabled={isLoading}
        >
          <span>{buttonTitle}</span>
          {isLoading && (
            <LoaderCircle size={16} className="animate-spin mr-2" />
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent dir="ltr" className="bg-white dark:bg-gray-800">
        <AlertDialogHeader>
          <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>{dialogDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center gap-3">
          <AlertDialogCancel className="w-full sm:w-fit">
            {dialogCancel}
          </AlertDialogCancel>
          <AlertDialogAction className="w-full sm:w-fit" onClick={action}>
            {dialogAction}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
