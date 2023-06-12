"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import FormDataContext from "@/contexts/data";

const LoanProcessThree = ({ step, setStep }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.address) {
      errors.address = "Address is required";
    }

    if (!formData.suiteApt) {
      errors.suiteApt = "Suite / Apt # is required";
    }

    if (!formData.city) {
      errors.city = "City is required";
    }

    if (!formData.state) {
      errors.state = "State is required";
    }

    if (!formData.zipCode) {
      errors.zipCode = "Zip Code is required";
    }

    if (!formData.residenceDuration) {
      errors.residenceDuration = "Residence duration is required";
    }

    if (!formData.residenceStatus) {
      errors.residenceStatus = "Residence status is required";
    }

    if (!formData.monthlyPayment) {
      errors.monthlyPayment = "Monthly payment is required";
    }

    if (!formData.eviction) {
      errors.eviction = "Eviction information is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    const isValid = validateForm();
    if (isValid) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <div className="w-full p-6">
        <h2 className="capitalize font-bold text-2xl mb-8 text-center">
          Your Address
        </h2>
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="address"
        >
          What's your address? (Please use a physical address, not a PO Box)
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        {formErrors.address && (
          <p className="text-red-500">{formErrors.address}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="suiteApt"
        >
          Suite / Apt #
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="suiteApt"
          id="suiteApt"
          value={formData.suiteApt}
          onChange={handleChange}
          placeholder="Suite / Apt #"
          required
        />
        {formErrors.suiteApt && (
          <p className="text-red-500">{formErrors.suiteApt}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="city"
        >
          City
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        {formErrors.city && <p className="text-red-500">{formErrors.city}</p>}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="state"
        >
          State
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="state"
          id="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        {formErrors.state && <p className="text-red-500">{formErrors.state}</p>}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="zipCode"
        >
          Zip Code
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="zipCode"
          id="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        {formErrors.zipCode && (
          <p className="text-red-500">{formErrors.zipCode}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="residenceDuration"
        >
          How long have you been at your residence?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="residenceDuration"
          id="residenceDuration"
          value={formData.residenceDuration}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="6 months or less">6 months or less</option>
          <option value="7-12 months">7-12 months</option>
          <option value="1-2 years">1-2 years</option>
          <option value="3+ years">3+ years</option>
        </select>
        {formErrors.residenceDuration && (
          <p className="text-red-500">{formErrors.residenceDuration}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="residenceStatus"
        >
          Do you rent or own your home?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="residenceStatus"
          id="residenceStatus"
          value={formData.residenceStatus}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Rent">Rent</option>
          <option value="Own">Own</option>
          <option value="Parents">Parents</option>
        </select>
        {formErrors.residenceStatus && (
          <p className="text-red-500">{formErrors.residenceStatus}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="monthlyPayment"
        >
          Monthly mortgage / Rent amount
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          type="text"
          name="monthlyPayment"
          id="monthlyPayment"
          value={formData.monnthlyMortgage}
          onChange={handleChange}
          placeholder="Monthly mortgage / Rent amount"
          required
        />
        {formErrors.monthlyPayment && (
          <p className="text-red-500">{formErrors.monthlyPayment}</p>
        )}

        <label
          className="block text-gray-700 font-semibold mb-2 mt-7"
          htmlFor="eviction"
        >
          Have you ever been evicted?
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg pl-3 pr-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none"
          name="eviction"
          id="eviction"
          value={formData.eviction}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {formErrors.eviction && (
          <p className="text-red-500">{formErrors.eviction}</p>
        )}

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
            className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanProcessThree;
