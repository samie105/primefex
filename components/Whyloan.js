import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faShoppingCart,
  faCar,
  faHome,
  faGraduationCap,
  faPlane,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export default function Whyloan() {
  const reasons = [
    { icon: faHospital, text: "Hospital Bills" },
    { icon: faShoppingCart, text: "New Appliances" },
    { icon: faCar, text: "Car Repairs" },
    { icon: faHome, text: "Home Keepings" },
    { icon: faPlane, text: "Travel Expenses" },
    { icon: faCreditCard, text: "Credit Card" },
    // Add more reasons here
  ];

  return (
    <div className="my-10">
      <div className="header w-full">
        <div className="header-text flex justify-center flex-wrap px-10 text-center">
          <h2 className="capitalize text-base sm:text-lg md:text-lg lg:text-xl font-bold">
            Primefexloans can help with expenses like
          </h2>
        </div>
        <div className="header-rule flex justify-center py-2 opacity-70">
          <div className="h-0.5 lg:w-72 md:w-52 sm:w-44 w-24 rounded-full bg-slate-900"></div>
        </div>
      </div>

      <div className="help-containments mt-8 lg:px-40 md:px-32 flex flex-wrap justify-center px-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="help-card flex flex-col items-center py-5 px-6 rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] opacity-70 m-1"
          >
            <FontAwesomeIcon
              icon={reason.icon}
              className="text-lg mb-3 h-9 w-9"
            />
            <p className="text-center font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
