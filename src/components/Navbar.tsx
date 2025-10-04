import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      } nav-gradient`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Gender Equality Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-dark"
            />
            <span className="font-bold text-xl text-dark hidden md:block">
              Gender Equality for All
            </span>
            <span className="font-bold text-lg text-dark md:hidden">
              Gender Equality
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            <Link
              to="/about"
              className="text-dark font-semibold hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/challenges"
              className="text-dark font-semibold hover:text-accent transition-colors"
            >
              Challenges
            </Link>
            <Link
              to="/stories"
              className="text-dark font-semibold hover:text-accent transition-colors"
            >
              Stories
            </Link>
            <Link
              to="/laws"
              className="text-dark font-semibold hover:text-accent transition-colors"
            >
              Laws
            </Link>
            <Link to="/#get-involved">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6">
                Home
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-dark"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-3">
            <Link
              to="/about"
              onClick={closeMenu}
              className="block w-full text-left text-dark font-semibold py-2 hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/challenges"
              onClick={closeMenu}
              className="block w-full text-left text-dark font-semibold py-2 hover:text-accent transition-colors"
            >
              Challenges
            </Link>
            <Link
              to="/stories"
              onClick={closeMenu}
              className="block w-full text-left text-dark font-semibold py-2 hover:text-accent transition-colors"
            >
              Stories
            </Link>
            <Link
              to="/laws"
              onClick={closeMenu}
              className="block w-full text-left text-dark font-semibold py-2 hover:text-accent transition-colors"
            >
              Laws
            </Link>
            <Link to="/#get-involved" onClick={closeMenu}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full">
                Home
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
