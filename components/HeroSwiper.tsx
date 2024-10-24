"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Link } from "@/i18n/routing";

export default function HeroSwiper() {
  const t = useTranslations("Hero");

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      navigation
      className="w-full h-[calc(100vh-89px)]"
    >
      <SwiperSlide className="relative">
        <Image
          src="/slides/slide_1.webp"
          alt="Hero"
          fill
          className="object-cover blur-[1px]"
        />
        <div className="absolute inset-0 w-full h-full bg-black/20 flex flex-col items-center justify-center pb-16 text-white px-5">
          <h2 className="md:text-5xl text-4xl font-bold text-center mb-2">
            {t("title")}
          </h2>
          <p className="text-white/80 mt-5 md:text-2xl text-xl max-w-screen-md mx-auto text-center">
            {t("subtitle1")}
          </p>
          <Button
            asChild
            className="mt-5 bg-green-500 hover:bg-green-400 text-white text-xl h-12"
          >
            <Link href="/products">{t("button1")}</Link>
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          src="/slides/slide_2.webp"
          alt="Hero"
          fill
          className="object-cover blur-[1px]"
        />
        <div className="absolute inset-0 w-full h-full bg-black/20 flex flex-col items-center justify-center pb-16 text-white px-5">
          <h2 className="md:text-5xl text-4xl font-bold text-center mb-2">
            {/* {t("title")} */}
            {t("subtitle2")}
          </h2>
          {/* <p className="text-white/80 mt-5 md:text-2xl text-lg max-w-screen-md mx-auto text-center">
            {t("subtitle2")}
          </p> */}
          <Button
            asChild
            className="mt-5 bg-green-500 hover:bg-green-400 text-white text-xl h-12"
          >
            <Link href="#branches">{t("button2")}</Link>
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
