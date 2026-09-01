import { RiUser3Fill } from "@remixicon/react";

const Trainers = () => {

    const trainers = [
    {
        pic: RiUser3Fill ,
        name: "Alex Martinez",
        specialty: "STRENGTH & CONDITIONING",
        experience: "8 YEARS EXPERIENCE",
        description:
        "Certified personal trainer specializing in weight training and athletic performance.",
    },
    {
        pic: RiUser3Fill ,
        name: "Sarah Johnson",
        specialty: "YOGA & FLEXIBILITY",
        experience: "6 YEARS EXPERIENCE",
        description:
        "Expert in yoga, pilates, and holistic wellness approaches.",
    },
    {
        pic: RiUser3Fill ,
        name: "Mike Chen",
        specialty: "HIIT & CARDIO",
        experience: "10 YEARS EXPERIENCE",
        description:
        "High-intensity training expert focused on fat loss and endurance.",
    },
    {
        pic: RiUser3Fill ,
        name: "Emma Williams",
        specialty: "NUTRITION & WELLNESS",
        experience: "5 YEARS EXPERIENCE",
        description:
        "Certified nutritionist and wellness coach for complete body transformation.",
    },
  ];

  return (
    <div className=' bg-[#F8F9FA] px-6 py-20' id='#trainers'>
        <div className='flex flex-col items-center text-center gap-5'>
            <h2 className='text-4xl font-bold'>Meet Our <span className='text-red-500'>Expert Trainers</span></h2>
            <p className='max-w-4xl mx-auto text-gray-500 text-[17px] leading-7'>Our certified trainers are dedicated professionals with years of experience in helping people achieve their fitness goals. Get personalized guidance from the best in the industry.</p>
        </div>
        
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20'>
            {trainers.map((trainer) => {

                const Pic = trainer.pic;

                return (
                    <div key={trainer.name} className='flex flex-col items-center justify-center px-4 py-8 bg-white text-center rounded-2xl border border-gray-100'>
                        <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
                            <Pic size={30} className="text-red-500" />
                        </div>
                        <h4 className='mt-6 font-bold text-[18px]'>{trainer.name}</h4>
                        <h5 className='max-w-[100px] text-[12px] text-red-600 font-bold mt-1'>{trainer.specialty}</h5>
                        <span className='bg-red-100 text-red-600 font-bold text-[8px] rounded-full px-3 py-1 mt-4'>{trainer.experience}</span>
                        <p className='text-[12px] mt-4 max-w-[150px] text-gray-500 leading-4'>{trainer.description}</p>
                    </div>
                );
            })}
        </div>
    </div>
    
  )
}

export default Trainers