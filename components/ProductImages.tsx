"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

export default function ProductImages({ images }: { images: string[] }) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 5000 }}
      navigation={true}
      className="h-[700px] max-w-[600px] w-full relative rounded-lg"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="relative">
          <Image src={image} alt="" fill className="object-cover rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
