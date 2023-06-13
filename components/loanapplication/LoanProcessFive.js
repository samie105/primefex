/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext, useState } from "react";
import FormDataContext from "@/contexts/data";

const LoanProcessFive = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.primaryIncome) {
      errors.primaryIncome = "Primary source of income is required";
    }

    if (!formData.lastPayAmount) {
      errors.lastPayAmount = "Take home amount of your last check is required";
    }

    if (!formData.lastPayDate) {
      errors.lastPayDate = "Last pay date is required";
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(formData.lastPayDate);

      if (selectedDate > currentDate) {
        errors.lastPayDate = "Last pay date must be past or today";
      }
    }

    if (!formData.nextPayDate) {
      errors.nextPayDate = "Next pay date is required";
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(formData.nextPayDate);

      if (selectedDate < currentDate) {
        errors.nextPayDate = "Next pay date must be today or in the future";
      }
    }

    setFormErrors(errors);
    return errors;
  };

  const renderAdditionalIncomeField = () => {
    if (formData.primaryIncome === "Other") {
      return (
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="otherIncome"
          >
            Please specify your primary source of income
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            type="text"
            name="otherIncome"
            id="otherIncome"
            value={formData.otherIncome}
            onChange={handleChange}
            required
          />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="w-full p-6">
        <h2 className="capitalize font-bold text-2xl mb-8 text-center">
          Source Of Income
        </h2>
        <form onSubmit={handleSubmit}>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="primaryIncome"
          >
            What is your primary source of income?
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            name="primaryIncome"
            id="primaryIncome"
            value={formData.primaryIncome}
            onChange={handleChange}
            required
          >
            <option value="">Choose One</option>
            <option value="Job">Job</option>
            <option value="Social Security/Disability">
              Social Security/Disability
            </option>
            <option value="Self-employed">Self-employed</option>
            <option value="Retirement/Pension">Retirement/Pension</option>
            <option value="Other">Other</option>
            <option value="No Regular Income">No Regular Income</option>
          </select>
          {formErrors.primaryIncome && (
            <p className="text-red-500 text-sm">{formErrors.primaryIncome}</p>
          )}

          {renderAdditionalIncomeField()}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="lastPayAmount"
          >
            Take home amount of your last check
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            type="text"
            name="lastPayAmount"
            id="lastPayAmount"
            value={formData.lastPayAmount}
            onChange={handleChange}
            placeholder="$0.00"
            required
          />
          {formErrors.lastPayAmount && (
            <p className="text-red-500 text-sm">{formErrors.lastPayAmount}</p>
          )}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="lastPayDate"
          >
            When were you last paid?
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            type="date"
            name="lastPayDate"
            id="lastPayDate"
            value={formData.lastPayDate}
            onChange={handleChange}
            max={new Date().toISOString().split("T")[0]}
            required
          />
          {formErrors.lastPayDate && (
            <p className="text-red-500 text-sm">{formErrors.lastPayDate}</p>
          )}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="nextPayDate"
          >
            When is your next pay date?
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            type="date"
            name="nextPayDate"
            id="nextPayDate"
            value={formData.nextPayDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />
          {formErrors.nextPayDate && (
            <p className="text-red-500 text-sm">{formErrors.nextPayDate}</p>
          )}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="additionalIncome"
          >
            Do you have any additional income you'd like us to consider?
          </label>
          <div className="flex items-center mb-2">
            <input
              className="mr-2"
              type="radio"
              name="additionalIncome"
              id="additionalIncomeYes"
              value="Yes"
              checked={formData.additionalIncome === "Yes"}
              onChange={handleChange}
            />
            <label htmlFor="additionalIncomeYes">Yes</label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              type="radio"
              name="additionalIncome"
              id="additionalIncomeNo"
              value="No"
              checked={formData.additionalIncome === "No"}
              onChange={handleChange}
            />
            <label htmlFor="additionalIncomeNo">No</label>
          </div>
          {formData.additionalIncome === "Yes" && (
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2 mt-7"
                htmlFor="otherIncomeSource"
              >
                Please specify your additional source of income
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                type="text"
                name="otherIncomeSource"
                id="otherIncomeSource"
                value={formData.otherIncomeSource}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <p className="text-sm text-gray-500 mt-3">
            You do not need to report alimony, child support, or separate
            maintenance income if you do not wish to have it considered as a
            basis for repaying this obligation.
          </p>

          <div className="flex justify-between mt-8">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg text-sm font-semibold"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoanProcessFive;
