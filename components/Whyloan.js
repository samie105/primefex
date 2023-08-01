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
  return (
    <>
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
          <div className="help-card flex flex-col items-center py-5 px-6 rounded-lg shadow-md opacity-70 m-1">
            <FontAwesomeIcon
              icon={faHospital}
              className="text-lg mb-3 h-9 w-9"
            />
            <p className="text-center font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
              Hospital Bills
            </p>
          </div>
          <div className="help-card flex flex-col items-center py-5 px-6 rounded-lg shadow-md opacity-70 m-1">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-lg mb-3 h-9 w-9"
            />
            <p className="text-center font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
              New Appliances
            </p>
          </div>
          <div className="help-card flex flex-col items-center py-5 px-6  rounded-lg shadow-md opacity-70 m-1">
            <FontAwesomeIcon icon={faCar} className="text-lg mb-3 h-9 w-9" />
            <p className="text-center font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
              Car Repairs
            </p>
          </div>
          <div className="help-card flex flex-col items-center py-5 px-6  rounded-lg shadow-md opacity-70 m-1">
            <FontAwesomeIcon icon={faHome} className="text-lg mb-3 h-9 w-9" />
            <p className="text-center font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
              Home Keepings
            </p>
          </div>

          <div className="help-card flex flex-col items-center py-5 px-6  rounded-lg shadow-md opacity-70 m-1">
            <FontAwesomeIcon icon={faPlane} className="text-lg mb-3 h-9 w-9" />
            <p className="text-center font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
              Travel Expenses
            </p>
          </div>
          <div className="help-card flex flex-col items-center py-5 px-6 rounded-lg shadow-md opacity-70 m-1">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="text-lg mb-3 h-9 w-9"
            />
            <p className="text-center font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
              Credit Card
            </p>
          </div>
          {/* Add more help cards here */}
        </div>
      </div>
    </>
  );
}
