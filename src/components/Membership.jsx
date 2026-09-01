import { RiCheckLine } from "@remixicon/react";

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      subtitle: "Perfect for beginners",
      price: "1000",
      duration: "/month",
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
      duration: "/3 month",
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
      duration: "/year",
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
    <div className=" bg-[#F8F9FA] px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Choose Your <span className="text-red-500">Membership Plan</span>
        </h2>
        <p className="mt-6 text-gray-500 text-[17px]">
          Select the perfect plan that fits your fitness journey. All plans
          include access to our world-class facilities and supportive community.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 text-center mt-15 gap-5 border border-gray-100">
        {plans.map((plan) => (
            <div className="px-3 py-3 bg-white">
                <h3 className="font-bold text-2xl">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.subtitle}</p>
                <div className="flex justify-center items-end gap-1 mt-5">
                    <span className="text-xl text-red-500 font-bold">₹</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">{plan.duration}</span>
                    <div>
                        {plan.features.map((feature) => {
                            <div>
                                <RiCheckLine size={20}className="text-red-500 shrink-0"/>
                                <p className="text-gray-600">{feature}</p>
                            </div>
                        })}
                    </div>
                </div>
                
            </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
