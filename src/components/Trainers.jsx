import { useEffect, useRef, useState } from "react";
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
      description: "Expert in yoga, pilates, and holistic wellness approaches.",
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

  // =========================
  // Automatic Sliding
  // =========================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trainers.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [trainers.length]);

  // =========================
  // Previous Trainer
  // =========================
  const previousTrainer = () => {
    setCurrentIndex((prev) => (prev === 0 ? trainers.length - 1 : prev - 1));
  };

  // =========================
  // Next Trainer
  // =========================
  const nextTrainer = () => {
    setCurrentIndex((prev) => (prev + 1) % trainers.length);
  };

  // =========================
  // Swipe Handling
  // =========================
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextTrainer();
    } else if (distance < -minSwipeDistance) {
      previousTrainer();
    }

    touchStartX.current = null;
  };

  // =========================
  // Trainer Card
  // =========================
  const TrainerCard = ({ trainer }) => {
    const Pic = trainer.pic;

    return (
      <div className="w-full bg-white text-center rounded-2xl border border-gray-100 px-6 py-8">
        {/* Icon */}
        <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center mx-auto">
          <Pic size={30} className="text-red-500" />
        </div>

        {/* Name */}
        <h4 className="mt-6 font-bold text-[18px]">{trainer.name}</h4>

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
    <section id="trainers" className="bg-[#F8F9FA] px-6 py-20">
      {/* =========================
          Heading
      ========================== */}
      <div className="flex flex-col items-center text-center gap-5">
        <h2 className="text-3xl md:text-4xl font-bold">
          Meet Our <span className="text-red-500">Expert Trainers</span>
        </h2>

        <p className="max-w-4xl mx-auto text-gray-500 text-[16px] md:text-[17px] leading-7">
          Our certified trainers are dedicated professionals with years of
          experience in helping people achieve their fitness goals. Get
          personalized guidance from the best in the industry.
        </p>
      </div>

      {/* =========================
          Desktop Cards
      ========================== */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.name} trainer={trainer} />
        ))}
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="md:hidden mt-12">
        {/* Slider Container */}
        <div
          className="overflow-hidden w-full"
          style={{ touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="w-full min-w-full flex-shrink-0 px-1"
              >
                <TrainerCard trainer={trainer} />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-5 mt-8">
          {/* Previous */}
          <button
            onClick={previousTrainer}
            className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <RiArrowLeftLine size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {trainers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-6 bg-red-500" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextTrainer}
            className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <RiArrowRightLine size={18} />
          </button>
        </div>

        {/* Swipe Hint */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Swipe to explore trainers
        </p>
      </div>
    </section>
  );
};

export default Trainers;
