import { RiCheckLine, RiStarFill } from "@remixicon/react";

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

  return (
    <div className=" bg-[rgba(241,238,238,0.74)] px-6 py-20 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Choose Your <span className="text-red-500">Membership Plan</span>
        </h2>
        <p className="mt-6 text-gray-500 text-[17px]">
          Select the perfect plan that fits your fitness journey. All plans
          include access to our world-class facilities and supportive community.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 text-center mt-15 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-8 bg-white min-h-[500px] relative flex rounded-2xl flex-col border ${plan.popular ? "border-3 border-red-500" : "border-gray-100"}`}
          >
            {plan.popular && (
              <span className="absolute -top-0.5 left-1/2 -translate-1/2 bg-red-500 text-white text-xs font-bold px-5 py-1 rounded flex items-center gap-1">
                <RiStarFill size={12} /> MOST POPULAR
              </span>
            )}

            <h3 className="font-bold text-2xl">{plan.name}</h3>
            <p className="text-gray-500 text-sm">{plan.subtitle}</p>
            <div className="flex justify-center items-end gap-1 mt-5">
              <span className="text-xl text-red-500 font-bold">₹</span>
              <span className="text-5xl font-bold">{plan.price}</span>
              <span className="text-gray-500">{plan.duration}</span>
            </div>
            <div className="mt-8 flex-1 ">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 mb-4 text-left"
                >
                  <RiCheckLine
                    size={20}
                    className="bg-red-500 rounded-full text-white h-4 w-4 shrink-0"
                  />
                  <p className="text-gray-600 text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <button
              className={`w-full py-3 rounded-lg font-bold mt-6 active:scale-95 transition-all duration-200 ${
                plan.popular ? "bg-red-500 text-white" : "bg-black text-white "
              }`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
      <p className="text-center mt-10 italic text-gray-500 text-sm ">
        All Plans Include a{" "}
        <span className="text-red-500 font-bold">7-day free trial</span> and can
        be cancelled anytime.
      </p>
    </div>
  );
};

export default Membership;
