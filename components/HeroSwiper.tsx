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
      autoplay={{ delay: 5000 }}
      navigation
      className="w-full h-[calc(100vh-89px)]"
    >
      <SwiperSlide className="relative">
        <Image
          src="/slides/slide-image-01.webp"
          alt="Hero"
          fill
          className="object-cover blur-[2px]"
        />
        <div className="absolute inset-0 w-full h-full bg-black/20 flex flex-col items-center justify-center pb-16 text-white">
          <h2 className="text-5xl font-bold">{t("title")}</h2>
          <p className="text-white/80 mt-5 text-2xl max-w-screen-md mx-auto text-center">
            {t("subtitle")}
          </p>
          <Button
            asChild
            className="mt-5 bg-green-500 hover:bg-green-400 text-white text-xl h-12"
          >
            <Link href="/products">{t("button")}</Link>
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image
          src="/slides/slide-image-02.webp"
          alt="Hero"
          fill
          className="object-cover blur-[2px]"
        />
        <div className="absolute inset-0 w-full h-full bg-black/20 flex flex-col items-center justify-center pb-16 text-white">
          <h2 className="text-5xl font-bold">{t("title")}</h2>
          <p className="text-white/80 mt-5 text-2xl max-w-screen-md mx-auto text-center">
            {t("subtitle")}
          </p>
          <Button
            asChild
            className="mt-5 bg-green-500 hover:bg-green-400 text-white text-xl h-12"
          >
            <Link href="/products">{t("button")}</Link>
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
