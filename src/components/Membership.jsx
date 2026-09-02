import { useEffect, useState } from "react";
import {
  RiCheckLine,
  RiStarFill,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "@remixicon/react";

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      subtitle: "Perfect for beginners",
      price: "1000",
      duration: "/ month",
      features: [
        "Access to gym equipment",
        "Trainer guidance",
        "Basic fitness assessment",
      ],
    },
    {
      name: "Standard",
      subtitle: "Perfect for enthusiasts",
      price: "4,500",
      duration: "/ 3 month",
      popular: true,
      features: [
        "All Basic features",
        "Personalized workout plan",
        "Monthly body composition analysis",
        "Nutritional guidance",
      ],
    },
    {
      name: "Premium",
      subtitle: "Perfect for serious athletes",
      price: "8,000",
      duration: "/ year",
      features: [
        "All Standard features",
        "Unlimited personal training sessions",
        "Customized workout plans",
        "Complete transformation support",
        "Best value membership",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic sliding
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % plans.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, plans.length]);

  // Previous plan
  const previousPlan = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? plans.length - 1 : prev - 1
    );
  };

  // Next plan
  const nextPlan = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  // Swipe
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
      nextPlan();
    }

    if (distance < -minSwipeDistance) {
      previousPlan();
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsPaused(false);
  };

  // Reusable card
  const MembershipCard = ({ plan }) => {
    return (
      <div
        className={`p-6 sm:p-8 bg-white min-h-[500px] relative flex rounded-2xl flex-col border ${
          plan.popular
            ? "border-2 border-red-500"
            : "border-gray-100"
        }`}
      >
        {/* Popular Badge */}
        {plan.popular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-red-500 text-white text-[10px] sm:text-xs font-bold px-4 sm:px-5 py-1.5 rounded flex items-center gap-1">
            <RiStarFill size={12} />
            MOST POPULAR
          </span>
        )}

        {/* Plan Name */}
        <h3 className="font-bold text-2xl text-center">
          {plan.name}
        </h3>

        <p className="text-gray-500 text-sm text-center">
          {plan.subtitle}
        </p>

        {/* Price */}
        <div className="flex justify-center items-end gap-1 mt-5">
          <span className="text-xl text-red-500 font-bold">
            ₹
          </span>

          <span className="text-4xl sm:text-5xl font-bold">
            {plan.price}
          </span>

          <span className="text-gray-500 text-sm sm:text-base">
            {plan.duration}
          </span>
        </div>

        {/* Features */}
        <div className="mt-8 flex-1">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 mb-4 text-left"
            >
              <RiCheckLine
                size={20}
                className="bg-red-500 rounded-full text-white h-4 w-4 shrink-0 mt-0.5"
              />

              <p className="text-gray-600 text-sm">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className={`w-full py-3 rounded-lg font-bold mt-6 active:scale-95 transition-all duration-200 ${
            plan.popular
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Choose {plan.name}
        </button>
      </div>
    );
  };

  return (
    <section
      id="membership"
      className="bg-[rgba(241,238,238,0.74)] px-5 sm:px-6 py-16 md:py-20"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Choose Your{" "}
          <span className="text-red-500">
            Membership Plan
          </span>
        </h2>

        <p className="mt-5 sm:mt-6 text-gray-500 text-sm sm:text-[17px] leading-6 sm:leading-7">
          Select the perfect plan that fits your fitness journey.
          All plans include access to our world-class facilities
          and supportive community.
        </p>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-3 mt-15 gap-8">
        {plans.map((plan) => (
          <MembershipCard
            key={plan.name}
            plan={plan}
          />
        ))}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden mt-12">

        <div
          className="relative w-full max-w-sm mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Card */}
          <MembershipCard
            plan={plans[currentIndex]}
          />

          {/* Previous */}
          <button
            onClick={previousPlan}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 bg-black text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition"
            aria-label="Previous membership plan"
          >
            <RiArrowLeftLine size={18} />
          </button>

          {/* Next */}
          <button
            onClick={nextPlan}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 bg-black text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition"
            aria-label="Next membership plan"
          >
            <RiArrowRightLine size={18} />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">

          {plans.map((plan, index) => (
            <button
              key={plan.name}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 bg-red-500"
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to ${plan.name} plan`}
            />
          ))}

        </div>

        {/* Swipe hint */}
        <p className="text-center text-xs text-gray-400 mt-4">
          Swipe to explore plans
        </p>

      </div>

      {/* Bottom Note */}
      <p className="text-center mt-8 md:mt-10 italic text-gray-500 text-xs sm:text-sm">
        All Plans Include a{" "}
        <span className="text-red-500 font-bold">
          7-day free trial
        </span>{" "}
        and can be cancelled anytime.
      </p>
    </section>
  );
};

export default Membership;