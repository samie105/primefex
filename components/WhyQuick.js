import Image from "next/image";
import React from "react";

export default function WhyQuick() {
  return (
    <>
      <div className="w-full bg-green-200 h-full flex items-center">
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
        <div className="info-holder flex w-full h-full items-center justify-center">
          <div className="cont h-full">
            <div className="text-center ">
              <h3 className="text-lg md:text-lg lg:text-xl font-semibold px-1 py-4">
                What You Should Know About:
              </h3>
              <h3 className="text-lg md:text-xl lg:text-3xl font-bold">
                MyQuickLoan
              </h3>
            </div>
            <div className="textbar">
              <p className="font-semibold text-base lg:text-lg text-gray-800 mt-7  px-20 py-8">
                MyQuickLoan is a better way to borrow extra money. It’s not a
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
