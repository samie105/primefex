/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FAQ from "@/components/Minifaq";
import Image from "next/image";
import MainFAQ from "@/components/MainFAQ";
export default function FAQs() {
  return (
    <>
      <div className="faq-section">
        <MainFAQ />
      </div>
    </>
  );
}
