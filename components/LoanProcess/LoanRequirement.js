import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBank,
  faDollarSign,
  faMoneyCheckAlt,
  faPhoneAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export default function LoanRequirement() {
  return (
    <>
      <div className="text-center py-9">
        <h1 className="text-2xl font-bold mb-6">WHAT YOU’LL NEED TO APPLY</h1>
        <div className="border-b-2 border-gray-300 mx-auto w-16"></div>
      </div>
      <div className="flex flex-wrap px-10 justify-center my-8 text-center">
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 sm:p-6 bg-white shadow-md rounded-lg mx-2 my-4">
          <div className="rounded-full bg-blue-400 p-4 sm:p-6 mb-4">
            <FontAwesomeIcon
              icon={faWallet}
              className="text-3xl sm:text-4xl text-white"
            />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-2">
            Regular Source of Income
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Demonstrate a consistent and reliable source of income to qualify
            for the loan.
          </p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 sm:p-6 bg-white shadow-md rounded-lg mx-2 my-4">
          <div className="rounded-full bg-blue-400 p-4 sm:p-6 mb-4">
            <FontAwesomeIcon
              icon={faBank}
              className="text-3xl sm:text-4xl text-white"
            />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-2">
            A Qualifying Bank Account
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Have an active bank account that meets the minimum requirements for
            eligibility.
          </p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 sm:p-6 bg-white shadow-md rounded-lg mx-2 my-4">
          <div className="rounded-full bg-blue-400 p-4 sm:p-6 mb-4">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-3xl sm:text-4xl text-white"
            />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-2">
            Valid Contact Information
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Provide accurate and up-to-date contact information for
            communication purposes.
          </p>
        </div>
      </div>
    </>
  );
}
