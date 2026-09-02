import React from "react";
import { RiSendInsFill } from "@remixicon/react";

import { RiPhoneLine, RiMailLine, RiMapPinLine } from "@remixicon/react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: RiPhoneLine,
      title: "Phone",
      value: "08868855925",
    },
    {
      icon: RiMailLine,
      title: "Email",
      value: "info@soulfitness.com",
    },
    {
      icon: RiMapPinLine,
      title: "Address",
      value:
        "1st floor, Nr. Rajyotit Xerox, B/H Bank of India, Hariyavad Rd, Killa Pardi, India 396125",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="mt-5 text-[17px] text-gray-500 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-15 gap-10">
          {/* left-side */}
          <div className="w-full md:w-1/4">
            <h3 className="font-bold text-xl">Contact Information</h3>
            <div className="mt-8 flex flex-col gap-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <div key={info.title} className="flex gap-5">
                    <div className="h-12 w-12 shrink-0 self-start flex items-center justify-center bg-red-100 rounded-2xl text-red-500">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold">{info.title}</h5>
                      <p className="text-gray-400 text-sm break-words">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-black text-white rounded-xl p-5 mt-10 flex flex-col gap-5">
              <h4 className="text-[18px]">Office Hours</h4>
              <div className="flex text-sm justify-between">
                <span className=" text-gray-500">Monday - Saturday:</span>
                <span>5:30AM - 9PM</span>
              </div>
              <div className="flex text-sm justify-between">
                <span className=" text-gray-500">Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          {/* right-side */}
          <div className="w-full md:w-3/4 bg-white p-5 sm:p-8 md:p-10 rounded-2xl">
            <h3 className="font-bold text-xl">Send Us a Message</h3>
            <p className="text-gray-500 text-sm mt-2">
              Fill out the form and we'll get back to you shortly.
            </p>

            <form action="" className="mt-8">
              {/* name & email */}
              <div className="flex flex-col sm:flex-row gap-5">
                {/* name */}
                <div className="w-full sm:w-1/2 flex flex-col gap-1">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="border border-gray-200 px-2 py-2 rounded-lg"
                  />
                </div>
                {/* email */}
                <div className="w-full sm:w-1/2 flex flex-col gap-1">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border border-gray-200 px-2 py-2 rounded-lg"
                  />
                </div>
              </div>
              {/* phone */}
              <div className="w-full flex flex-col mt-8 gap-1">
                <label htmlFor="">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="border border-gray-200 px-2 py-2 rounded-lg"
                />
              </div>
              {/* message */}
              <div className="w-full flex flex-col mt-8 gap-1">
                <label htmlFor="">Message *</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your fitness goals..."
                  className="border border-gray-200 px-2 py-2 rounded-lg"
                />
              </div>
              <button className="flex items-center justify-center w-full mt-8 bg-red-500 py-3 rounded-lg text-white font-bold gap-1">
                Send Message
                <RiSendInsFill size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
