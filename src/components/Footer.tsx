import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="get-involved" className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h5 className="text-2xl font-bold text-dark mb-4">Gender Equality for All</h5>
            <p className="text-dark mb-6">Addressing Pay Gaps and LGBTQ+ Workplace Bias</p>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/share/1BZWBJQkPM/" aria-label="Facebook" className="text-accent hover:text-accent/80 transition-colors">
                <Facebook size={32} />
              </a>
              <a href="https://www.instagram.com/lgbt?igsh=MTZyZGF0Mm10ZG1ybg==" aria-label="Instagram" className="text-accent hover:text-accent/80 transition-colors">
                <Instagram size={32} />
              </a>
              <a href="https://x.com/AdvocatesTweets" aria-label="Twitter" className="text-accent hover:text-accent/80 transition-colors">
                <Twitter size={32} />
              </a>
            </div>
            <p className="text-dark text-sm">© 2025 All Rights Reserved</p>
          </div>
          
          <div>
            <h5 className="text-2xl font-bold text-dark mb-4">Get Involved</h5>
            <p className="text-dark mb-6">Take action today to support gender equality:</p>
            <div className="space-y-3 md:space-y-0 md:flex md:space-x-3">
              <a href="https://www.unwomen.org/en/get-involved" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Volunteer
                </Button>
              </a>
              
              <a href="https://join.globalfundforwomen.org/a/donate" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Donate
                </Button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
