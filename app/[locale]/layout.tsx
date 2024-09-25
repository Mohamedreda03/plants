import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {
  // Almarai,
  Alexandria,
} from "next/font/google";
import "./globals.css";

// const almarai = Almarai({
//   subsets: ["arabic"],
//   weight: ["300", "400", "700", "800"],
// });
const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

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
      <body className={alexandria.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
