"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface AuthContextProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = async () => {
    const res = await axios.get("/api/user");
    setIsAuth(res.data.isAuth);
  };

  useEffect(() => {
    checkAuth();
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const authContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
