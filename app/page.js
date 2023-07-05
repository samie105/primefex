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
import { FormDataProvider } from "@/contexts/data";

export default function Home() {
  return (
    <>
      <div className="bg-slate-600 text-white ">
        <div className="opacity-80 flex justify-between items-center px-6 py-3 h-auto sm:px-20 md:px-32 lg:px-48">
          <div className="step flex items-center">
            <FontAwesomeIcon icon={faUser} className="icon h-3 w-3 " />
            <p className="px-1 font-bold text-xs lg:text-sm md:text-sm sm:text-sm">
              Apply
            </p>
          </div>

          <div className="step flex items-center">
            <FontAwesomeIcon icon={faComment} className="icon h-3 w-3 " />
            <p className="px-1 font-bold text-xs lg:text-sm md:text-sm sm:text-sm">
              Get a Feedback
            </p>
          </div>

          <div className="step flex items-center">
            <FontAwesomeIcon icon={faDollarSign} className="icon h-3 w-3" />
            <p className="px-1 font-bold text-xs lg:text-sm md:text-sm sm:text-sm">
              Get Money Today
            </p>
          </div>
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
