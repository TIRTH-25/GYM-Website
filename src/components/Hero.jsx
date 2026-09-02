import { RiArrowRightLine } from "@remixicon/react";
import soulFitnessLogo from "../assets/soul-fitness-logo.jpg";

const Hero = () => {
  const stats = [
    {
      number: "200+",
      label: "Active Members",
    },
    {
      number: "9+",
      label: "Expert Trainers",
    },
    {
      number: "5+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="bg-[#131313] min-h-[748px] px-5 py-16 md:px-8 flex flex-col items-center justify-center gap-6">

      {/* Logo */}
      <img
        src={soulFitnessLogo}
        alt="Soul Fitness"
        className="h-20 w-20 bg-white rounded-full border-2 border-red-500 object-contain"
      />

      {/* Main Title */}
      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center">
        Soul Fitness
      </h1>

      {/* Heading */}
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-5xl leading-tight">
        Transform Your Body,
        <span className="text-red-500"> Transform Your Life</span>
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-[580px] text-sm sm:text-base leading-7 text-center">
        Join our community of dedicated fitness enthusiasts and embark on a
        transformative journey. With state-of-the-art equipment, expert
        trainers, and personalized programs, your fitness goals are within
        reach.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">

        <button className="bg-red-500 rounded-md px-7 py-3 flex items-center justify-center text-white gap-1 hover:bg-red-600 transition-all duration-200 active:scale-95">
          Join Now
          <RiArrowRightLine size={18} />
        </button>

        <button className="rounded-md px-7 py-3 text-white border border-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95">
          Learn More
        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 md:gap-8 mt-6 w-full max-w-3xl">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center w-full h-24 sm:h-28 bg-[#1F1F1F] border border-[#333333] rounded-xl"
          >
            <h3 className="text-red-500 text-2xl sm:text-3xl font-bold">
              {stat.number}
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Hero;