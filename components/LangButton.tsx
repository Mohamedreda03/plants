import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

export default function LangButton({
  className,
  link,
}: {
  className?: string;
  link?: string;
}) {
  const locale = useLocale();
  return (
    <Link
      href={link ? link : "/"}
      locale={locale === "ar" ? "en" : "ar"}
      className={cn(className)}
    >
      <Image
        src={locale === "ar" ? "/en.png" : "/ar.png"}
        className="object-cover"
        height={25}
        width={40}
        alt=""
      />
    </Link>
  );
}
