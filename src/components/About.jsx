import { useEffect, useState } from "react";
import {
  RiTargetLine,
  RiUserStarLine,
  RiBuildingLine,
  RiHeartLine,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "@remixicon/react";

const About = () => {
  const features = [
    {
      icon: RiTargetLine,
      title: "Goal-Oriented Training",
      description:
        "Personalized programs designed to help you achieve your fitness goals effectively.",
    },
    {
      icon: RiUserStarLine,
      title: "Expert Trainers",
      description:
        "Work with certified professionals who are passionate about your fitness journey.",
    },
    {
      icon: RiBuildingLine,
      title: "State-of-the-Art Facilities",
      description:
        "Train with the latest equipment in a clean, modern, and motivating environment.",
    },
    {
      icon: RiHeartLine,
      title: "Supportive Community",
      description:
        "Join a welcoming community that motivates and supports you throughout your journey.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % features.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section id="about" className="bg-white py-20 px-6">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-red-500">Soul Fitness</span>
        </h2>

        <p className="max-w-[740px] text-gray-500 leading-7">
          Welcome to Soul Fitness, where transformation begins. Our mission is
          to help every member achieve their fitness goals through expert
          guidance, cutting-edge facilities, and a friendly atmosphere that
          keeps you motivated and inspired.
        </p>
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="md:hidden mt-14">

        {/* Slider Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="w-full min-w-full flex-shrink-0 flex flex-col items-center text-center px-6"
                >
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100">
                    <Icon size={30} className="text-red-500" />
                  </div>

                  <h4 className="font-bold text-[18px] mt-5">
                    {feature.title}
                  </h4>

                  <p className="text-sm text-gray-500 max-w-[280px] mt-3 leading-6">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            onClick={previousSlide}
            className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <RiArrowLeftLine size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-6 bg-red-500"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <RiArrowRightLine size={18} />
          </button>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid max-w-6xl mx-auto mt-14 grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="text-center flex flex-col items-center"
            >
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-red-100">
                <Icon size={30} className="text-red-500" />
              </div>

              <h4 className="font-bold text-[18px] mt-5">
                {feature.title}
              </h4>

              <p className="text-sm text-center text-gray-500 max-w-[200px] mt-2 leading-6">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mission */}
      <div className="bg-black text-center text-white flex flex-col gap-5 py-10 rounded-2xl mt-18 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold">Our Mission</h3>

        <p className="text-[17px] md:text-[18px] italic max-w-[1000px] mx-auto text-gray-400 leading-7 px-6">
          To empower individuals to achieve their full potential through
          comprehensive fitness programs, exceptional training, and unwavering
          support. We believe fitness is not just about physical
          transformation
          <span className="block mt-3">
            — it's about building confidence, discipline, and a healthier
            lifestyle.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;