import soulFitnessLogo from "../assets/soul-fitness-logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-black w-full h-16 flex items-center justify-between px-6">
      <div className="flex gap-3 items-center">
        <img className="h-12 w-12 object-contain bg-white rounded-full" src={ soulFitnessLogo } alt="Soul Fitness logo" />
        <a href="" className="text-white text-xl font-bold">
          Soul Fitness
        </a>
      </div>
      <div className="flex gap-8 text-white text-sm">
        <a href="#training" className="hover:text-red-500 transition-colors duration-200">Training</a>
        <a href="#membership" className="hover:text-red-500 transition-colors duration-200">Membership</a>
        <a href="#trainers" className="hover:text-red-500 transition-colors duration-200">Trainers</a>
        <a href="#location" className="hover:text-red-500 transition-colors duration-200">Location</a>  
      </div>
      <button className="bg-red-500 text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-red-600 active:scale-95 transition-all duration-200">
        Join Now
      </button>
    </nav>
  );
};

export default Navbar;
