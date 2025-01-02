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
import { Loader, Lock } from "lucide-react";
import { auth } from "@/actions/auth";
import { useRouter } from "@/i18n/routing";
import { useAuth } from "@/hooks/useAuth";

const formSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

type FormData = z.infer<typeof formSchema>;

export function AuthForm() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { logIn } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      setError("");
      const isAuthenticated = await logIn(data.password);

      if (isAuthenticated) {
        router.push("/admin/products");
        router.refresh();
      } else {
        setError("Invalid password");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <Lock className="mx-auto h-12 w-12 text-green-500" />
        <h1 className="text-2xl font-bold">Admin Access</h1>
        <p className="text-muted-foreground">
          Enter your password to access the admin panel
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <p className="text-sm text-destructive border border-red-500 px-4 py-2 rounded-md text-center bg-red-100">
              {error}
            </p>
          )}

          <Button
            type="submit"
            variant="secondary"
            className="w-full flex items-center bg-green-400 hover:bg-green-500"
            disabled={isLoading}
          >
            {isLoading && <Loader size={13} className="animate-spin" />}
            <span>Login</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
