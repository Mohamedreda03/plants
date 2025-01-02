"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/ui/image-upload";
import { Product, ProductFormData } from "@/types/product";
import { Loader } from "lucide-react";

const formSchema = z.object({
  ar_name: z.string().min(1),
  en_name: z.string().min(1),
  la_name: z.string().min(1),
  height_from: z.string().min(1),
  height_to: z.string().min(1),
  width_from: z.string().min(1),
  width_to: z.string().min(1),
  ar_suitable_environment: z.string().min(1),
  en_suitable_environment: z.string().min(1),

  images: z
    .array(
      z.object({
        url: z.string().nullish(),
        file: z.instanceof(File).nullish(),
      })
    )
    .min(0),
});

interface ProductFormProps {
  initialData?: Product;
  onSubmit: (data: ProductFormData) => Promise<void>;
}

export function ProductForm({ initialData, onSubmit }: ProductFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProductFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      ar_name: "",
      en_name: "",
      la_name: "",
      height_from: "",
      height_to: "",
      width_from: "",
      width_to: "",
      ar_suitable_environment: "",
      en_suitable_environment: "",
      //   category: "",
      images: [],
    },
  });

  const handleSubmit = async (data: ProductFormData) => {
    try {
      setIsLoading(true);
      await onSubmit(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                {/* upload images */}
                <ImageUpload
                  value={field.value as { url: string; file: File }[]}
                  onChange={field.onChange}
                  onRemove={(url) =>
                    field.onChange(
                      field.value.filter(
                        (val) => typeof val !== "string" && val.url !== url
                      )
                    )
                  }
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ar_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Arabic Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="en_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>English Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="la_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Latin Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="height_from"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height From (m)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height_to"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height To (m)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="width_from"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Width From (m)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="width_to"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Width To (m)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="ar_suitable_environment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Arabic Suitable Environment</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="en_suitable_environment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>English Suitable Environment</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant="secondary"
          className="bg-green-400 hover:bg-green-500 disabled:bg-green-400/25"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Saving" : "Update Product"}
          {isLoading && <Loader className="ml-2 animate-spin" size={16} />}
        </Button>
      </form>
    </Form>
  );
}
