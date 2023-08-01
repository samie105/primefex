"use client";
import { useState } from "react";

import {
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="lg:text-3xl md:text-xl text-xl font-bold mb-4">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block font-semibold mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">
                E-mail Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-1">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 flex-row-reverse">
          <div className="bg-gray-100 rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500" />
              <a href="tel:8886816811" className="text-blue-500 px-3">
                (888) 681-6811
              </a>
            </div>
            <div className="flex items-center mb-2 py-4">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-500" />
              <p className="px-3">
                Hours of Operation:
                <br />
                Monday - Friday: 7:00 a.m. - 8:00 p.m. CT
                <br />
                Saturday: 9:00 a.m. - 6:00 p.m. CT
              </p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-blue-500"
              />
              <a
                href="mailto:loans@spotloan.com"
                className="text-blue-500 px-3"
              >
                loans@Primefexloans.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
