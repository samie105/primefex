/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FAQ from "@/components/Minifaq";
import Image from "next/image";
export default function AboutUs() {
  return (
    <>
      <div className="page-container w-full">
        <section className="imageNhero w-full relative overflow-hidden">
          <div className="overlay absolute bg-black opacity-80 w-full h-full"></div>
          <div className="text-container flex flex-col justify-center items-center absolute z-10 w-full h-full">
            <div className="text-header text-lg sm:text-xl md:text-3xl lg:text-5xl text-white font-extrabold opacity-90">
              About Us
            </div>
            <div className="text-content px-10 py-5 text-xs md:py-7 md:px-14 sm:py-4 sm:px-10 sm:text-sm text-white opacity-90 font-semibold lg:text-xl lg:px-28 lg:py-10 text-center">
              We pride ourselves on being there for our customers whenever they
              need us
            </div>
          </div>
          <div className="image-container">
            <Image
              src="/assets/aboutus.jpg"
              width={500}
              height={500}
              alt="Successful loan application merry moment"
              className="w-full lg:h-2/6"
            />
          </div>
        </section>
        <section>
          <div className="container mx-auto px-6 lg:px-24 py-16">
            <h2 className="text-3xl font-bold text-center mt-8 mb-12">
              Primefexloans - Your Trusted Financial Partner
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">
                  Transparent and Responsible Lending
                </h3>
                <p className="text-gray-600">
                  We prioritize transparency and responsible lending practices
                  to ensure that you make informed decisions. Our commitment to
                  transparency means that we provide clear and concise
                  information about loan terms, interest rates, and fees
                  upfront. We believe in responsible lending, and our team of
                  experts works diligently to match you with lenders who offer
                  fair and competitive loan options that suit your financial
                  situation.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">
                  Fast and Convenient Application Process
                </h3>
                <p className="text-gray-600">
                  We understand that time is of the essence when it comes to
                  financial emergencies. With Primefexloans, you can say goodbye
                  to lengthy paperwork and time-consuming bank visits. Our
                  streamlined application process allows you to apply for a loan
                  online in just a few simple steps. You can complete the entire
                  process from the comfort of your home or on the go, using any
                  device with an internet connection.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">
                  Flexible Loan Options
                </h3>
                <p className="text-gray-600">
                  We recognize that everyone's financial needs are unique.
                  That's why we offer a wide range of loan options to cater to
                  different circumstances. Whether you need a personal loan to
                  consolidate debt, a business loan to expand your operations,
                  or an emergency loan to cover unexpected expenses, we have you
                  covered. Our lenders provide flexible loan terms, allowing you
                  to choose the repayment schedule that best suits your budget
                  and financial goals.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">Security and Privacy</h3>
                <p className="text-gray-600">
                  At Primefexloans, we prioritize the security and privacy of
                  our customers. We employ industry-standard security measures
                  to safeguard your personal and financial information. Our
                  website and application process are encrypted to ensure that
                  your data remains confidential and protected. We are committed
                  to maintaining the highest standards of data privacy and
                  adhere to strict protocols to ensure that your information is
                  handled securely.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">
                  Exceptional Customer Support
                </h3>
                <p className="text-gray-600">
                  We believe in providing exceptional customer support
                  throughout your borrowing journey. Our dedicated customer
                  support team is always ready to assist you with any queries or
                  concerns you may have. Whether you need help with the
                  application process, loan terms, or general assistance, we are
                  just a phone call or email away. Your satisfaction is our top
                  priority, and we strive to deliver prompt and helpful support
                  at every step.
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <h3 className="text-xl font-bold mb-4">
                  Join Primefexloans Today
                </h3>
                <p className="text-gray-600">
                  Whether you need financial assistance for personal or business
                  purposes, Primefexloans is your reliable partner. We are
                  committed to helping you navigate your financial challenges
                  with ease and convenience. Join thousands of satisfied
                  borrowers who have experienced the benefits of our efficient
                  and trustworthy loan services. Apply for a loan with
                  Primefexloans today and discover a world of financial
                  possibilities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <FAQ />
      </div>
    </>
  );
}
