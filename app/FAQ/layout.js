/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "../globals.css";
import "../styles.css";

export const metadata = {
  title: "Primefexloans | Frequently Asked Questions",
};

export default function LoanProcessLayout({ children }) {
  return (
    <main>
      {" "}
      <section className="imageNhero w-full relative  overflow-hidden">
        <div className="overlay absolute bg-black opacity-80 w-full h-full"></div>
        <div className="text-container flex flex-col justify-center items-center absolute  z-10 w-full h-full">
          <div className="text-header text-lg sm:text-xl  md:text-3xl lg:text-5xl text-white font-extrabold opacity-90">
            Frequently Asked Questions
          </div>
          <div className="text-content px-10 py-5 text-xs md:py-7 md:px-14 sm:py-4 sm:px-10 sm:text-sm text-white opacity-90 font-semibold lg:text-xl lg:px-28 lg:py-10 text-center">
            We're right ahead of your Questions and We've got the right answers
            to that
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/assets/Faq.jpg"
            width={500}
            height={500}
            alt="Successful loan application merry moment"
            className="w-full lg:h-2/6"
          />
        </div>
      </section>
      {children}
    </main>
  );
}
