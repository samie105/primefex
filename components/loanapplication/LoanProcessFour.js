"use state";
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import FormDataContext from "@/contexts/data";
import Image from "next/image";

const LoanProcessFour = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setStep(step + 1); // Proceed to the next step
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    // Perform validation for each field
    if (!formData.routingNumber) {
      validationErrors.routingNumber = "Routing Number is required";
    }
    if (!formData.accountNumber) {
      validationErrors.accountNumber = "Account Number is required";
    }
    if (!formData.confirmAccountNumber) {
      validationErrors.confirmAccountNumber =
        "Confirm Account Number is required";
    }
    if (!formData.accountType) {
      validationErrors.accountType = "Account Type is required";
    }
    if (!formData.accountDuration) {
      validationErrors.accountDuration = "Account Duration is required";
    }
    if (!formData.directDeposit) {
      validationErrors.directDeposit = "Direct Deposit is required";
    }
    if (!formData.automaticPayments) {
      validationErrors.automaticPayments = "Automatic Payments is required";
    }
    return validationErrors;
  };

  return (
    <>
      <div className="w-full p-6">
        <h2 className="capitalize font-bold text-2xl mt-4 mb-8 text-center">
          Financial Details
        </h2>
        <div className="image flex justify-center mb-4">
          <Image
            width={500}
            height={500}
            src="/assets/routingPhoto.jpg"
            alt=""
          />
        </div>

        <form onSubmit={handleSubmit}>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="routingNumber"
          >
            Bank Routing Number
          </label>
          <input
            className={`w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none ${
              errors.routingNumber ? "border-red-500" : ""
            }`}
            type="text"
            name="routingNumber"
            id="routingNumber"
            value={formData.routingNumber}
            onChange={handleChange}
            placeholder="Bank Routing Number"
            required
          />
          {errors.routingNumber && (
            <p className="text-red-500 mt-1">{errors.routingNumber}</p>
          )}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="accountNumber"
          >
            Bank Account Number
          </label>
          <input
            className={`w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none ${
              errors.accountNumber ? "border-red-500" : ""
            }`}
            type="text"
            name="accountNumber"
            id="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Bank Account Number"
            required
          />
          {errors.accountNumber && (
            <p className="text-red-500 mt-1">{errors.accountNumber}</p>
          )}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="confirmAccountNumber"
          >
            Confirm Bank Account Number
          </label>
          <input
            className={`w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none ${
              errors.confirmAccountNumber ? "border-red-500" : ""
            }`}
            type="text"
            name="confirmAccountNumber"
            id="confirmAccountNumber"
            value={formData.confirmAccountNumber}
            onChange={handleChange}
            placeholder="Confirm Bank Account Number"
            required
          />
          {errors.confirmAccountNumber && (
            <p className="text-red-500 mt-1">{errors.confirmAccountNumber}</p>
          )}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="accountType"
          >
            Account Type
          </label>
          <select
            className={`w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none ${
              errors.accountType ? "border-red-500" : ""
            }`}
            name="accountType"
            id="accountType"
            value={formData.accountType}
            onChange={handleChange}
            required
          >
            <option value="">Choose One</option>
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
          </select>
          {errors.accountType && (
            <p className="text-red-500 mt-1">{errors.accountType}</p>
          )}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="accountDuration"
          >
            How long have you had this account?
          </label>
          <select
            className={`w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none ${
              errors.accountDuration ? "border-red-500" : ""
            }`}
            name="accountDuration"
            id="accountDuration"
            value={formData.accountDuration}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="6 months or less">6 months or less</option>
            <option value="7-12 months">7-12 months</option>
            <option value="1-2 years">1-2 years</option>
            <option value="3+ years">3+ years</option>
          </select>
          {errors.accountDuration && (
            <p className="text-red-500 mt-1">{errors.accountDuration}</p>
          )}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="directDeposit"
          >
            Does this account have direct deposit?
          </label>
          <select
            className={`w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none ${
              errors.directDeposit ? "border-red-500" : ""
            }`}
            name="directDeposit"
            id="directDeposit"
            value={formData.directDeposit}
            onChange={handleChange}
            required
          >
            <option value="">Choose One</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.directDeposit && (
            <p className="text-red-500 mt-1">{errors.directDeposit}</p>
          )}

          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="automaticPayments"
          >
            Do you have automatic payments set up for this account?
          </label>
          <select
            className={`w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none ${
              errors.automaticPayments ? "border-red-500" : ""
            }`}
            name="automaticPayments"
            id="automaticPayments"
            value={formData.automaticPayments}
            onChange={handleChange}
            required
          >
            <option value="">Choose One</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.automaticPayments && (
            <p className="text-red-500 mt-1">{errors.automaticPayments}</p>
          )}

          <div className=" w-full flex justify-between">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none mt-8"
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8"
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

export default LoanProcessFour;
