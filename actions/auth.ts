"use server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

const correctPassword = process.env.ADMIN_PASSWORD;

async function encrypt(text: string) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(text, salt);
  return hash;
}

export async function auth(password: string) {
  if (password === correctPassword) {
    const encryptedCookie = await encrypt(password);

    cookies().set("admin", encryptedCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 1, // 1 day
    });

    return {
      success: true,
    };
  } else {
    return {
      success: false,
    };
  }
}

export async function logout() {
  cookies().set("admin", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  });

  return {
    success: true,
  };
}

export async function checkAuth() {
  const cookie = cookies().get("admin");

  if (cookie) {
    return true;
  } else {
    return false;
  }
}
