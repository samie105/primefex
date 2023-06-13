"use client";
import React, { useState, useEffect } from "react";

const FormDataContext = React.createContext();
const localStorage = window.localStorage;
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || {
      firstName: "",
      lastName: "",
      loanAmount: 0,
      loanDuration: 0,
      monnthlyMortgage: 0,
      monthlyPayment: 0,
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
  const [step, setStep] = useState(
    Number(localStorage.getItem("formStep")) || 1
  );

  useEffect(() => console.log(formData), [formData]);
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
