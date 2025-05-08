
import React from "react";
import { CheckCircle, MicIcon, MessageSquare } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Create",
      description: "Select from a variety of interview types, job roles, and difficulty levels to generate a personalized interview experience.",
      icon: <MessageSquare size={32} className="text-hireready-blue" />,
    },
    {
      id: 2,
      title: "Practice",
      description: "Engage in a realistic conversation with our AI voice agents that adapt to your responses and challenge your skills.",
      icon: <MicIcon size={32} className="text-hireready-blue" />,
    },
    {
      id: 3,
      title: "Improve",
      description: "Receive detailed feedback, suggestions for improvement, and track your progress over time through your dashboard.",
      icon: <CheckCircle size={32} className="text-hireready-blue" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hireready-darkblue mb-4">How It Works</h2>
          <p className="text-hireready-gray text-lg">
            Our AI-driven platform makes interview preparation simple and effective in just three steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-white relative rounded-2xl p-6 shadow-custom transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="absolute -top-5 left-6 bg-white shadow-custom h-10 w-10 rounded-full flex items-center justify-center">
                <span className="font-bold text-hireready-blue">{step.id}</span>
              </div>
              <div className="mb-6 mt-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-bold text-hireready-darkblue mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-hireready-gray text-center">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7.5H38" stroke="#E5E7EB" strokeWidth="2"/>
                    <path d="M32 1L39 7.5L32 14" stroke="#E5E7EB" strokeWidth="2"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
