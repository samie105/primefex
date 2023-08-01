"use client";
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
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const StepItem = ({ icon, text }) => (
  <div className="step flex items-center">
    <FontAwesomeIcon icon={icon} className="icon h-4 w-4 text-slate-800" />
    <p className="px-2 font-bold text-xs lg:text-sm md:text-sm sm:text-sm text-slate-800">
      {text}
    </p>
  </div>
);

export default function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <div className="bg-gray-200  ">
        <div className=" flex justify-between items-center px-6 py-6 h-auto sm:px-20 md:px-32 lg:px-48">
          <StepItem icon={faUser} text="Applys" />
          <StepItem icon={faComment} text="Get a Feedback" />
          <StepItem icon={faDollarSign} text="Get Money Today" />
        </div>
      </div>
      <div className="relative">
        {" "}
        <div className="absolute top-0 left-0 z-30 bg-slate-800 opacity-80 w-full h-full"></div>{" "}
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
          organicArrows={false}
          bullets={false}
        >
          <div data-src="assets/primefex1.jpg" />
          <div data-src="assets/primefex2.jpg" />
        </AutoplaySlider>
      </div>

      <LoanSection />
      <Whyloan />
      <Minifaq />
      <WhyQuick />
      <Disclosure />
    </>
  );
}
