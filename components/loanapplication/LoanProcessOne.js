/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faCalendar } from "@fortawesome/free-solid-svg-icons";
import FormDataContext from "@/contexts/data";
import Image from "next/image";
import axios from "axios";

const LoanProcessOne = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ssnError, setSsnError] = useState("");

  useEffect(() => {
    const isFormDataValid = validateFormData();
    setIsFormValid(isFormDataValid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatSSN = (ssn) => {
    const cleanedSSN = ssn.replace(/\D/g, "");
    let formattedSSN = "";
    if (cleanedSSN.length > 3) {
      formattedSSN += cleanedSSN.substr(0, 3) + "-";
      if (cleanedSSN.length > 5) {
        formattedSSN += cleanedSSN.substr(3, 2) + "-";
        formattedSSN += cleanedSSN.substr(5, 4);
      } else {
        formattedSSN += cleanedSSN.substr(3);
      }
    } else {
      formattedSSN = cleanedSSN;
    }
    return formattedSSN;
  };

  const formatDOB = (dob) => {
    const cleanedDOB = dob.replace(/\D/g, "");
    let formattedDOB = "";
    if (cleanedDOB.length > 2) {
      formattedDOB += cleanedDOB.substr(0, 2) + "/";
      if (cleanedDOB.length > 4) {
        formattedDOB += cleanedDOB.substr(2, 2) + "/";
        formattedDOB += cleanedDOB.substr(4, 4);
      } else {
        formattedDOB += cleanedDOB.substr(2);
      }
    } else {
      formattedDOB = cleanedDOB;
    }
    return formattedDOB;
  };

  const handleSSNChange = (e) => {
    const formattedSSN = formatSSN(e.target.value);
    setFormData({ ...formData, ssn: formattedSSN });
  };

  const handleDOBChange = (e) => {
    const formattedDOB = formatDOB(e.target.value);
    setFormData({ ...formData, dob: formattedDOB });
  };

  const validateFormData = () => {
    const { firstName, lastName, ssn, dob } = formData;
    return firstName && lastName && ssn && dob;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormDataValid = validateFormData();
    if (!isFormDataValid) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("/loan/api", { ssn: formData.ssn });
      const data = response.data;
      console.log(data);

      if (data.ssn) {
        setSsnError("The provided SSN has been used before");
        setIsLoading(false);
        return;
      } else {
        setStep(step + 1); // Proceed to the next step
      }
    } catch (error) {
      console.error(error);
      setSsnError("An error occurred. Please try again later.");
    }

    setIsLoading(false);

    setIsLoading(false);

    const today = new Date();
    const selectedDOB = new Date(formData.dob);

    if (selectedDOB > today) {
      alert("Date of Birth cannot be in the future.");
      return;
    }

    const ageDiff = today - selectedDOB;
    const ageDate = new Date(ageDiff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (age < 18) {
      alert("You must be at least 18 years old.");
      return;
    }

    setStep(step + 1); // Proceed to the next step
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1); // Go back to the previous step
    }
  };

  return (
    <>
      <div className="w-full p-6">
        <h2 className="capitalize font-bold text-2xl mb-8 text-center">
          Tell Us About Yourself
        </h2>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="firstName"
        >
          Legal First Name
        </label>
        <div className="relative">
          <input
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faUser} className="text-gray-500 text-sm" />
          </div>
        </div>
        <div className="mt-7">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="lastName"
          >
            Legal Last Name
          </label>
          <div className="relative">
            <input
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-500 text-sm"
              />
            </div>
          </div>
          <div className="flex justify-between items-center pr-5 mt-7">
            <label
              className="block text-gray-700 font-semibold mb-2 mt-7"
              htmlFor="ssn"
            >
              Social Security Number
            </label>
            <div className="image pl-10 ml-10">
              <Image
                src="/assets/ssnStuff.png"
                width={500}
                height={500}
                alt="Successful loan application merry moment"
                className="w-full h-full lg:w-24 md:w-24 sm:w-24"
              />
            </div>
          </div>
          <div className="relative">
            <input
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
              type="text"
              name="ssn"
              id="ssn"
              value={formData.ssn}
              onChange={handleSSNChange}
              placeholder="xxx-xx-xxxx"
              required
            />

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faLock}
                className="text-gray-500 text-sm"
              />
            </div>
          </div>
          {ssnError && <p className="text-red-500 mt-2">{ssnError}</p>}
          <div className="mt-7">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <div className="relative">
              <input
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
                type="text"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={handleDOBChange}
                placeholder="mm/dd/yyyy"
                required
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-gray-500 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 rounded-md text-sm disabled:text-gray-800 text-white bg-blue-500 font-semibold disabled:bg-gray-200"
            onClick={handlePrevious}
            disabled={step === 1}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm text-white font-semibold disabled:bg-gray-300 ${
              isFormValid ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed "
            }`}
            onClick={handleSubmit}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? "Checking..." : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanProcessOne;
