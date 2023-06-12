import React from "react";

export default function LoanStep() {
  return (
    <>
      <div className="process-cards">
        <div className="flex justify-center items-center px-5 my-5">
          <div className="flex space-y-8 justify-center flex-wrap lg:flex-nowrap ">
            <StepCard stepNumber="1" stepName="PICK YOUR TERMS">
              Think about how much you need to borrow and select a payment
              amount that works for your budget. You choose how long you want to
              pay the loan back - take as long as 10 months to pay. Plus, you
              can pay your loan off early with no prepayment penalties.
            </StepCard>
            <StepCard
              stepNumber="2"
              stepName="FILL OUT A SIMPLE ONLINE APPLICATION"
            >
              Our application is completely secure and confidential. Apply
              online in ten minutes or less. If you are approved, you can get up
              to $800.
            </StepCard>
            <StepCard stepNumber="3" stepName="GET FUNDS TRANSFERRED">
              If you accepted your loan terms on a Monday through Friday, before
              11:30 a.m. CT, MyQuickLoan will transfer the money to your bank by
              the end of the business day. If you accepted your loan terms on a
              Monday through Thursday between 11:30 a.m. CT and 8 p.m. CT,
              MyQuickLoan will transfer your funds to your bank overnight. If
              you accepted your loan terms on a Friday after 11:30 a.m. CT
              through anytime on Sunday, MyQuickLoan will transfer your money
              over the weekend and it will arrive at your bank by the end of the
              next business day.
            </StepCard>
          </div>
        </div>
        <div className="text-container w-full justify-center items-center py-10 md:px-24 px-12 lg:px-36">
          <p className="font-semibold text-gray-600">
            Spotloan is a better way to borrow extra money when you need it.
            It’s not a payday loan. It’s an installment loan, which means you
            pay down the balance with each on-time payment. Borrow up to $1500
            (up to $800 for new and repeat borrowers, up to $1500 for preferred
            customers with 10 or more loans). Then, pay us back a little at a
            time.
          </p>

          <div className="btn w-40 justify-center items-center mx-auto my-10">
            <div className="px-5 py-3 rounded-full bg-gray-900 text-center text-white font-bold">
              Get Started
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function StepCard({ stepNumber, stepName, children }) {
  return (
    <div className="bg-white rounded-3xl shadow-md w-full mx-4 p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-blue-500 text-white rounded-full w-12 h-12 font-bold text-xl flex items-center justify-center">
          {stepNumber}
        </div>
        <div className="ml-4 text-lg font-bold">{stepName}</div>
      </div>
      <div className="mt-4 text-sm py-5 font-semibold text-gray-600">
        {children}
      </div>
    </div>
  );
}
