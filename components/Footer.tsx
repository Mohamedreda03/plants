import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-300 border-t border-green-400" id="contact">
      <div className="max-w-screen-xl px-5 py-8 mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Link href="#home">
            <Image
              src="/logo.png"
              height={100}
              width={100}
              alt=""
              className="object-cover"
            />
          </Link>
        </div>
        <div className="footer_links">
          <ul className="flex items-center justify-around">
            <li>
              <a
                href="https://www.facebook.com/people/%D9%81%D9%84%D8%A7%D9%88%D8%B1-%D8%AC%D8%B1%D9%8A%D9%86-%D8%A7%D8%B3%D8%AA%D9%8A%D8%B1%D8%A7%D8%AF-%D9%88%D8%AA%D8%B5%D8%AF%D9%8A%D8%B1-%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D9%86%D9%87/100063727696675/?mibextid=LQQJ4d"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  src="/icons/facebook.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                <p>Flower Green</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/flower_green_import_export/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt=""
                  height={30}
                  width={30}
                />
                <p>flower_green_import_export</p>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=%2B201099992574&context=ARDANLsEAFLFY89a3EFpk06Tq5zSIs7gVzT0PqH7oYby5kL9aJ55imuIFOOysX1fyvXzzpE8R5yU7VN4u9uYWwS4J74ULvUt00Zn9uGfg-6-ZtgWb06gzQZuUWUxWdgdLDKPX3JryS94fsnTDfRki0HOlA&source=FB_Page&app=facebook&entry_point=page_cta"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt=""
                  height={30}
                  width={30}
                />
                <p>+20 109 999 2574</p>
              </a>
            </li>
            <li>
              <a
                href="mailto: flowergreen992@gmail.com"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Image src="/icons/gmail.svg" alt="" height={30} width={30} />
                <p>flowergreen992@gmail.com</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="bg-green-400 text-center py-3">
        Copyright © 2024 Flower Green. All right reseved
      </p>
    </footer>
  );
}
