import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-emerald-500">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Image src="/logo.png" height={100} width={150} alt="logo" />
        </div>

        <p className="mx-auto mt-3 max-w-md text-center leading-relaxed text-3xl text-white">
          للطلب والاستفسار يرجى التواصل معنا على الروابط التالية
        </p>
        <ul className="mt-12 flex justify-center items-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.facebook.com/people/%D9%81%D9%84%D8%A7%D9%88%D8%B1-%D8%AC%D8%B1%D9%8A%D9%86-%D8%A7%D8%B3%D8%AA%D9%8A%D8%B1%D8%A7%D8%AF-%D9%88%D8%AA%D8%B5%D8%AF%D9%8A%D8%B1-%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D9%86%D9%87/100063727696675/?mibextid=LQQJ4d"
              rel="noreferrer"
              target="_blank"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-[50px] h-[50px]"
                viewBox="0 0 92 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="91.5618"
                  height="91.5618"
                  rx="45.7809"
                  fill="#337FFF"
                ></rect>
                <path
                  d="M56.9829 48.7613L58.2875 40.4725H50.2513V35.0848C50.2513 32.8183 51.3732 30.6036 54.9608 30.6036H58.6658V23.5452C56.5082 23.2011 54.328 23.015 52.1429 22.9883C45.5288 22.9883 41.2106 26.9643 41.2106 34.1523V40.4725H33.8789V48.7613H41.2106V68.8099H50.2513V48.7613H56.9829Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/flower_green_import_export/"
              rel="noreferrer"
              target="_blank"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-[50px] h-[50px]"
                viewBox="0 0 92 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="91.5618"
                  height="91.5618"
                  rx="45.7809"
                  fill="url(#paint0_linear_1727_3676)"
                ></rect>
                <path
                  d="M38.1613 45.8981C38.1613 41.6805 41.5784 38.2606 45.7948 38.2606C50.0112 38.2606 53.4301 41.6805 53.4301 45.8981C53.4301 50.1157 50.0112 53.5356 45.7948 53.5356C41.5784 53.5356 38.1613 50.1157 38.1613 45.8981ZM34.0338 45.8981C34.0338 52.3956 39.2992 57.6625 45.7948 57.6625C52.2904 57.6625 57.5558 52.3956 57.5558 45.8981C57.5558 39.4006 52.2904 34.1337 45.7948 34.1337C39.2992 34.1337 34.0338 39.4006 34.0338 45.8981ZM55.2729 33.6672C55.2727 34.211 55.4337 34.7426 55.7355 35.1948C56.0374 35.6471 56.4665 35.9996 56.9686 36.2079C57.4707 36.4162 58.0234 36.4709 58.5566 36.365C59.0898 36.2591 59.5796 35.9975 59.9641 35.6131C60.3487 35.2288 60.6106 34.739 60.7169 34.2058C60.8232 33.6725 60.769 33.1197 60.5611 32.6172C60.3533 32.1148 60.0012 31.6853 59.5493 31.383C59.0975 31.0807 58.5661 30.9192 58.0225 30.919H58.0214C57.2928 30.9194 56.594 31.209 56.0787 31.7243C55.5634 32.2395 55.2736 32.9384 55.2729 33.6672ZM36.5415 64.5469C34.3085 64.4452 33.0947 64.0731 32.2881 63.7588C31.2188 63.3424 30.4558 62.8464 29.6536 62.0451C28.8514 61.2438 28.3548 60.4813 27.9404 59.4116C27.6259 58.6052 27.254 57.3907 27.1525 55.157C27.0414 52.742 27.0192 52.0166 27.0192 45.8983C27.0192 39.78 27.0432 39.0566 27.1525 36.6396C27.2541 34.4059 27.6289 33.1938 27.9404 32.3849C28.3567 31.3153 28.8525 30.5521 29.6536 29.7497C30.4547 28.9472 31.2169 28.4505 32.2881 28.0359C33.0943 27.7214 34.3085 27.3493 36.5415 27.2478C38.9558 27.1367 39.681 27.1145 45.7948 27.1145C51.9086 27.1145 52.6346 27.1386 55.0508 27.2478C57.2839 27.3495 58.4956 27.7243 59.3042 28.0359C60.3736 28.4505 61.1366 28.9483 61.9388 29.7497C62.741 30.551 63.2357 31.3153 63.652 32.3849C63.9664 33.1914 64.3384 34.4059 64.4399 36.6396C64.551 39.0566 64.5731 39.78 64.5731 45.8983C64.5731 52.0166 64.551 52.74 64.4399 55.157C64.3382 57.3907 63.9644 58.6048 63.652 59.4116C63.2357 60.4813 62.7399 61.2445 61.9388 62.0451C61.1377 62.8457 60.3736 63.3424 59.3042 63.7588C58.498 64.0733 57.2839 64.4454 55.0508 64.5469C52.6366 64.658 51.9113 64.6802 45.7948 64.6802C39.6783 64.6802 38.9551 64.658 36.5415 64.5469ZM36.3519 23.1261C33.9136 23.2371 32.2474 23.6239 30.7924 24.1902C29.2855 24.7751 28.0098 25.5597 26.735 26.8328C25.4603 28.1059 24.6779 29.384 24.0932 30.8913C23.527 32.3477 23.1404 34.0134 23.0293 36.4524C22.9165 38.8953 22.8906 39.6763 22.8906 45.8981C22.8906 52.1199 22.9165 52.9009 23.0293 55.3438C23.1404 57.7829 23.527 59.4485 24.0932 60.9049C24.6779 62.4113 25.4605 63.6908 26.735 64.9634C28.0096 66.2359 29.2855 67.0195 30.7924 67.606C32.2502 68.1724 33.9136 68.5591 36.3519 68.6702C38.7953 68.7812 39.5748 68.8089 45.7948 68.8089C52.0149 68.8089 52.7956 68.7831 55.2377 68.6702C57.6762 68.5591 59.3413 68.1724 60.7972 67.606C62.3032 67.0195 63.5798 66.2365 64.8546 64.9634C66.1293 63.6903 66.9101 62.4113 67.4964 60.9049C68.0626 59.4485 68.4511 57.7828 68.5603 55.3438C68.6713 52.8991 68.6972 52.1199 68.6972 45.8981C68.6972 39.6763 68.6713 38.8953 68.5603 36.4524C68.4492 34.0133 68.0626 32.3468 67.4964 30.8913C66.9101 29.3849 66.1273 28.108 64.8546 26.8328C63.5818 25.5577 62.3032 24.7751 60.7991 24.1902C59.3413 23.6239 57.676 23.2353 55.2396 23.1261C52.7974 23.015 52.0167 22.9873 45.7966 22.9873C39.5766 22.9873 38.7953 23.0131 36.3519 23.1261Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_1727_3676"
                    x1="89.802"
                    y1="91.5618"
                    x2="-1.75982"
                    y2="-2.46459e-06"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FBE18A"></stop>
                    <stop offset="0.21" stopColor="#FCBB45"></stop>
                    <stop offset="0.38" stopColor="#F75274"></stop>
                    <stop offset="0.52" stopColor="#D53692"></stop>
                    <stop offset="0.74" stopColor="#8F39CE"></stop>
                    <stop offset="1" stopColor="#5B4FE9"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=%2B201099992574&context=ARDANLsEAFLFY89a3EFpk06Tq5zSIs7gVzT0PqH7oYby5kL9aJ55imuIFOOysX1fyvXzzpE8R5yU7VN4u9uYWwS4J74ULvUt00Zn9uGfg-6-ZtgWb06gzQZuUWUxWdgdLDKPX3JryS94fsnTDfRki0HOlA&source=FB_Page&app=facebook&entry_point=page_cta"
              rel="noreferrer"
              target="_blank"
            >
              <span className="sr-only">Youtube</span>
              <Image
                src="/icons/whatsapp.png"
                height={50}
                width={50}
                className="rounded-full"
                alt=""
              />
            </a>
          </li>

          <li>
            <a
              href="mailto:flowergreen992@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <span className="sr-only">Gmail</span>
              <Image
                src="/icons/gmail.svg"
                height={50}
                width={50}
                className="rounded-full bg-white p-2"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
