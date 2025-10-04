import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import equality1 from "@/assets/equality1.jpg";
import equality2 from "@/assets/equality2.jpg";
import equality3 from "@/assets/equality3.jpg";
import equality4 from "@/assets/equality4.jpg";
import equality5 from "@/assets/equality5.jpg";

const images = [equality1, equality2, equality3, equality4, equality5];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Inclusion • Dignity • Rights
          </h2>
          <p className="text-xl font-bold italic text-dark mb-12">
            Gender equality empowers everyone — let's create a fairer future together.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Slider */}
            <div className="relative mx-auto max-w-md">
              <img
                src={images[currentIndex]}
                alt="Gender Equality"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg leading-relaxed italic text-dark text-justify" style={{ fontFamily: "Georgia, serif" }}>
                We believe in a world where gender never limits opportunity. This platform is dedicated to raising awareness,
                sharing inspiring stories, and shining a light on challenges such as cultural norms, stereotypes, pay gaps,
                and workplace bias against LGBTQ+ communities.
                <br /><br />
                Discover real voices and experiences, important laws and policies, and practical steps you can take to make
                a difference. Together, we can break barriers, close gaps, and open doors for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
