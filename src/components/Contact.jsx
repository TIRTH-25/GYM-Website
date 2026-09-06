import React, { useEffect, useRef, useState } from "react";
import {
  RiSendInsFill,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiStarFill,
} from "@remixicon/react";

const Contact = () => {
  const reviews = [
    {
      name: "Rahul Patel",
      rating: 5,
      review:
        "Amazing gym with great trainers and a very positive environment.",
    },
    {
      name: "Priya Shah",
      rating: 5,
      review: "The trainers are supportive and the equipment is really good.",
    },
    {
      name: "Amit Desai",
      rating: 5,
      review: "Best place to stay consistent with fitness. Highly recommended!",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const touchStartX = useRef(null);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextReview();
    } else if (distance < -minSwipeDistance) {
      previousReview();
    }

    touchStartX.current = null;
  };

  return (
    <section id="contact" className="bg-[#F8F9FA] px-5 sm:px-6 py-16 md:py-20">
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
          {/* ================= CONTACT FORM ================= */}
          <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl">
            <h3 className="font-bold text-xl">Send Us a Message</h3>

            <p className="text-gray-500 text-sm mt-2">
              Fill out the form and we'll get back to you shortly.
            </p>

            <form className="mt-8">
              {/* Full Name */}
              <div className="w-full flex flex-col gap-1">
                <label>Full Name *</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition"
                />
              </div>

              {/* Email */}
              <div className="w-full flex flex-col mt-7 gap-1">
                <label>Email Address *</label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition"
                />
              </div>

              {/* Phone */}
              <div className="w-full flex flex-col mt-7 gap-1">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="+91"
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition"
                />
              </div>

              {/* Message */}
              <div className="w-full flex flex-col mt-7 gap-1">
                <label>Message *</label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your fitness goals..."
                  className="border border-gray-200 px-3 py-2.5 rounded-lg outline-none focus:border-red-500 transition resize-none"
                />
              </div>

              {/* Submit */}
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

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col gap-8">
            {/* ================= RATING ================= */}
            <div className="bg-white rounded-2xl p-5 sm:p-8">
              <h3 className="font-bold text-xl">
                What Our <span className="text-red-500">Members Say</span>
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Real experiences from our fitness community.
              </p>

              {/* Review Carousel */}
              <div
                className="overflow-hidden mt-8 w-full"
                style={{ touchAction: "pan-y" }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentReview * 100}%)`,
                  }}
                >
                  {reviews.map((review) => (
                    <div
                      key={review.name}
                      className="w-full min-w-full flex-shrink-0"
                    >
                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, index) => (
                          <RiStarFill
                            key={index}
                            size={18}
                            className="text-red-500"
                          />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="text-gray-600 text-sm sm:text-base leading-6 mt-5">
                        "{review.review}"
                      </p>

                      {/* Member */}
                      <p className="font-bold mt-5">{review.name}</p>

                      <p className="text-gray-400 text-sm mt-1">
                        Soul Fitness Member
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows + Dots */}
              <div className="flex items-center justify-center gap-5 mt-8">
                <button
                  onClick={previousReview}
                  className="
            border
            border-gray-200
            p-2
            rounded-full
            hover:bg-red-500
            hover:text-white
            hover:border-red-500
            active:scale-95
            transition-all
            duration-200
          "
                >
                  <RiArrowLeftLine size={20} />
                </button>

                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentReview === index
                          ? "w-6 bg-red-500"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="
            border
            border-gray-200
            p-2
            rounded-full
            hover:bg-red-500
            hover:text-white
            hover:border-red-500
            active:scale-95
            transition-all
            duration-200
          "
                >
                  <RiArrowRightLine size={20} />
                </button>
              </div>
            </div>

            {/* ================= MAP ================= */}
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
