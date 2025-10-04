import { useEffect, useRef, useState } from "react";

interface PlaceholderSectionProps {
  id: string;
  title: string;
  description: string;
}

const PlaceholderSection = ({ id, title, description }: PlaceholderSectionProps) => {
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
    <section
      id={id}
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">{title}</h2>
          <p className="text-lg text-dark leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlaceholderSection;
