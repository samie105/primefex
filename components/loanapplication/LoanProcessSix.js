"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import FormDataContext from "@/contexts/data";

const LoanProcessSix = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const {
      loanPurpose,
      loanPurposeOther,
      militaryStatus,
      bankruptcyHistory,
      paydayLoanHistory,
      PrimefexloansSource,
      PrimefexloansSourceOther,
    } = formData;
    const newErrors = {};

    if (!loanPurpose) {
      newErrors.loanPurpose = "Loan purpose is required.";
    } else if (loanPurpose === "Other" && !loanPurposeOther) {
      newErrors.loanPurposeOther = "Please specify the loan purpose.";
    }

    if (!militaryStatus) {
      newErrors.militaryStatus = "Military status is required.";
    }

    if (!bankruptcyHistory) {
      newErrors.bankruptcyHistory = "Bankruptcy history is required.";
    }

    if (!paydayLoanHistory) {
      newErrors.paydayLoanHistory = "Payday loan history is required.";
    }

    if (!PrimefexloansSource) {
      newErrors.PrimefexloansSource = "Source of Primefexloans is required.";
    } else if (PrimefexloansSource === "Other" && !PrimefexloansSourceOther) {
      newErrors.PrimefexloansSourceOther =
        "Please specify the source of Primefexloans.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validateForm();
    if (isValid) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="w-full p-6">
        <h2 className="capitalize font-bold text-2xl mb-8 text-center">
          Loan Purpose
        </h2>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="loanPurpose"
        >
          What is the purpose for the loan?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="loanPurpose"
          id="loanPurpose"
          value={formData.loanPurpose}
          onChange={handleChange}
          required
        >
          <option value="">Choose One</option>
          <option value="Bills (General)">Bills (General)</option>
          <option value="Bills (Medical)">Bills (Medical)</option>
          <option value="Bills (Auto)">Bills (Auto)</option>
          <option value="Bills (Home/Utilities)">Bills (Home/Utilities)</option>
          <option value="Rent / Mortgage">Rent / Mortgage</option>
          <option value="Gifts / Leisure">Gifts / Leisure</option>
          <option value="Pay off loans / overdrawn account">
            Pay off loans / overdrawn account
          </option>
          <option value="School">School</option>
          <option value="Other">Other</option>
        </select>
        {errors.loanPurpose && (
          <p className="text-red-500 text-sm mt-1">{errors.loanPurpose}</p>
        )}

        {formData.loanPurpose === "Other" && (
          <input
            className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none mt-3"
            type="text"
            name="loanPurposeOther"
            id="loanPurposeOther"
            value={formData.loanPurposeOther}
            onChange={handleChange}
            placeholder="Please specify"
            required={formData.loanPurpose === "Other"}
          />
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="militaryStatus"
        >
          Are you active-duty military or a dependent?
        </label>
        <div className="flex items-center mb-2">
          <input
            className="mr-2"
            type="radio"
            name="militaryStatus"
            id="militaryStatusYes"
            value="Yes"
            checked={formData.militaryStatus === "Yes"}
            onChange={handleChange}
            required
          />
          <label htmlFor="militaryStatusYes">Yes</label>
        </div>
        <div className="flex items-center">
          <input
            className="mr-2"
            type="radio"
            name="militaryStatus"
            id="militaryStatusNo"
            value="No"
            checked={formData.militaryStatus === "No"}
            onChange={handleChange}
            required
          />
          <label htmlFor="militaryStatusNo">No</label>
        </div>
        {errors.militaryStatus && (
          <p className="text-red-500 text-sm mt-1">{errors.militaryStatus}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="bankruptcyHistory"
        >
          Have you ever filed for bankruptcy?
        </label>
        <div className="flex items-center mb-2">
          <input
            className="mr-2"
            type="radio"
            name="bankruptcyHistory"
            id="bankruptcyHistoryYes"
            value="Yes"
            checked={formData.bankruptcyHistory === "Yes"}
            onChange={handleChange}
            required
          />
          <label htmlFor="bankruptcyHistoryYes">Yes</label>
        </div>
        <div className="flex items-center">
          <input
            className="mr-2"
            type="radio"
            name="bankruptcyHistory"
            id="bankruptcyHistoryNo"
            value="No"
            checked={formData.bankruptcyHistory === "No"}
            onChange={handleChange}
            required
          />
          <label htmlFor="bankruptcyHistoryNo">No</label>
        </div>
        {errors.bankruptcyHistory && (
          <p className="text-red-500 text-sm mt-1">
            {errors.bankruptcyHistory}
          </p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="paydayLoanHistory"
        >
          Have you had a payday loan before?
        </label>
        <div className="flex items-center mb-2">
          <input
            className="mr-2"
            type="radio"
            name="paydayLoanHistory"
            id="paydayLoanHistoryYes"
            value="Yes"
            checked={formData.paydayLoanHistory === "Yes"}
            onChange={handleChange}
            required
          />
          <label htmlFor="paydayLoanHistoryYes">Yes</label>
        </div>
        <div className="flex items-center">
          <input
            className="mr-2"
            type="radio"
            name="paydayLoanHistory"
            id="paydayLoanHistoryNo"
            value="No"
            checked={formData.paydayLoanHistory === "No"}
            onChange={handleChange}
            required
          />
          <label htmlFor="paydayLoanHistoryNo">No</label>
        </div>
        {errors.paydayLoanHistory && (
          <p className="text-red-500 text-sm mt-1">
            {errors.paydayLoanHistory}
          </p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="PrimefexloansSource"
        >
          Where did you hear about Primefexloans?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="PrimefexloansSource"
          id="PrimefexloansSource"
          value={formData.PrimefexloansSource}
          onChange={handleChange}
          required
        >
          <option value="">Choose One</option>
          <option value="Mail / Postcard">Mail / Postcard</option>
          <option value="Friend / Family / Coworker">
            Friend / Family / Coworker
          </option>
          <option value="TV">TV</option>
          <option value="Online Search">Online Search</option>
          <option value="Other">Other</option>
          <option value="Repeat Customer">Repeat Customer</option>
          <option value="SMS Marketing">SMS Marketing</option>
        </select>
        {errors.PrimefexloansSource && (
          <p className="text-red-500 text-sm mt-1">
            {errors.PrimefexloansSource}
          </p>
        )}

        {formData.PrimefexloansSource === "Other" && (
          <input
            className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none mt-3"
            type="text"
            name="PrimefexloansSourceOther"
            id="PrimefexloansSourceOther"
            value={formData.PrimefexloansSourceOther}
            onChange={handleChange}
            placeholder="Please specify"
            required={formData.PrimefexloansSource === "Other"}
          />
        )}
        {errors.PrimefexloansSourceOther && (
          <p className="text-red-500 text-sm mt-1">
            {errors.PrimefexloansSourceOther}
          </p>
        )}

        <p className="text-sm text-gray-600 bg-gray-100 px-6 py-6 mt-7 rounded-lg font-semibold">
          By clicking 'Next' below you are agreeing to the following:
          <br />
          <br />
          1. You are officially continuing your loan application for
          Primefexloans; and
          <br />
          <br />
          2. You are providing authorization to Primefexloans under the Fair
          Credit Reporting Act to use information obtained from credit reporting
          agencies to verify your information for identity verification purposes
          and to evaluate your eligibility for credit.
        </p>

        <div className="flex justify-between mt-7">
          <button
            className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 font-semibold text-sm"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold text-sm"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanProcessSix;
