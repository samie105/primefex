import ContactForm from "@/components/ContactForm";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function Contacts() {
  return (
    <>
      <section className="imageNhero w-full relative overflow-hidden">
        <div className="overlay absolute bg-black opacity-80 w-full h-full"></div>
        <div className="text-container flex flex-col justify-center items-center absolute z-10 w-full h-full">
          <div className="text-header text-lg sm:text-xl md:text-3xl lg:text-5xl text-white font-extrabold opacity-90">
            Contact Us
          </div>
          <div className="text-content px-10 py-5 text-xs md:py-7 md:px-14 sm:py-4 sm:px-10 sm:text-sm text-white opacity-90 font-semibold lg:text-xl lg:px-32 lg:py-10 text-center">
            Reach out to us anytime, We're working overtime to attend to your
            basic support. Here are our contact informations below
          </div>
        </div>
        <div className="image-container">
          <div className="parallax-image lg:h-2/6">
            <Image
              src="/assets/loanproc.jpg"
              width={500}
              height={500}
              alt="Successful loan application merry moment"
              className="w-full lg:h-2/6"
            />
          </div>
        </div>
      </section>
      <div className="Contact-section">
        <ContactForm />
      </div>
    </>
  );
}
