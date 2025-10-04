import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const Laws = () => {
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

  const philippineLaws = [
    {
      title: "Magna Carta of Women (RA 9710)",
      year: "2009",
      description:
        "Ensures gender equality and protection of women's rights in all spheres of public and private life.",
      keyProvisions: [
        "Equal access to education and training",
        "Safe and non-discriminatory working conditions",
        "Equal rights in marriage and family relations",
        "Protection from violence and discrimination",
      ],
      link: "https://www.officialgazette.gov.ph/2009/08/14/republic-act-no-9710/",
    },
    {
      title: "Anti-Sexual Harassment Act (RA 7877)",
      year: "1995",
      description:
        "Declares sexual harassment unlawful in employment, education, and training environments.",
      keyProvisions: [
        "Protection in work and education settings",
        "Penalties for offenders",
        "Committee on Decorum and Investigation requirements",
        "Victim assistance and support",
      ],
      link: "https://www.officialgazette.gov.ph/1995/02/14/republic-act-no-7877/",
    },
    {
      title: "Safe Spaces Act (RA 11313)",
      year: "2019",
      description:
        "Also known as the 'Bawal Bastos Law,' protects against gender-based harassment in streets, workplaces, and online.",
      keyProvisions: [
        "Protection in public and online spaces",
        "Penalties for various forms of harassment",
        "Mandatory reporting mechanisms",
        "Educational campaigns on gender-based harassment",
      ],
      link: "https://www.officialgazette.gov.ph/2019/04/17/republic-act-no-11313/",
    },
    {
      title: "Anti-Violence Against Women and Their Children Act (RA 9262)",
      year: "2004",
      description:
        "Provides protection and support for women and children experiencing violence from intimate partners or family members.",
      keyProvisions: [
        "Protection orders for victims",
        "Comprehensive support services",
        "Penalties for perpetrators",
        "Establishment of Women and Children Protection Units",
      ],
      link: "https://www.officialgazette.gov.ph/2004/03/08/republic-act-no-9262/",
    },
  ];

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
              <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6">
                Philippine Laws & Policies
              </h1>
              <p className="text-xl text-dark mb-16 max-w-3xl">
                Learn about the key legislation in the Philippines that promotes gender equality and protects LGBTQ+ rights.
              </p>
              </div>
              

              {/* Gender Equality Laws */}
              <div className="space-y-6">
                {philippineLaws.map((law, idx) => (
                  <div key={idx} className="bg-light p-8 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-dark">{law.title}</h2>
                      <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {law.year}
                      </span>
                    </div>
                    <p className="text-dark leading-relaxed mb-4">{law.description}</p>
                    <h3 className="text-accent font-semibold mb-2">Key Provisions:</h3>
                    <ul className="list-disc list-inside mb-4 text-dark">
                      {law.keyProvisions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a
                      href={law.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent font-semibold hover:text-accent/80"
                    >
                      Read Full Law <ExternalLink size={16} />
                    </a>
                  </div>
                ))}
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
