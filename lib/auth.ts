import { cookies } from "next/headers";

export const isAdmin = () => {
  const session = cookies().get("admin");

  if (!session) {
    return false;
  }

  return true;
};

export const logout = () => {
  cookies().delete("admin");
};
