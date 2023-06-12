/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useContext, useState, useEffect } from "react";
import FormDataContext from "@/contexts/data";

const LoanProcessTwo = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isFormDataValid = validateForm();
    setIsFormValid(isFormDataValid);
  }, [formData]);

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;

    // Remove non-digit characters from the phone number
    const cleanedPhoneNumber = value.replace(/\D/g, "");

    // Format the phone number
    let formattedPhoneNumber = "";
    if (cleanedPhoneNumber.length > 0) {
      formattedPhoneNumber += "(" + cleanedPhoneNumber.substr(0, 3);
      if (cleanedPhoneNumber.length > 3) {
        formattedPhoneNumber += ") " + cleanedPhoneNumber.substr(3, 3);
        if (cleanedPhoneNumber.length > 6) {
          formattedPhoneNumber += " - " + cleanedPhoneNumber.substr(6, 4);
        }
      }
    }

    // Limit the number of characters to 16 (including formatting characters)
    const limitedPhoneNumber = formattedPhoneNumber.slice(0, 16);

    // Update the form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: limitedPhoneNumber,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    // Validate the form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handlePrevious = () => {
    // Check if it's the first step
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate email address
    if (!formData.emailAddress) {
      errors.emailAddress = "Email address is required.";
    }

    // Validate primary phone number
    if (!formData.primaryPhoneNumber) {
      errors.primaryPhoneNumber = "Primary phone number is required.";
    }

    return errors;
  };

  return (
    <>
      <div className="w-full p-6">
        <h2 className="capitalize font-bold text-2xl mb-8 text-center">
          Personal Contact Information
        </h2>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="emailAddress"
        >
          Email Address
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="email"
          name="emailAddress"
          id="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        {errors.emailAddress && (
          <p className="text-red-500">{errors.emailAddress}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="primaryPhoneNumber"
        >
          Primary Phone Number
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="primaryPhoneNumber"
          id="primaryPhoneNumber"
          value={formData.primaryPhoneNumber}
          onChange={handlePhoneChange}
          placeholder="Phone Number"
          required
        />
        {errors.primaryPhoneNumber && (
          <p className="text-red-500">{errors.primaryPhoneNumber}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="secondaryPhoneNumber"
        >
          Secondary Phone Number (Optional)
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="secondaryPhoneNumber"
          id="secondaryPhoneNumber"
          value={formData.secondaryPhoneNumber}
          onChange={handlePhoneChange}
          placeholder="Phone Number"
        />

        <div className="flex justify-between mt-7">
          {step > 1 && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none disabled:bg-gray-300 disabled:text-gray-800 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={!isFormValid}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanProcessTwo;
