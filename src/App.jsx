import { useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Membership from "./components/Membership";
import Navbar from "./components/Navbar";
import Trainers from "./components/Trainers";

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <div>
      <Navbar />

      <Hero />

      <About />

      <Trainers />

      <Membership setSelectedPlan={setSelectedPlan} />

      <Contact selectedPlan={selectedPlan} />

      <Footer />
    </div>
  );
};

export default App;