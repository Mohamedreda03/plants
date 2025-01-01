"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/routing";
import {  Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import LangButton from "./LangButton";
import LogoutButton from "@/components/LogoutButton";

export default function MobileMenu() {
  const t = useTranslations("Navbar");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={35} className="cursor-pointer lg:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-white flex flex-col gap-5 justify-center pb-40 text-black text-3xl text-center z-[2000]">
        <SheetClose asChild>
          <Link href="/">{t("home")}</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/products">{t("products")}</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/#about">{t("about")}</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/#branches">{t("branches")}</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/#contact">{t("contact")}</Link>
        </SheetClose>
        <SheetClose>
         <LogoutButton className="w-full" />
        </SheetClose>
        <SheetClose asChild className="flex items-center justify-center">
          <LangButton />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
