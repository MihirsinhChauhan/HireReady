
import React from "react";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hireready-darkblue mb-4">
            See HireReady in Action
          </h2>
          <p className="text-hireready-gray text-lg">
            Watch how our AI interview platform helps candidates prepare and improve.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-custom">
          {/* This would be a video or animated GIF in a real implementation */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-100">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-hireready-blue/10 to-hireready-lightgray/80">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="HireReady Demo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  className="bg-hireready-blue hover:bg-hireready-blue/90 text-white h-16 w-16 rounded-full flex items-center justify-center"
                >
                  <PlayIcon size={30} />
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
              <p className="font-medium text-sm">Live Demo</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-hireready-blue hover:bg-hireready-blue/90 text-white px-8 py-6 rounded-xl text-lg">
            Try It Yourself
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
