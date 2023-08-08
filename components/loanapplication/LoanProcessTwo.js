/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useContext, useState, useEffect } from "react";
import FormDataContext from "@/contexts/data";

const LoanProcessTwo = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      [name]: value.toLowerCase(),
    }));
  };

  const handleNext = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setIsLoading(true); // Set isLoading to true when checking existence

      const emailExists = await checkIfEmailExists(
        formData.emailAddress.toLowerCase()
      );
      const phoneExists = await checkIfPhoneExists(formData.primaryPhoneNumber);

      setIsLoading(false);

      if (emailExists) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailAddress: "Email address has already been used",
        }));
      }

      if (phoneExists) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          primaryPhoneNumber: "Phone number has already been used",
        }));
      }

      if (!emailExists && !phoneExists) {
        setStep((prevStep) => prevStep + 1);
      }
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

  const checkIfEmailExists = async (emailAddress) => {
    try {
      const response = await fetch("/loan/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress,
        }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Error checking email existence.");
      }

      const data = await response.json();
      console.log(data);
      return data.email;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const checkIfPhoneExists = async (phoneNumber) => {
    try {
      const response = await fetch("/loan/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
        }),
      });

      if (!response.ok) {
        throw new Error("Error checking phone existence.");
      }

      const data = await response.json();
      return data.phoneNumber;
    } catch (error) {
      console.error(error);
      throw error;
    }
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
          value={formData.emailAddress && formData.emailAddress.toLowerCase()}
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
              className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg focus:outline-none"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          <button
            className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg focus:outline-none disabled:bg-gray-300 disabled:text-gray-800 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={!isFormValid || isLoading} // Disable the button when loading
          >
            {isLoading ? "Validating..." : "Next"}{" "}
            {/* Display "Loading..." when isLoading is true */}
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanProcessTwo;
