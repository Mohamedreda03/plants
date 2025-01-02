"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  value: { url: string; file: File }[];
  onChange: (value: { url: string; file: File }[]) => void;
  onRemove: (url: string) => void;
  disabled?: boolean;
}

export function ImageUpload({
  value,
  onChange,
  onRemove,
  disabled,
}: ImageUploadProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // In a real application, you would upload these files to a storage service
      // For this demo, we'll create object URLs
      const files = acceptedFiles.map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }));

      onChange([...value, ...files]);
    },
    [value, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    disabled,
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer",
          isDragActive && "border-primary",
          disabled && "opacity-50 cursor-default"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
          <ImageIcon className="h-8 w-8" />
          <p className="text-sm text-center">
            Drag & drop images here, or click to select
          </p>
        </div>
      </div>

      {value.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {value.map((file, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={file.url}
                alt="Upload"
                fill
                className="object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => onRemove(file.url)}
                className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-1 rounded-full hover:opacity-80 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
