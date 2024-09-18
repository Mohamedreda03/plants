import { useTranslations } from "next-intl";
import Image from "next/image";
import LangButton from "./LangButton";
import MobileMenu from "./MobileMenu";
import { Link } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="sticky top-0 inset-x-0 z-[1000] bg-white w-full border-b border-green-200 py-1">
      <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between h-[80px] px-7">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={70} />
        </Link>
        <ul className="hidden md:flex items-center gap-7 text-xl">
          <li>
            <Link href="/" className="hover:text-green-400 transition-all">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-green-400 transition-all"
            >
              {t("products")}
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-green-400 transition-all">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              href="#branches"
              className="hover:text-green-400 transition-all"
            >
              {t("branches")}
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-green-400 transition-all"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
        <div className="hidden md:block">
          <LangButton />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
