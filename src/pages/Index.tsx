import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ui/ImageSlider"; 
import { useEffect, useRef, useState } from "react";
import equality1 from "@/assets/equalityimage1.jpg";
import equality2 from "@/assets/equalityimage2.jpg";
import equality3 from "@/assets/equalityimage3.jpg";
import equality4 from "@/assets/equalityimage4.jpg";


const Index = () => {
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

  const sliderImages = [equality1, equality2, equality3, equality4];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Gender Equality Section */}
      <section ref={sectionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 text-center">
              What is Gender Equality?
            </h2>
            <p className="text-xl font-bold italic text-dark mb-8 text-center">
              Gender equality means that all people have the same rights, opportunities, and treatment—regardless of gender identity or expression.
            </p>

        {/* Grid with slider on left, text on right */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Slider on the left */}
          <div className="animate-slide-in">
            <ImageSlider images={sliderImages} />
          </div>

          {/* Text content on the right */}
          <div className="mt-20 md:mt-20">
            <h3 className="text-3xl font-bold text-accent mb-4">Why It Matters</h3>
            <p className="text-lg leading-relaxed text-dark mb-6 text-justify" style={{ fontFamily: "Georgia, serif" }}>
              Gender equality is not just about fairness—it's about unlocking human potential. When people are judged by their abilities rather than their gender, everyone benefits. Businesses perform better, economies grow stronger, and societies become more just and innovative.
            </p>
            <p className="text-lg leading-relaxed text-dark text-justify" style={{ fontFamily: "Georgia, serif" }}>
              Yet significant gaps remain. Women earn less than men for equal work. LGBTQ+ individuals face discrimination in hiring, promotions, and workplace treatment. Transgender people experience some of the highest rates of workplace bias. These aren't just statistics—they represent real barriers that limit opportunity and perpetuate injustice.
            </p>
          </div>
        </div>

        {/* Current Reality Cards - centered below slider and text */}
        <div className="mt-16 text-center max-w-5xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold text-accent mb-6">The Current Reality</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-dark mb-2">Pay Gap Persists</h4>
              <p className="text-dark">
                Women earn approximately 82 cents for every dollar earned by men. The gap is even wider for women of color and transgender individuals.
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-dark mb-2">LGBTQ+ Workplace Discrimination</h4>
              <p className="text-dark">
                Over 46% of LGBTQ+ workers report experiencing workplace discrimination. Many remain closeted at work due to fear of consequences.
              </p>
            </div>
            <div className="bg-light p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-dark mb-2">Leadership Gap</h4>
              <p className="text-dark">
                Women hold only 29% of senior leadership positions globally, and openly LGBTQ+ leaders remain severely underrepresented in executive roles.
              </p>
            </div>
          </div>
        </div>

            {/* Progress Section */}
            <div className="mt-16 bg-accent/10 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-accent mb-4">Progress Through Action</h3>
              <p className="text-lg text-dark leading-relaxed">
                Change happens when individuals, organizations, and societies commit to equality. Through awareness, advocacy, and action, we can create workplaces where everyone—regardless of gender, sexual orientation, or gender identity—has equal opportunity to succeed. This platform exists to educate, inspire, and mobilize people toward that goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
