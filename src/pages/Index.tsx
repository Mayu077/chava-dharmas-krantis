import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Achievements from "@/components/Achievements";
import BloodDonation from "@/components/BloodDonation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Values />
      <Achievements />
      <BloodDonation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;