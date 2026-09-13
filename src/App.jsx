import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Membership from "./components/Membership";
import Navbar from "./components/Navbar";
import Trainers from "./components/Trainers";
import Admin from "./components/Admin";

const Home = () => {
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

const App = () => {
  return (
    <BrowserRouter basename="/GYM-Website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;