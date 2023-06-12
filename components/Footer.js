import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="footer-container bg-slate-800 w-full px-10 py-8 text-white">
        <div className="content flex md:flex-row lg:flex-row flex-col">
          <div className="contactNaward w-full flex flex-col">
            <div className="header text-2xl font-bold py-6">MyQuickLoan</div>
            <div className="contacts">
              <div className="phone-contact flex items-center mb-2 py-2 px-1">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span className="text-sm font-bold">(888) 662-6226</span>
              </div>
              <div className="email-contact flex items-center mb-2 py-2 px-1">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span className="text-sm font-bold">
                  Contact@myquickloan.com
                </span>
              </div>
              <div className="address-contact flex items-center mb-2 py-2 px-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <span className="text-sm font-bold">
                  MyQuickLoan, PO Box 630, Atwaters, ND 46100
                </span>
              </div>
            </div>
            <div className="awards py-2 flex">
              <div className="award flex items-center mr-4">
                <span className="font-semibold">
                  <Image
                    src="/assets/award-2.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </span>
              </div>
              <div className="award flex items-center mr-4">
                <span className="font-semibold">
                  <Image src="/assets/ygj.svg" alt="" width={50} height={50} />
                </span>
              </div>
              <div className="award flex items-center">
                <span className="font-semibold">
                  <Image
                    src="/assets/award.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="px-8 quickLinks w-full items-center flex-wrap hidden md:flex lg:flex ">
            <div className=" px-2">How it Works</div>
            <div className=" px-2">About Us</div>
            <div className=" px-2">Why Spotloan</div>
            <div className=" px-2">Financial Education</div>
            <div className=" px-2">FAQ</div>
            <div className=" px-2">Careers</div>
            <div className="px-2">Contact Us</div>
          </div>

          <div className="note w-full flex items-center">
            <p className="text-sm font-semibold  px-3 py-4">
              MyQuickLoans are designed to help you deal with emergencies such
              as rent, medical bills, car repairs, and expenses related to your
              job. MyQuickLoans are not intended to solve longer-term credit or
              other financial needs, and alternative forms of credit may be
              better for you, including borrowing from a friend or relative,
              using a credit card cash advance, taking out a personal loan, or
              using a home equity loan or savings. Contact our customer service
              team by email at contact@myquickloan.com or by phone at
              888-681-6811 to discuss if a MyQuickLoans is right for you.
            </p>
          </div>
        </div>
        <div className="footer-copyright w-full flex justify-center py-6">
          MyQuickLoan © 2023 All Rights Reserved
        </div>
      </div>
    </>
  );
}
