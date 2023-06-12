"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LoanProcessingEight = ({ step, setStep }) => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const simulateProgress = () => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress === 90) {
            clearInterval(interval);
            router.push("/LoanProcessing"); // Once the loading is complete, navigate to the "/loan" page
          }
          return prevProgress + 10;
        });
      }, 2000); // Increase the progress every 2 seconds

      return () => clearInterval(interval);
    };

    simulateProgress();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center my-40">
      <div className="w-64">
        <div className="relative h-4 bg-gray-200 rounded">
          <div
            className="transition-all ease-linear absolute top-0 left-0 h-full bg-blue-500 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-center mt-2">
          <p className="text-sm text-gray-600 font-bold">
            Reviewing Loan Application...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanProcessingEight;
