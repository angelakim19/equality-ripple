import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Vision Section */}
        <section ref={sectionRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-accent mb-8">Our Vision</h1>
              <p className="text-xl text-dark leading-relaxed max-w-4xl mb-16">
                A world where everyone, regardless of gender identity or sexual orientation, has equal access to opportunities, 
                fair treatment in the workplace, and the freedom to live authentically without fear of discrimination or bias.
              </p>

              {/* Mission */}
              <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8">Our Mission</h2>
              <p className="text-xl text-dark leading-relaxed max-w-4xl mb-16">
                To raise awareness about gender equality issues, amplify the voices of marginalized communities, educate on 
                workplace rights and policies, and inspire action towards creating inclusive environments where pay equity 
                and equal treatment are the norm, not the exception.
              </p>

              {/* Importance */}
              <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8">Why This Matters</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                <div className="bg-light p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-accent mb-4">Economic Justice</h3>
                  <p className="text-dark leading-relaxed">
                    The gender pay gap costs women trillions globally. LGBTQ+ individuals face higher rates of workplace 
                    discrimination, affecting their economic security and career advancement. Equal pay isn't just fair—it's 
                    essential for economic growth and stability.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-accent mb-4">Human Rights</h3>
                  <p className="text-dark leading-relaxed">
                    Everyone deserves dignity, respect, and equal treatment. Gender equality is a fundamental human right 
                    enshrined in international law. When we fight for workplace equality, we're fighting for basic human dignity.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-accent mb-4">Social Progress</h3>
                  <p className="text-dark leading-relaxed">
                    Societies that embrace gender equality are healthier, more innovative, and more prosperous. Diverse 
                    workplaces make better decisions and drive innovation. Equality benefits everyone, not just those directly 
                    affected by discrimination.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-accent mb-4">Breaking Barriers</h3>
                  <p className="text-dark leading-relaxed">
                    Cultural norms and stereotypes have limited potential for generations. By challenging these barriers and 
                    creating inclusive workplaces, we unlock the full potential of all people, regardless of gender or identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
