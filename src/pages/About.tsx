import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb } from "lucide-react";
import marianeImg from "@/assets/mariane.png";
import rhaineImg from "@/assets/rhaine.png";
import chazzyImg from "@/assets/chazzy.png";
import dianeImg from "@/assets/diane.png";
import ronnaImg from "@/assets/ronna.png";
import shaninImg from "@/assets/shanin.png";
import aimerckImg from "@/assets/aimerck.png";
import darynImg from "@/assets/daryn.png";
import rheaImg from "@/assets/rhea.png";
import kharelleImg from "@/assets/kharelle.png";
import attarahImg from "@/assets/atarah.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { name: "Mariane Molon", role: "", quote: "Fairness should not just given by it's gender.", image: marianeImg },
    { name: "Rhaine Incillo", role: "", quote: "Equality is not a gift to be given, but a condition to be embraced.", image: rhaineImg },
    { name: "Chazzy Alivio", role: "", quote: "Everyone should know how to treat each other equally.", image: chazzyImg },
    { name: "Diane Diego", role: "", quote: "Women's rights are human rights.", image: dianeImg },
    { name: "Ronna Badilla", role: "", quote: "Fairness is when gender no longer defines worth.", image: ronnaImg },
    { name: "Shanin Capuyan", role: "", quote: "Feminism is the radical nation that women are human beings.", image: shaninImg },
    { name: "Aimerck Remollo", role: "", quote: "Unequal world, unfair future.", image: aimerckImg },
    { name: "Daryn Petalcorin", role: "", quote: "A world where women can thrive is a world where everyone thrives.", image: darynImg },
    { name: "Rhea Sellana", role: "", quote: "True gender equality means equal opportunities, rights, and responsibilities for all.", image: rheaImg },
    { name: "Kharelle Barina", role: "", quote: "Gender equality is not a women's issue, it's a human issue. It affects us all.", image: kharelleImg },
    { name: "Atarah Andilab", role: "", quote: "Like a seed, Empowement grows, women rise, communities thrive", image: attarahImg },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* -------------------- HEADER -------------------- */}
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4">About Us</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Empowering communities through awareness, education, and action
              </p>
            </div>
          </div>
        </div>

        {/* -------------------- VISION & MISSION SECTION -------------------- */}
        <section className="mb-20 animate-fade-up">
          <div className="container mx-auto px-4">
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <Target className="text-accent" size={32} />
                  <h2 className="text-3xl font-bold text-foreground">Vision & Mission</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="text-accent" size={28} />
                      <h3 className="text-2xl font-bold text-accent">Vision</h3>
                    </div>
                    <p className="text-lg leading-relaxed">
                      We envision a world where all people — regardless of gender identity or
                      expression — can live with dignity, freedom, and equal opportunity.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="text-accent" size={28} />
                      <h3 className="text-2xl font-bold text-accent">Mission</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Educate communities and youth about gender equality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Support legislative reforms and access to justice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Amplify marginalized voices and personal stories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Create partnerships with schools, NGOs, and policy makers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* ----------------------------------------------------------------- */}

        {/* -------------------- WHY THIS MATTERS SECTION -------------------- */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 text-center">Why This Matters</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
        </section>
        {/* ----------------------------------------------------------------- */}

        {/* -------------------- MEET THE TEAM SECTION -------------------- */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-4">Meet the Team</h2>
            <p className="text-lg text-dark">
              Passionate advocates working together for change
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-700 hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-accent">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                <p className="text-gray-600 italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </section>
        {/* ----------------------------------------------------------------- */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
