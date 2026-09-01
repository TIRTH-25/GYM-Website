import {
  RiTargetLine,
  RiUserStarLine,
  RiBuildingLine,
  RiHeartLine,
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

  return (
    <section className='bg-white py-20 px-6'>
        <div className='flex flex-col justify-center items-center gap-8'>
            <h2 className='text-4xl font-bold'>About <span className='text-red-500'>Soul Fitness</span></h2>
            <p className='text-center max-w-[740px] text-gray-500'>Welcome to Soul Fitness, where transformation begins. Our mission is to help every member achieve their fitness goals through expert guidance, cutting-edge facilities, and a friendly atmosphere that keeps you motivated and inspired.</p>
        </div>
        <div className='max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature) => {
                const Icon = feature.icon;

                return (
                    <div key={feature.title} className='text-center flex flex-col items-center'>
                        <div className='h-14 w-14 flex items-center rounded-full bg-red-200 justify-center'><Icon size={30} className='text-red-500'/></div>
                        <h4 className='font-bold text-[18px] mt-5'>{feature.title}</h4>
                        <p className='text-sm text-center text-gray-500 max-w-[200px] mt-2'>{feature.description}</p>
                    </div>
                )
            })}
        </div>
        <div className='bg-black text-center text-white flex flex-col gap-5 py-10 rounded-2xl mt-18 max-w-7xl mx-auto'>
            <h3 className='text-3xl'>Our Mission</h3>
            <p className='text-[18px] italic max-w-[1000px] mx-auto text-gray-400 leading-7 px-6'>To empower individuals to achieve their full potential through comprehensive fitness programs, exceptional training, and unwavering support. We believe fitness is not just about physical transformation <span className="block mt-3">— it's about building confidence, discipline, and a healthier lifestyle.</span>
            </p>
        </div>

    </section>
  )
}

export default About