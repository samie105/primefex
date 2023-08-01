"use client";
import React, { useContext } from "react";
import LoanProcessOne from "@/components/loanapplication/LoanProcessOne";
import LoanProcessTwo from "@/components/loanapplication/LoanProcessTwo";
import LoanProcessThree from "@/components/loanapplication/LoanProcessThree";
import LoanProcessFour from "@/components/loanapplication/LoanProcessFour";
import LoanProcessFive from "@/components/loanapplication/LoanProcessFive";
import LoanProcessSix from "@/components/loanapplication/LoanProcessSix";
import LoanProcessSeven from "@/components/loanapplication/LoanProcessSeven";
import FormDataContext from "@/contexts/data";
import LoanProcessingEight from "@/components/loanapplication/LoanProcessingEight";

const PersonalInformationForm = () => {
  const { step, setStep } = useContext(FormDataContext);
  const totalSteps = 7;
  const progressPercentage = Math.ceil((step / totalSteps) * 100);

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return <LoanProcessOne step={step} setStep={setStep} />;
      case 2:
        return <LoanProcessTwo step={step} setStep={setStep} />;
      case 3:
        return <LoanProcessThree step={step} setStep={setStep} />;
      case 4:
        return <LoanProcessFour step={step} setStep={setStep} />;
      case 5:
        return <LoanProcessFive step={step} setStep={setStep} />;
      case 6:
        return <LoanProcessSix step={step} setStep={setStep} />;
      case 7:
        return <LoanProcessSeven step={step} setStep={setStep} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="px-10 pt-5">
        <h2 className="text-center text-4xl font-bold mb-4 mt-8">
          SECURE APPLICATION
        </h2>
        <p className="text-center mb-6 text-sm lg:text-base md:text-base md:px-32 lg:px-48">
          Your data is transmitted securely using 128-bit encryption and will be
          used in accordance with our Privacy Policy and Terms of Use.
        </p>
      </div>
      <div className="flex justify-center h-auto w-full">
        {step <= 7 && (
          <div className="mb-6 lg:w-3/4 md:3/4  md:px-5 px-2 lg:px-10">
            <div className="bg-white lg:rounded-xl relative md:shadow-md lg:shadow-md lg:px-8 md:px-6 py-8 overflow-hidden">
              <div className="flex justify-between items-center rounded-full px-4 w-full left-3 top-5">
                <div className="progress-bar-holder mr-5 w-full h-2 b rounded-full bg-gray-200">
                  <div
                    className={`progress-bar-width h-full rounded-full bg-slate-900 transition-all`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="progress-percentage pr-2 text-sm font-bold">
                  {progressPercentage}%
                </div>
              </div>

              {renderStepComponent()}
            </div>
          </div>
        )}
        {step >= 8 && <LoanProcessingEight />}
      </div>
    </>
  );
};

export default PersonalInformationForm;
