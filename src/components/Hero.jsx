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
    <section className="bg-[#131313] min-h-[748px] flex flex-col items-center justify-center gap-6">

      <img
        src={ soulFitnessLogo }
        alt="Soul Fitness"
        className="h-20 w-20 bg-white rounded-full border-2 border-red-500 object-contain"
      />

      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold">
        Soul Fitness
      </h1>

      <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
        Transform Your Body,
        <span className="text-red-500"> Transform Your Life</span>
      </h2>

      <p className="text-gray-400 max-w-[580px] text-base leading-7 text-center">
        Join our community of dedicated fitness enthusiasts and embark on a
        transformative journey. With state-of-the-art equipment, expert
        trainers, and personalized programs, your fitness goals are within
        reach.
      </p>

      <div className="flex gap-5">

        <button className="bg-red-500 rounded-md px-7 py-3 flex items-center text-white gap-1 hover:bg-red-600 transition-all duration-200 active:scale-95">
          Join Now
          <RiArrowRightLine />
        </button>

        <button className="rounded-md px-7 py-3 text-white border border-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95">
          Learn More
        </button>

      </div>

      <div className="flex gap-8 mt-8 items-center justify-center">

        {stats.map((stat) => (
          <div className="flex flex-col items-center justify-center text-center w-56 h-28 bg-[#1F1F1F] border border-[#333333] rounded-xl" key={stat.label}>

            <h3 className="text-red-500 text-3xl font-bold">
              {stat.number}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              {stat.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Hero;