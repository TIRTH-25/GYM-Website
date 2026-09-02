import { useEffect, useState } from "react";
import {
  RiUser3Fill,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "@remixicon/react";

const Trainers = () => {
  const trainers = [
    {
      pic: RiUser3Fill,
      name: "Alex Martinez",
      specialty: "STRENGTH & CONDITIONING",
      experience: "8 YEARS EXPERIENCE",
      description:
        "Certified personal trainer specializing in weight training and athletic performance.",
    },
    {
      pic: RiUser3Fill,
      name: "Sarah Johnson",
      specialty: "YOGA & FLEXIBILITY",
      experience: "6 YEARS EXPERIENCE",
      description:
        "Expert in yoga, pilates, and holistic wellness approaches.",
    },
    {
      pic: RiUser3Fill,
      name: "Mike Chen",
      specialty: "HIIT & CARDIO",
      experience: "10 YEARS EXPERIENCE",
      description:
        "High-intensity training expert focused on fat loss and endurance.",
    },
    {
      pic: RiUser3Fill,
      name: "Emma Williams",
      specialty: "NUTRITION & WELLNESS",
      experience: "5 YEARS EXPERIENCE",
      description:
        "Certified nutritionist and wellness coach for complete body transformation.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic sliding
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trainers.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, trainers.length]);

  // Previous card
  const previousTrainer = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? trainers.length - 1 : prev - 1
    );
  };

  // Next card
  const nextTrainer = () => {
    setCurrentIndex((prev) => (prev + 1) % trainers.length);
  };

  // Swipe handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextTrainer();
    }

    if (distance < -minSwipeDistance) {
      previousTrainer();
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsPaused(false);
  };

  const TrainerCard = ({ trainer }) => {
    const Pic = trainer.pic;

    return (
      <div className="w-full bg-white text-center rounded-2xl border border-gray-100 px-6 py-8">

        {/* Icon */}
        <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center mx-auto">
          <Pic size={30} className="text-red-500" />
        </div>

        {/* Name */}
        <h4 className="mt-6 font-bold text-[18px]">
          {trainer.name}
        </h4>

        {/* Specialty */}
        <h5 className="max-w-[150px] mx-auto text-[12px] text-red-600 font-bold mt-1">
          {trainer.specialty}
        </h5>

        {/* Experience */}
        <span className="inline-block bg-red-100 text-red-600 font-bold text-[8px] rounded-full px-3 py-1 mt-4">
          {trainer.experience}
        </span>

        {/* Description */}
        <p className="text-[12px] mt-4 max-w-[250px] mx-auto text-gray-500 leading-5">
          {trainer.description}
        </p>
      </div>
    );
  };

  return (
    <section
      id="trainers"
      className="bg-[#F8F9FA] px-6 py-20"
    >

      {/* Heading */}
      <div className="flex flex-col items-center text-center gap-5">

        <h2 className="text-3xl md:text-4xl font-bold">
          Meet Our{" "}
          <span className="text-red-500">
            Expert Trainers
          </span>
        </h2>

        <p className="max-w-4xl mx-auto text-gray-500 text-[16px] md:text-[17px] leading-7">
          Our certified trainers are dedicated professionals with years of
          experience in helping people achieve their fitness goals. Get
          personalized guidance from the best in the industry.
        </p>

      </div>

      {/* Desktop Cards */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 lg:grid-cols-4 gap-5 mt-20">

        {trainers.map((trainer) => (
          <TrainerCard
            key={trainer.name}
            trainer={trainer}
          />
        ))}

      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden mt-12">

        <div
          className="relative w-full max-w-sm mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Card */}
          <TrainerCard
            trainer={trainers[currentIndex]}
          />

          {/* Previous Button */}
          <button
            onClick={previousTrainer}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 bg-black text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition"
            aria-label="Previous trainer"
          >
            <RiArrowLeftLine size={18} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextTrainer}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 bg-black text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition"
            aria-label="Next trainer"
          >
            <RiArrowRightLine size={18} />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">

          {trainers.map((trainer, index) => (
            <button
              key={trainer.name}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 bg-red-500"
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to ${trainer.name}`}
            />
          ))}

        </div>

        {/* Swipe hint */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Swipe to explore trainers
        </p>

      </div>

    </section>
  );
};

export default Trainers;