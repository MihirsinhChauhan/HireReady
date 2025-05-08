
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-3",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-hireready-darkblue">
            Hire<span className="text-hireready-blue">Ready</span>
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#how-it-works" className="text-gray-700 hover:text-hireready-blue transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-gray-700 hover:text-hireready-blue transition-colors">
            Features
          </a>
          <a href="#demo" className="text-gray-700 hover:text-hireready-blue transition-colors">
            Demo
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-hireready-blue transition-colors">
            Testimonials
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="link" className="text-gray-700 hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-hireready-blue hover:bg-hireready-blue/90 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
