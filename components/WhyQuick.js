import Image from "next/image";
import React from "react";

export default function WhyQuick() {
  return (
    <>
      <div className="w-full bg-slate-800 text-white h-full flex items-center">
        <div className="image-holder w-full  relative hidden lg:flex lg:items-center lg:justify-center">
          <div className="overlay absolute opacity-80 w-full h-full bg-black"></div>
          <div className="w-full">
            <Image
              src="/assets/whyquck.jpg"
              width={500}
              height={500}
              alt=""
              className=" w-full h-full"
            />
          </div>
        </div>
        <div className="info-holder flex w-full h-full items-center justify-center py-6 md:px-16">
          <div className="cont h-full lg:py-0 py-8">
            <div className="">
              <h3 className=" md:text-xl lg:text-3xl font-bold text-base text-left lg:text-center lg:pl-0 pl-7">
                Why Primefexloans
              </h3>
            </div>
            <div className="textbar">
              <p className="font-semibold  lg:text-lg text-white opacity-90 mt-7 text-sm md:text-base lg:px-20 px-7 lg:py-8 pb-8">
                Primefexloans is a better way to borrow extra money. It’s not a
                payday loan. It’s an installment loan, which means you pay down
                the balance with each on-time payment. Borrow from $300 to $1500
                - up to $800 for new and repeat borrowers, and up to $1500 for
                preferred borrowers with 10 or more loans! Then, pay us back a
                little at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
