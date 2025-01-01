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
import { Lock } from "lucide-react";
import { auth } from "@/actions/auth";
import { useRouter } from "@/i18n/routing";
import {useAuth} from "@/hooks/useAuth";

const formSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

type FormData = z.infer<typeof formSchema>;

export function AuthForm() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const {refresh,logIn} = useAuth();

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <Lock className="mx-auto h-12 w-12" />
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

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Authenticating..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
