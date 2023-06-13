"use client";
import FormDataContext from "@/contexts/data";
import { useContext } from "react";
import Link from "next/link";

export default function LoanMessage() {
  const { formData, setStep } = useContext(FormDataContext);
  const loanby20 = (formData.loanAmount / 100) * 80;
  const payback = (formData.totalAmountPaid / 100) * 80;
  const handleClick = () => {
    setStep(1);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-lg px-10 py-12 md:mx-36 sm:mx-28 mx-16 lg:mx-56">
        <div className="flex items-center justify-start mb-6">
          <h2 className="text-lg font-bold pl-5">Congratulations!</h2>
        </div>
        <p className="text-base mb-6 px-5 text-gray-700 font-semibold">
          {`Your loan request of $${formData.loanAmount} was Successful but your information didn't meet
          the standard of that amount. We've approved you for the loan of $${loanby20} to pay $${payback} in ${formData.loanDuration} months, you'll pay $${formData.monthlyPayment} every month with an interest rate of ${formData.interest}%.  Our customer care service will reach you soon`}
        </p>

        <Link href="/">
          <div className=" font-bold px-5 py-2 underline" onClick={handleClick}>
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
}
