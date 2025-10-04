import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const Stories = () => {
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
                <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6">Real Stories, Real Impact</h1>
                <p className="text-xl text-dark mb-16 max-w-3xl">
                  Hear from LGBTQ+ individuals who have faced workplace challenges and fought for equality.
                </p>
              </div>
              
             
              {/* YouTube Stories Section */}             
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-accent mb-8">Video Stories</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Video 1 */}
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden mb-4">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/shmihCkNfBU"
                        title="Women's Rights in the Duterte Era"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Analysis of Women's Rights</h3>
                    <p className="text-dark">An analysis of the state of women's rights in the Philippines during the Duterte administration.</p>
                  </div>

                  {/* Video 2 */}
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden mb-4">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/Md15-E4qeDU"
                        title="Trans Workplace Stories"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Trans Professionals Speak Out</h3>
                    <p className="text-dark">Stories of resilience and the fight for workplace equality from transgender individuals.</p>
                  </div>
                </div>
              </div>

              {/* Blog & Articles */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-accent mb-8">Blog & Articles</h2>
                <div className="space-y-6">
                  
                  <article className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-3">
                      <a 
                        href="https://blogs.worldbank.org/eastasiapacific/overcoming-barriers-womens-work-philippines" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                      >
                        Overcoming Barriers to Women's Work in the Philippines – World Bank Blog
                      </a>
                    </h3>
                    <p className="text-dark leading-relaxed mb-4">
                      Focuses on challenges Filipino women face in the labor market, including societal norms, pay gaps, and opportunities for inclusion.
                    </p>
                    <p className="text-accent italic font-semibold">
                      "Filipino women are underrepresented in leadership despite being the majority in the workforce."
                    </p>
                  </article>

                  <article className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-3">
                      <a 
                        href="https://www.linkedin.com/pulse/better-werk-queer-inclusivity-philippine-workplaces" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                      >
                        Better Werk! Queer Inclusivity in Philippine Workplaces – LinkedIn
                      </a>
                    </h3>
                    <p className="text-dark leading-relaxed mb-4">
                      Explores the state of LGBTQIA+ inclusivity in Philippine workplaces, highlighting discrimination issues and steps toward equality.
                    </p>
                    <p className="text-accent italic font-semibold">
                      "Creating safe and inclusive workspaces benefits everyone, not just LGBTQ+ employees."
                    </p>
                  </article>

                  <article className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-3">
                      <a 
                        href="https://www.example.com/transition-workplace-jamie" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                      >
                        Transition in the Workplace: Jamie's Experience
                      </a>
                    </h3>
                    <p className="text-dark leading-relaxed mb-4">
                      When Jamie transitioned while working at a tech company, they faced questions, misgendering, and bathroom access issues. With HR support and education, their workplace became a model for trans-inclusive policies.
                    </p>
                    <p className="text-accent italic font-semibold">
                      "Visibility matters. Every time I show up as myself, I'm making it easier for the next person."
                    </p>
                  </article>

                </div>
              </div>


              {/* Events and News */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-accent mb-8">Events & News</h2>
                <div className="grid md:grid-cols-2 gap-8">

                  {/* Pride Conference */}
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <span className="text-accent font-bold text-sm">UPCOMING EVENT</span>
                    <h3 className="text-2xl font-bold text-dark mb-3 mt-2">Pride at Work Conference 2025</h3>
                    <p className="text-dark mb-2">A national conference addressing LGBTQ+ workplace equality and inclusion strategies.</p>
                    <p className="text-dark text-sm italic">June 15-17, 2025 | Virtual & In-Person</p>
                    <a 
                      href="https://www.example.com/pride-at-work-2025" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent hover:text-accent/80 font-semibold text-sm"
                    >
                      Learn More
                    </a>
                  </div>

                  {/* PCW Gender Budgeting Awards */}
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <span className="text-accent font-bold text-sm">RECENT NEWS</span>
                    <h3 className="text-2xl font-bold text-dark mb-3 mt-2">Gender Budgeting Awards 2025</h3>
                    <p className="text-dark mb-2">
                      In September 2025, the Philippine Commission on Women (PCW) recognized 123 government agencies as "Top Performers" for their 2024 Gender and Development (GAD) Budget performance.
                    </p>
                    <a 
                      href="https://pcw.gov.ph/gad-budget-awards-2025" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent hover:text-accent/80 font-semibold text-sm"
                    >
                      Read More
                    </a>
                  </div>

                  {/* 18-Day VAW Campaign */}
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <span className="text-accent font-bold text-sm">ANNUAL CAMPAIGN</span>
                    <h3 className="text-2xl font-bold text-dark mb-3 mt-2">18-Day Campaign to End Violence Against Women</h3>
                    <p className="text-dark mb-2">
                      Led by PCW and IACVAWC, the campaign continues with the theme "UNITEd for a VAW-free Philippines" (2022-2027).
                    </p>
                    <a 
                      href="https://pcw.gov.ph/18-day-vaw-campaign" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent hover:text-accent/80 font-semibold text-sm"
                    >
                      Campaign Details
                    </a>
                  </div>

                  {/* Community Dialogue on Gender Equality */}
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <span className="text-accent font-bold text-sm">COMMUNITY EVENT</span>
                    <h3 className="text-2xl font-bold text-dark mb-3 mt-2">National Dialogue on Gender Equality</h3>
                    <p className="text-dark mb-2">
                      A series of virtual discussions organized by NGOs and government agencies to promote awareness of gender equality policies and LGBTQ+ inclusion in workplaces.
                    </p>
                    <a 
                      href="https://pcw.gov.ph/national-dialogue-gender-equality" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent hover:text-accent/80 font-semibold text-sm"
                    >
                      Join the Dialogue
                    </a>
                  </div>

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

export default Stories;
