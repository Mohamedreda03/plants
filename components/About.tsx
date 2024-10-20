import { useTranslations } from "next-intl";
import React from "react";

export default function About() {
  const t = useTranslations("About");
  return (
    <div className="bg-green-300" id="about">
      <div className="mb-8 px-5 max-w-screen-xl mx-auto py-14 border-y border-green-500">
        <div className="md:text-2xl text-xl">
          <h2 className="text-center text-4xl font-bold mb-5">{t("title")}</h2>
          <p className="leading-10 text-center">{t("content")}</p>
        </div>
      </div>
    </div>
  );
}
