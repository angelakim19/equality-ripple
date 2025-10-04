import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PlaceholderSection from "@/components/PlaceholderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PlaceholderSection
        id="challenges"
        title="Challenges We Face"
        description="Explore the systemic barriers, cultural norms, stereotypes, pay gaps, and workplace discrimination that continue to affect gender equality and LGBTQ+ communities in professional settings."
      />
      <PlaceholderSection
        id="stories"
        title="Real Stories, Real Impact"
        description="Hear from individuals who have experienced workplace bias, fought for equal pay, and championed inclusivity. These powerful testimonials showcase resilience and the ongoing fight for justice."
      />
      <PlaceholderSection
        id="laws"
        title="Laws & Policies"
        description="Understand the legal frameworks, anti-discrimination laws, and workplace policies designed to protect workers' rights and promote gender equality across all identities."
      />
      <Footer />
    </div>
  );
};

export default Index;
