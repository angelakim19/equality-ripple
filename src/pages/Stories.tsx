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
              <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6">Real Stories, Real Impact</h1>
              <p className="text-xl text-dark mb-16 max-w-3xl">
                Hear from LGBTQ+ individuals who have faced workplace challenges and fought for equality.
              </p>

              {/* YouTube Stories Section */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-accent mb-8">Video Stories</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <div className="aspect-video bg-dark/10 rounded-lg mb-4 flex items-center justify-center">
                      <a 
                        href="https://www.youtube.com/results?search_query=lgbt+workplace+discrimination+stories" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 flex items-center gap-2"
                      >
                        <span>Watch LGBTQ+ Workplace Stories</span>
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Workplace Discrimination Testimonials</h3>
                    <p className="text-dark">Real stories from LGBTQ+ professionals about facing bias in the workplace.</p>
                  </div>

                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <div className="aspect-video bg-dark/10 rounded-lg mb-4 flex items-center justify-center">
                      <a 
                        href="https://www.youtube.com/results?search_query=transgender+workplace+equality" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 flex items-center gap-2"
                      >
                        <span>Watch Trans Workplace Stories</span>
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Trans Professionals Speak Out</h3>
                    <p className="text-dark">Stories of resilience and the fight for workplace equality from transgender individuals.</p>
                  </div>

                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <div className="aspect-video bg-dark/10 rounded-lg mb-4 flex items-center justify-center">
                      <a 
                        href="https://www.youtube.com/results?search_query=lgbtq+equal+pay+stories" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 flex items-center gap-2"
                      >
                        <span>Watch Pay Equity Stories</span>
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Fighting for Equal Pay</h3>
                    <p className="text-dark">Personal accounts of the wage gap and fighting for fair compensation.</p>
                  </div>

                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <div className="aspect-video bg-dark/10 rounded-lg mb-4 flex items-center justify-center">
                      <a 
                        href="https://www.youtube.com/results?search_query=lgbtq+workplace+success+stories" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 flex items-center gap-2"
                      >
                        <span>Watch Success Stories</span>
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">Triumph and Progress</h3>
                    <p className="text-dark">Inspiring stories of LGBTQ+ professionals thriving in inclusive workplaces.</p>
                  </div>
                </div>
              </div>

              {/* Blog & Articles */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-accent mb-8">Blog & Articles</h2>
                <div className="space-y-6">
                  <article className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-3">Breaking the Glass Ceiling: Sarah's Story</h3>
                    <p className="text-dark leading-relaxed mb-4">
                      After being passed over for promotion three times while less-qualified male colleagues advanced, 
                      Sarah fought back. Her story led to a company-wide pay equity audit that revealed systemic bias 
                      affecting over 200 women employees.
                    </p>
                    <p className="text-accent italic">"I knew I wasn't alone. Speaking up was scary, but staying silent was scarier."</p>
                  </article>

                  <article className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-3">Coming Out at Work: Marcus's Journey</h3>
                    <p className="text-dark leading-relaxed mb-4">
                      Marcus spent five years hiding his identity at a conservative firm. When he finally came out, 
                      he faced subtle discrimination and exclusion. His decision to file a complaint led to policy 
                      changes and mandatory diversity training across the organization.
                    </p>
                    <p className="text-accent italic">"Being authentic at work shouldn't be a radical act, but sometimes it is."</p>
                  </article>

                  <article className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-3">Transition in the Workplace: Jamie's Experience</h3>
                    <p className="text-dark leading-relaxed mb-4">
                      When Jamie transitioned while working at a tech company, they faced questions, misgendering, 
                      and bathroom access issues. With HR support and education, their workplace became a model 
                      for trans-inclusive policies, helping future employees avoid similar struggles.
                    </p>
                    <p className="text-accent italic">"Visibility matters. Every time I show up as myself, I'm making it easier for the next person."</p>
                  </article>
                </div>
              </div>

              {/* Events and News */}
              <div>
                <h2 className="text-4xl font-bold text-accent mb-8">Events & News</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <span className="text-accent font-bold text-sm">UPCOMING EVENT</span>
                    <h3 className="text-2xl font-bold text-dark mb-3 mt-2">Pride at Work Conference 2025</h3>
                    <p className="text-dark mb-2">A national conference addressing LGBTQ+ workplace equality and inclusion strategies.</p>
                    <p className="text-dark text-sm italic">June 15-17, 2025 | Virtual & In-Person</p>
                  </div>

                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <span className="text-accent font-bold text-sm">RECENT NEWS</span>
                    <h3 className="text-2xl font-bold text-dark mb-3 mt-2">New EEOC Guidelines on Gender Identity Discrimination</h3>
                    <p className="text-dark">Updated federal guidelines strengthen protections for transgender and non-binary employees.</p>
                  </div>

                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <span className="text-accent font-bold text-sm">COMMUNITY EVENT</span>
                    <h3 className="text-2xl font-bold text-dark mb-3 mt-2">Workplace Allies Training</h3>
                    <p className="text-dark mb-2">Free training for HR professionals and managers on creating LGBTQ+ inclusive workplaces.</p>
                    <p className="text-dark text-sm italic">Monthly virtual sessions available</p>
                  </div>

                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <span className="text-accent font-bold text-sm">BREAKTHROUGH</span>
                    <h3 className="text-2xl font-bold text-dark mb-3 mt-2">Major Corporation Achieves 100% Pay Equity</h3>
                    <p className="text-dark">First Fortune 500 company to close gender pay gap across all positions and departments.</p>
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
