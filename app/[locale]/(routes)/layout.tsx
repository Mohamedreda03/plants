import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="z-[2000]">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
