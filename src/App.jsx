import About from "./components/About"
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
    </div>
  )
}

export default App