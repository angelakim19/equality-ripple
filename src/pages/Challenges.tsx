import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const Challenges = () => {
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
        <section ref={sectionRef} className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6">Challenges We Face</h1>
              <p className="text-xl text-dark mb-16 max-w-3xl">
                Understanding the barriers to gender equality is the first step toward dismantling them.
              </p>
              </div>
              

              {/* Cultural Norms */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-accent mb-6">Cultural Norms That Hold Us Back</h2>
                <div className="space-y-8">
                  <div className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-4">Traditional Gender Roles</h3>
                    <p className="text-dark leading-relaxed mb-4">
                      Society often expects women to be caregivers and men to be breadwinners. These rigid expectations 
                      limit career choices, create unfair workplace dynamics, and penalize those who don't conform. Women 
                      are often seen as less committed to their careers if they have families, while men who take paternity 
                      leave face stigma.
                    </p>
                    <p className="text-dark leading-relaxed italic">
                      "I was passed over for a promotion because my boss assumed I'd want to focus on my family soon." 
                      — Common workplace experience
                    </p>
                  </div>

                  <div className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-4">Masculinity and Femininity Standards</h3>
                    <p className="text-dark leading-relaxed mb-4">
                      Narrow definitions of masculinity and femininity harm everyone. Men are discouraged from showing 
                      emotion or vulnerability, while women are expected to be nurturing and accommodating. These standards 
                      are particularly harmful to LGBTQ+ individuals who challenge binary gender norms.
                    </p>
                  </div>

                  <div className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-4">Heteronormative Workplace Culture</h3>
                    <p className="text-dark leading-relaxed">
                      Many workplaces assume everyone is heterosexual and cisgender. This creates invisible barriers for 
                      LGBTQ+ employees—from exclusion in casual conversations about partners and families to lack of 
                      inclusive benefits and policies. The constant decision of whether to be "out" at work adds mental 
                      and emotional burden.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stereotypes */}
              <div>
                <h2 className="text-4xl font-bold text-accent mb-6">Harmful Stereotypes</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-4">Gender-Based Stereotypes</h3>
                    <ul className="space-y-3 text-dark">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>"Women are too emotional for leadership positions"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>"Men are naturally better at math and science"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>"Women don't negotiate as well as men"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>"Motherhood makes women less productive employees"</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-4">LGBTQ+ Stereotypes</h3>
                    <ul className="space-y-3 text-dark">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>"LGBTQ+ individuals are 'too different' to fit company culture"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>"Trans employees will make others uncomfortable"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>"Being openly gay is 'unprofessional'"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>"LGBTQ+ identities are just a 'phase' or 'lifestyle choice'"</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-accent/10 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-accent mb-4">The Real Impact</h3>
                  <p className="text-dark leading-relaxed">
                    These stereotypes aren't harmless—they lead to real discrimination in hiring, promotions, and pay. 
                    Studies show that identical resumes receive different responses based on perceived gender. LGBTQ+ 
                    employees report higher rates of harassment, microaggressions, and being passed over for advancement. 
                    Breaking these stereotypes requires active effort from everyone, not just those affected by them.
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

export default Challenges;
