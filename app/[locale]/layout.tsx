import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Almarai } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "@/components/QueryClientProvider";
import React from "react";
import AuthProvider from "@/components/AuthProvider";
import { Metadata } from "next";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Flower Green",
  description:
    "Flower Green تقدم خدمات زراعية متكاملة بجودة عالية، تجمع بين تنوع الإنتاج والاحترافية لإبراز جمال الطبيعة.",
  keywords:
    "flowers, plants, Flower Green, gardening, floral arrangements, زهور, نباتات, فلاور جرين, بستنة, تنسيق زهور",
  authors: [{ name: "Flower Green" }],
  openGraph: {
    type: "website",
    locale: "ar",
    url: "https://flower-green.com/",
    siteName: "Flower Green",
    images: [
      {
        url: "/logo_seo.png",
        width: 1200,
        height: 630,
        alt: "Flower Green",
      },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={almarai.className}>
        <AuthProvider>
          <QueryClientProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </QueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
