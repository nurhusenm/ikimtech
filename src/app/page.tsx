import Hero from '../components/sections/Hero.jsx';
import Service from '../components/sections/Service';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Solutions from '../components/sections/Solutions';
import Projects from '../components/sections/Projects';
import TeamSection from '../components/sections/TeamSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer'
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <WhyChooseUs />
      <Solutions />
      <Projects />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}