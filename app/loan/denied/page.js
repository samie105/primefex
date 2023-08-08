"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function DeniedLoans() {
  const router = useRouter();

  const handleBackHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Loan Application Denied
          </h2>
          <p className="my-5 text-center text-sm text-gray-600">
            Unfortunately, we cannot process your loan application. We encourage
            you to reapply next year or contact our support team for further
            assistance.
          </p>
        </div>
        <button
          onClick={handleBackHome}
          className="group relative font-bold w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
