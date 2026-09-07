import { useState } from "react";
import Review from "./Review";

import { RiSendInsFill } from "@remixicon/react";

const Contact = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);

    try {
      const response = await fetch("http://localhost:5001/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          selectedPlan: selectedPlan || "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("Lead created:", data);

      setSubmitted(true);

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide success message after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Submit lead error:", error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#F8F9FA] px-5 sm:px-6 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 md:mt-15">
          {/* Contact Form */}
          <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl">
            <h3 className="font-bold text-xl">Send Us a Message</h3>

            <p className="text-gray-500 text-sm mt-2">
              Fill out the form and we'll get back to you shortly.
            </p>

            {/* Selected Plan */}
            {selectedPlan && (
              <div className="mt-5 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                <p className="text-sm text-gray-600">
                  Interested in:
                  <span className="font-bold text-red-500 ml-1">
                    {selectedPlan} Plan
                  </span>
                </p>
              </div>
            )}

            {/* Success Message */}
            {submitted && (
              <div className="mt-5 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                <p className="text-sm text-green-700 font-medium">
                  ✓ Thank you! We'll contact you soon.
                </p>
              </div>
            )}

            {/* Form */}
            <form className="mt-8" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="name">Full Name *</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition"
                />
              </div>

              {/* Email */}
              <div className="w-full flex flex-col mt-7 gap-1">
                <label htmlFor="email">Email Address *</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition"
                />
              </div>

              {/* Phone */}
              <div className="w-full flex flex-col mt-7 gap-1">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition"
                />
              </div>

              {/* Message */}
              <div className="w-full flex flex-col mt-7 gap-1">
                <label htmlFor="message">Message *</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  required
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full mt-7 bg-red-500 py-3 rounded-lg text-white font-bold gap-1 hover:bg-red-600 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <RiSendInsFill size={16} />}
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-8">
            <Review />

            {/* Location */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="p-5 sm:p-8 pb-5">
                <h3 className="font-bold text-xl">
                  Find <span className="text-red-500">Us</span>
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Visit Soul Fitness at our location.
                </p>
              </div>

              <div className="w-full h-60 sm:h-64">
                <iframe
                  title="Soul Fitness Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8551426889435!2d72.9447041754764!3d20.512163681011092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c50005d21601%3A0x6feed5843f3ba2b6!2sSOUL%20FITNESS!5e0!3m2!1sen!2sin!4v1788683137217!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;