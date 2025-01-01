"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { authContext } from "@/components/AuthProvider";

export const useAuth = () => {
  const { isAuth, setIsAuth } = authContext();
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, [isAuth]);

  const checkAuth = async () => {
    const res = await axios.get("/api/user");
    setIsAuth(res.data.isAuth);
  };

  const logOut = () => {
    axios.patch("/api/user").then(() => {
      setIsAuth(false);
      router.push("/");
    });
  };

  const refresh = () => {
    checkAuth();
  };

  const logIn = async (password: string) => {
    try {
      const res = await axios.post("/api/user", { password });
      if (!res.data.isAuth) {
        return false;
      }

      refresh();
      return true;
    } catch (error) {
      console.error(error);
    }
  };

  return { isAuth, logOut, refresh, logIn };
};
