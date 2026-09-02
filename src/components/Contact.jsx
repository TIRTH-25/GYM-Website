import React from "react";
import { RiSendInsFill } from "@remixicon/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#F8F9FA] px-5 sm:px-6 py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In <span className="text-red-500">Touch</span>
          </h2>

          <p className="mt-5 text-sm sm:text-[17px] text-gray-500 max-w-3xl mx-auto leading-6 sm:leading-7">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12 md:mt-15 bg-white p-5 sm:p-8 md:p-10 rounded-2xl">

          <h3 className="font-bold text-xl">
            Send Us a Message
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Fill out the form and we'll get back to you shortly.
          </p>

          <form className="mt-8">

            {/* Name & Email */}
            <div className="flex flex-col sm:flex-row gap-5">

              {/* Name */}
              <div className="w-full sm:w-1/2 flex flex-col gap-1">

                <label>
                  Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition"
                />

              </div>

              {/* Email */}
              <div className="w-full sm:w-1/2 flex flex-col gap-1">

                <label>
                  Email Address *
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition"
                />

              </div>

            </div>


            {/* Phone */}
            <div className="w-full flex flex-col mt-7 gap-1">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91"
                className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition"
              />

            </div>


            {/* Message */}
            <div className="w-full flex flex-col mt-7 gap-1">

              <label>
                Message *
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your fitness goals..."
                className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition resize-none"
              />

            </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="
                flex
                items-center
                justify-center
                w-full
                mt-7
                bg-red-500
                py-3
                rounded-lg
                text-white
                font-bold
                gap-1
                hover:bg-red-600
                active:scale-[0.98]
                transition-all
                duration-200
              "
            >
              Send Message
              <RiSendInsFill size={16} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;