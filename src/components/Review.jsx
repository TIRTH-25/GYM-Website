import { useEffect, useRef, useState } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiStarFill,
} from "@remixicon/react";

const Reviews = () => {
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
      review:
        "The trainers are supportive and the equipment is really good.",
    },
    {
      name: "Amit Desai",
      rating: 5,
      review:
        "Best place to stay consistent with fitness. Highly recommended!",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const touchStartX = useRef(null);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentReview(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Swipe
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
    <div className="bg-white rounded-2xl p-5 sm:p-8">
      {/* Heading */}
      <h3 className="font-bold text-xl">
        What Our <span className="text-red-500">Members Say</span>
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        Real experiences from our fitness community.
      </p>

      {/* Review Slider */}
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

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 mt-8">
        {/* Previous */}
        <button
          onClick={previousReview}
          className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95 transition-all duration-200"
          aria-label="Previous review"
        >
          <RiArrowLeftLine size={18} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              onClick={() => setCurrentReview(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentReview === index
                  ? "w-6 bg-red-500"
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={nextReview}
          className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95 transition-all duration-200"
          aria-label="Next review"
        >
          <RiArrowRightLine size={18} />
        </button>
      </div>
    </div>
  );
};

export default Reviews;