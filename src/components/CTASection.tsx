
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-hireready-blue/90 to-hireready-blue rounded-3xl p-8 md:p-12 lg:p-16 shadow-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Start practicing today with our AI-powered interview platform and get the job you deserve.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-hireready-blue hover:bg-white/90 rounded-xl px-8 py-6 text-lg font-medium"
              onClick={() => navigate("/signup")}
            >
              Sign Up and Start Preparing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
