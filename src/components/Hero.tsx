import { useEffect, useState } from "react";
import landingpage from '../assets/landingpage.jpg';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${landingpage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1
          className={`text-5xl md:text-7xl font-black leading-tight mb-6 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Gender Equality for All:
          <br />
          Addressing Pay Gaps and LGBTQ+ Workplace Bias
        </h1>
        <p
          className={`text-2xl md:text-3xl font-bold italic opacity-0 ${
            isVisible ? "animate-fade-in-up animation-delay-600" : ""
          }`}
        >
          "Equal voices, equal opportunities."
        </p>
      </div>
    </section>
  );
};

export default Hero;
