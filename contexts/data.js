"use client";
import React, { useState, useEffect, createContext } from "react";

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    const storedFormStep = Number(localStorage.getItem("formStep"));

    setFormData(
      storedFormData || {
        firstName: "",
        lastName: "",
        loanAmount: 100,
        loanDuration: 0,
        monthlyMortgage: "",
        interest: 0,
        totalAmountPaid: 0,
        ssn: "",
        dob: "",
        address: "",
        suiteApt: "",
        city: "",
        state: "",
        zipCode: "",
        residenceDuration: "",
        residenceStatus: "",
        monthlyPayment: "",
        eviction: "",
        emailAddress: "",
        primaryPhoneNumber: "",
        primaryPhoneType: "",
        secondaryPhoneNumber: "",
        secondaryPhoneType: "",
        routingNumber: "",
        accountNumber: "",
        confirmAccountNumber: "",
        accountType: "",
        accountDuration: "",
        directDeposit: "",
        automaticPayments: "",
        primaryIncome: "",
        lastPayAmount: "",
        lastPayDate: "",
        nextPayDate: "",
        additionalIncome: "",
        loanPurpose: "",
        militaryStatus: "",
        bankruptcyHistory: "",
        paydayLoanHistory: "",
        myQuickLoanSource: "",
        myQuickLoanSourceOther: "",
        creditScore: "",
        licenseNumber: "",
        frontView: null,
        backView: null,
      }
    );

    setStep(storedFormStep || 1);
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("formStep", step.toString());
  }, [formData, step]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData, step, setStep }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContext;
