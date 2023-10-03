import { useEffect } from "react";
import Hero from "../components/Hero";
import Levels from "../components/Levels";
import About from "./About";
import Team from "../components/Team";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Levels />
      <About />
      <Team />
      <Testimonials />
    </div>
  );
}

export default Home;
