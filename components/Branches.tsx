import { useTranslations } from "next-intl";
import React from "react";

export default function Branches() {
  const t = useTranslations("Branches");
  return (
    <section className="max-w-screen-xl mx-auto px-5 py-10" id="branches">
      <div className="flex items-center justify-center mb-5">
        <h2 className="text-4xl">{t("title")}</h2>
      </div>
      <p className="text-xl leading-9 text-center">{t("content")}</p>
      <div className="mt-8 flex items-center md:flex-row flex-col gap-5">
        <div className="w-full">
          <p>
            Mansheit Al Bagour - Shebein Al Kanater, Sarawah, Ashmoun, Menofia
            Governorate 6030013
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.3746066844064!2d31.080906999999993!3d30.254906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14586f0373cef9a9%3A0xdc2a79f2c9779118!2z2YHZhNin2YjYsSDYrNix2YrZhiDYp9iz2KrZitix2KfYryDZiNiq2LXYr9mK2LEg2YbYqNin2KrYp9iqINin2YTYstmK2YbZhw!5e0!3m2!1sar!2seg!4v1718670029528!5m2!1sar!2seg"
            loading="lazy"
            className="w-full h-[400px] rounded-lg"
          ></iframe>
        </div>
        <div className="w-full">
          <p>الخطاطبه, El Sadat City, Menofia Governorate 6012401</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.217650539765!2d30.69220109999999!3d30.344763699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458896fe81f16f1%3A0x57170f4556504f9b!2z2YXYstix2LnZhyDZgdmE2KfZiNixINis2LHZitmG!5e0!3m2!1sen!2seg!4v1718670072885!5m2!1sen!2seg"
            loading="lazy"
            className="w-full h-[400px] rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
