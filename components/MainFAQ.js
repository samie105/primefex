"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./MainFAQ.css";

const MainFAQ = () => {
  const [expanded, setExpanded] = useState([]);

  const faqData = [
    {
      question: "How do I qualify for a Primefexloans?",
      answer:
        "To apply for a Primefexloans, you’ll need:\n\n" +
        "- A job or other regular source of income\n" +
        "- A checking or savings account\n" +
        "- A Social Security Number (SSN)\n" +
        "- A valid email address, mailing address, and phone number\n" +
        "- To be at least 18 years old\n\n" +
        "Once you apply for a Primefexloans online, we’ll be able to tell you whether or not you qualify. Please note that there are a few instances where we may need to verify your identity once you’re approved. In that case, you’ll be required to verify your identity with our third-party provider before your loan is funded.",
    },
    {
      question: "Are Primefexloanss available in my state?",
      answer:
        "Primefexloanss are currently available to residents of the following states:\n\n" +
        "Alabama, Alaska, Arizona, California, Colorado, Delaware, Florida, Georgia, Hawaii, Idaho, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Massachusetts, Michigan, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, North Carolina, Ohio, Oklahoma, Oregon, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Washington, Wisconsin, and Wyoming.",
    },
    {
      question: "When will I know if my Primefexloans is approved?",
      answer:
        "As soon as you complete your application online, you’ll know within one minute or less if you are approved.",
    },
    {
      question: "How long does the application process take?",
      answer:
        'The application process is fast as it is done completely online. Most people complete the process in about 10 minutes. Please see "When do I get my money?" for more information on loan funding times.',
    },
    {
      question: "When do I get my money?",
      answer:
        "Monday through Friday before 11:30 a.m. CT\n\n" +
        "Primefexloans will transfer the money to your bank by the end of the business day on the same day the approved loan was accepted by you.* Your bank could make that money available to you immediately thereafter. If you do not see your funds by the end of the day, be sure to contact your bank for specifics.\n\n" +
        "Monday through Thursday between 11:30 a.m. CT and 8 p.m. CT\n\n" +
        "Primefexloans will transfer your funds to your bank overnight.\n" +
        "Your bank could make that money available to you first thing in the morning.* If you do not see your funds by 9 a.m. local time, be sure to contact your bank for specifics.\n\n" +
        "On a Friday after 11:30 a.m. CT through Sunday\n\n" +
        "Primefexloans will transfer your money over the weekend, and it will be waiting at your bank on Monday morning.* If you do not see your funds on Monday morning, be sure to contact your bank for specifics. However, please know that in some instances, for your protection, after you are approved, we may ask you to provide verification of your identity before your loan is funded. In these cases, we will notify you by email with a request for additional information. *If this falls on a banking holiday, this will apply to the next business day. See federalreserve.gov for details.",
    },
    {
      question: "What happens if I change my mind?",
      answer:
        "You have three days from the date you receive your funds to return the funds at no cost to you. Simply contact us at help@Primefexloans.com to begin the process. Be sure to contact us during business hours before your three-day rescission period comes to an end.",
    },
    {
      question: "What is the interest on a Primefexloans?",
      answer:
        "APR\n" +
        "Our maximum Annual Percentage Rate (APR) is 490%. APR is the annual percentage rate of your loan, or the cost of your credit as a yearly rate.\n\n" +
        "For example, on your first Primefexloans, your APR is 490%. If you borrow $600 and choose a bi-weekly payment schedule of ten payments over five months, then you would pay approximately $775 in finance charges, for a total payback of $1,375. (This assumes that your first payment occurs 14 days after the loan is funded, and you make all scheduled payments in full and on time.)",
    },
    {
      question: "What fees are associated with a Primefexloans?",
      answer:
        "There are no hidden fees associated with a Primefexloans. The fees that you are responsible for are outlined when you apply for a Primefexloans and in your loan documents.\n\n" +
        "Our maximum Annual Percentage Rate (APR) is 490%. APR is the annual percentage rate of your loan, or the cost of your credit as a yearly rate. Repeat borrowers get a lower APR.\n\n" +
        "Additionally, you may be charged $10 for any returned checks as an NSF fee. Primefexloans does not charge an origination fee.",
    },
    {
      question: "How do Primefexloanss compare to payday loans?",
      answer:
        "Primefexloanss and payday loans are completely different. Primefexloanss are short-term installment loans, which means you pay back your loan over time. With a Primefexloans, you choose how long you want to pay the loan back, up to ten months. Plus, you can pay your loan off early with no prepayment penalties.\n\n" +
        "On the other hand, payday loans are fixed loans. When the loan term is up, usually within two weeks, you need to pay back the entire amount. If you don’t have that money available, you can rollover the loan for another two weeks (or whatever your loan period is). This racks up additional fees and gets expensive fast.",
    },
    {
      question: "How do I decide if a Primefexloans is right for me?",
      answer:
        "Only you can decide if a Primefexloans is right for you.\n\n" +
        "It is important to note that a Primefexloans is an expensive form of credit and is intended only for short-term financial needs. Primefexloanss are designed to help you deal with emergencies such as rent, medical bills, car repairs, and expenses related to your job. Primefexloanss are not intended to solve longer-term credit or other financial needs, and alternative forms of credit may be better for you, including borrowing from a friend or relative, using a credit card cash advance, taking out a personal loan, or using a home equity loan or savings.",
    },
    {
      question: "How can I make a payment?",
      answer:
        "We have lots of options! Please note that we need at least two business days to process changes to payment schedules or loan payoffs.\n\n" +
        "Here’s a breakdown of your payment options:\n\n" +
        "‍Automatic Debit (ACH): Automatic debits from your bank account are the easiest way to make sure your payments are made on time.\n\n" +
        "97% of Primefexloans customers choose to make their payments using ACH because it is a convenient way to make loan payments, and it can also save you money over the life of your loan by helping you avoid missed payments.\n\n" +
        "Customers that choose not to use ACH for their payments are almost five times more likely to default on their programs. Those missed payments can result in additional finance charges, which make the loan more expensive over time.\n\n" +
        "Call us to set up ACH payments.\n\n" +
        "‍Debit Cards: Contact us to make a payment via debit card over the phone.\n\n" +
        "‍Checks and Money Orders: To make a payment by check or money order,\n" +
        "mail it to us at:\n" +
        "Primefexloans\n" +
        "P.O. Box 720\n" +
        "Belcourt, ND 58316\n\n" +
        "Your payment will be on time as long as the check or money order is received by your payment due date and your payment clears. It can take your bank seven to ten days to clear your payment.",
    },
    {
      question: "What if I can’t make my next payment?",
      answer:
        "We understand that sometimes you may need to change your payment schedule or payment amount. Just call or email us at least two business days before your next payment is due and a Customer Service Representative will work with you on repayment options.\n\n" +
        "If you defer a payment, additional interest will accrue on your loan. In most cases, this will increase the total cost of your loan.",
    },
    {
      question: "How do I contact Primefexloans?",
      answer:
        "That’s easy! Send an email to contact@Primefexloans.com. Our hours of operation are: Monday - Friday 7 a.m. - 8 p.m. CT and Saturday 9 a.m. - 6 p.m. CT.",
    },
    {
      question: "What happens if my loan doesn’t go to the right bank account?",
      answer:
        "We deposit your loan using the bank account information you provided us during the application process. When you make us aware that funds have not been received, it takes five to seven business days for a bank to return the funds to Primefexloans so we can deposit the funds into the correct account.",
    },
    {
      question: "What happens if I make a late payment?",
      answer:
        "If you make a late payment, you may be subject to additional interest charges and fees. It's important to make your payments on time to avoid these additional costs.\n\n" +
        "If you think you will be late on a payment, please contact us as soon as possible. We are here to help.",
    },
  ];

  const toggleExpanded = (index) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  return (
    <div className="main-faq lg:px-28 px-10 my-6">
      {faqData.map((item, index) => (
        <div
          className={`faq-item shadow-md  ${
            expanded.includes(index) ? "expanded" : ""
          }`}
          key={index}
        >
          <div
            className="faq-question text-gray-900"
            onClick={() => toggleExpanded(index)}
          >
            <span>{item.question}</span>
            <FontAwesomeIcon
              icon={expanded.includes(index) ? faAngleUp : faAngleDown}
              className="faq-icon"
            />
          </div>
          <div className="faq-answer px-2 py-4">{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default MainFAQ;
