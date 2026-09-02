import About from "./components/About"
import { Contact } from "./components/Contact"
import Hero from "./components/Hero"
import Membership from "./components/Membership"
import Navbar from "./components/Navbar"
import Trainers from "./components/Trainers"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Trainers />
      <Membership />
      <Contact />
    </div>
  )
}

export default App