import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faComment,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import LoanSection from "@/components/LoanSection";
import Whyloan from "@/components/Whyloan";
import Minifaq from "@/components/Minifaq";
import WhyQuick from "@/components/WhyQuick";
import Disclosure from "@/components/Disclosure";

const StepItem = ({ icon, text }) => (
  <div className="step flex items-center">
    <FontAwesomeIcon icon={icon} className="icon h-4 w-4 text-slate-800" />
    <p className="px-2 font-bold text-xs lg:text-sm md:text-sm sm:text-sm text-slate-800">
      {text}
    </p>
  </div>
);

export default function Home() {
  return (
    <>
      <div className="bg-gray-200  ">
        <div className=" flex justify-between items-center px-6 py-3 h-auto sm:px-20 md:px-32 lg:px-48">
          <StepItem icon={faUser} text="Applys" />
          <StepItem icon={faComment} text="Get a Feedback" />
          <StepItem icon={faDollarSign} text="Get Money Today" />
        </div>
      </div>
      <LoanSection />
      <Whyloan />
      <Minifaq />
      <WhyQuick />
      <Disclosure />
    </>
  );
}
