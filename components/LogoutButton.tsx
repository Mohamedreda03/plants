"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { authContext } from "./AuthProvider";

export default function LogoutButton({ className }: { className?: string }) {
  const { isAuth } = authContext();
  const { logOut } = useAuth();

  return (
    <Button
      onClick={logOut}
      variant="outline"
      className={cn(`text-lg h-10 `, !isAuth && "hidden", className)}
    >
      <LogOut className="text-red-500" />
      <span>Logout</span>
    </Button>
  );
}
