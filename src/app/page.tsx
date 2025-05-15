import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero.jsx';
import Service from '../components/sections/Service';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Solutions from '../components/sections/Solutions';
import Projects from '../components/sections/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <WhyChooseUs />
      <Solutions />
      <Projects />
    </>
  );
}