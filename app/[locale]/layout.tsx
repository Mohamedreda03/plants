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
    "Flower Green Agricultural Company, launched from Menoufia Governorate, aims to achieve global status by providing integrated agricultural services. Our diverse plant production and commitment to showcasing nature's beauty are our core principles. We offer high-quality services with a team of qualified, expert, and professional workers dedicated to excellence, credibility, and accuracy. Discover our branches and experience the best in agricultural services.",
  keywords:
    "flowers, plants, Flower Green, gardening, floral arrangements, زهور, نباتات, فلاور جرين, بستنة, تنسيق زهور",
  authors: [{ name: "Flower Green" }],
  openGraph: {
    title: "Flower Green",
    description:
      "Welcome to Flower Green, your go-to destination for beautiful flowers and plants.",
    images: [
      {
        url: "/logo_seo.png",
        width: 1200,
        height: 630,
        alt: "Flower Green",
      },
    ],
    url: "https://www.flower-green.com",
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
