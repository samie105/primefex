"use client";
import LoanRequirement from "@/components/LoanProcess/LoanRequirement";
import LoanStep from "@/components/LoanProcess/LoanStep";
import FAQ from "@/components/Minifaq";
import Image from "next/image";
import { useEffect } from "react";

export default function LoanProcess() {
  const ParallaxSection = () => {
    useEffect(() => {
      const handleScroll = () => {
        const parallaxImage = document.querySelector(".parallax-image");
        const scrollPosition = window.pageYOffset;

        parallaxImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  };
  ParallaxSection();
  return (
    <>
      <div className="page-container w-full">
        <section className="imageNhero w-full relative overflow-hidden">
          <div className="overlay absolute bg-black opacity-80 w-full h-full z-10"></div>
          <div className="text-container flex flex-col justify-center items-center absolute z-10 w-full h-full">
            <div className="text-header text-lg sm:text-xl md:text-3xl lg:text-5xl text-white font-extrabold opacity-90">
              How MyQuickLoan Works
            </div>
            <div className="text-content px-10 py-5 text-xs md:py-7 md:px-14 sm:py-4 sm:px-10 sm:text-sm text-white opacity-90 font-semibold lg:text-xl lg:px-28 lg:py-10 text-center">
              The MyQuickLoan application is fast, easy, and secure. Apply,
              accept your loan terms before 11:30 a.m. CT, and get money in your
              account as soon as today!
            </div>
          </div>
          <div className="image-container lg:h-2/6">
            <div className="parallax-image w-full">
              <Image
                src="/assets/loanproc.jpg"
                width={500}
                height={400}
                alt="Successful loan application merry moment"
                className="w-full lg:h-2/6"
              />
            </div>
          </div>
        </section>
        <section>
          <LoanStep />
        </section>
        <section>
          <LoanRequirement />
        </section>
        <section>
          <FAQ />
        </section>
      </div>
    </>
  );
}
