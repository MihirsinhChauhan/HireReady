
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-hireready-lightgray to-white -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-hireready-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-hireready-blue/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hireready-darkblue leading-tight">
                Ace Your Next Interview with AI Voice Practice
              </h1>
              <p className="mt-6 text-lg md:text-xl text-hireready-gray max-w-lg">
                Prepare confidently with realistic AI-powered mock interviews that provide real-time feedback and actionable insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-hireready-blue hover:bg-hireready-blue/90 text-white rounded-xl px-8 py-6 text-lg">
                Start Preparing with AI
              </Button>
              <Button variant="outline" size="lg" className="border-hireready-gray/30 text-hireready-darkblue rounded-xl px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-hireready-gray">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span>2,500+ interviews conducted this week</span>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="shadow-custom rounded-2xl overflow-hidden bg-white animate-float">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="AI Interview Dashboard" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-custom">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-hireready-blue rounded-full animate-pulse"></div>
                <p className="font-medium text-hireready-darkblue">AI Voice Interview in Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
