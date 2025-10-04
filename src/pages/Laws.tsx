import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const Laws = () => {
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
              <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6">Laws & Policies</h1>
              <p className="text-xl text-dark mb-16 max-w-3xl">
                Understanding your rights is the first step toward protecting them. Here are the key laws and policies 
                designed to promote gender equality and protect LGBTQ+ rights in the workplace.
              </p>

              {/* Federal Laws */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-accent mb-8">Federal Laws (United States)</h2>
                <div className="space-y-6">
                  <div className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-4">Title VII of the Civil Rights Act of 1964</h3>
                    <p className="text-dark leading-relaxed mb-4">
                      Prohibits employment discrimination based on race, color, religion, sex, and national origin. 
                      In 2020, the Supreme Court ruled in <em>Bostock v. Clayton County</em> that Title VII's prohibition 
                      on sex discrimination includes discrimination based on sexual orientation and gender identity.
                    </p>
                    <p className="text-accent font-semibold">What this means for you:</p>
                    <ul className="mt-2 space-y-2 text-dark">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Employers cannot fire or refuse to hire someone because they are LGBTQ+</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Harassment based on gender identity or sexual orientation is illegal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Applies to employers with 15 or more employees</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-4">Equal Pay Act of 1963</h3>
                    <p className="text-dark leading-relaxed mb-4">
                      Requires that men and women in the same workplace receive equal pay for equal work. The jobs need 
                      not be identical, but they must be substantially equal in terms of skill, effort, and responsibility.
                    </p>
                    <p className="text-accent font-semibold">Protected under this law:</p>
                    <ul className="mt-2 space-y-2 text-dark">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Equal salary, bonuses, benefits, and compensation for equal work</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>Covers all forms of compensation, including stock options and profit sharing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-light p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-dark mb-4">The Equality Act (Proposed)</h3>
                    <p className="text-dark leading-relaxed">
                      This proposed federal legislation would provide comprehensive protection against discrimination based 
                      on sex, sexual orientation, and gender identity in employment, housing, public accommodations, and 
                      other areas. While not yet law, it represents the direction of future protections.
                    </p>
                  </div>
                </div>
              </div>

              {/* State & Local Laws */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-accent mb-8">State & Local Protections</h2>
                <div className="bg-light p-8 rounded-lg shadow-md">
                  <p className="text-dark leading-relaxed mb-4">
                    Many states and cities have their own anti-discrimination laws that may provide broader protections 
                    than federal law. Some states explicitly prohibit discrimination based on:
                  </p>
                  <ul className="space-y-2 text-dark mb-6">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Sexual orientation and gender identity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Pregnancy and family status</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Gender expression and appearance</span>
                    </li>
                  </ul>
                  <p className="text-accent font-semibold">Check your state's specific laws for additional protections.</p>
                </div>
              </div>

              {/* Workplace Policies */}
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-accent mb-8">Essential Workplace Policies</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-dark mb-3">Non-Discrimination Policy</h3>
                    <p className="text-dark">
                      Every workplace should have a clear policy prohibiting discrimination and harassment based on all 
                      protected characteristics, including explicit protections for LGBTQ+ employees.
                    </p>
                  </div>

                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-dark mb-3">Gender-Neutral Facilities</h3>
                    <p className="text-dark">
                      Policies allowing employees to use facilities that correspond with their gender identity, and 
                      providing gender-neutral options when possible.
                    </p>
                  </div>

                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-dark mb-3">Inclusive Benefits</h3>
                    <p className="text-dark">
                      Health insurance and benefits that cover same-sex partners, gender-affirming care, and family 
                      planning options for all employees.
                    </p>
                  </div>

                  <div className="bg-light p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-dark mb-3">Pay Transparency</h3>
                    <p className="text-dark">
                      Policies promoting salary transparency and regular pay equity audits to identify and address 
                      gender pay gaps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Know Your Rights */}
              <div className="bg-accent/10 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-accent mb-6">Know Your Rights</h2>
                <div className="space-y-4 text-dark">
                  <p className="leading-relaxed">
                    <strong>If you experience discrimination:</strong>
                  </p>
                  <ol className="space-y-3 ml-6">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1.</span>
                      <span>Document everything—dates, times, witnesses, and what was said or done</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2.</span>
                      <span>Report to HR or your supervisor in writing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">3.</span>
                      <span>File a complaint with the EEOC (within 180 days of the discrimination)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">4.</span>
                      <span>Consider consulting an employment attorney</span>
                    </li>
                  </ol>
                  <p className="mt-6 font-semibold">
                    Contact the Equal Employment Opportunity Commission (EEOC): 1-800-669-4000 or visit eeoc.gov
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

export default Laws;
