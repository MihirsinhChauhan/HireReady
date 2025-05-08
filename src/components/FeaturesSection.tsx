
import React from "react";
import { MessageSquare, ShieldCheck, LayoutDashboard, Smartphone, Headphones } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Interview Creation",
      description: "Generate realistic interviews using AI voice agents and Google Gemini with just a few clicks.",
      icon: <MessageSquare className="h-8 w-8 text-hireready-blue" />,
    },
    {
      title: "Real-time Voice Interviews",
      description: "Conduct mock interviews with Vapi voice agents and get instant feedback on your responses.",
      icon: <Headphones className="h-8 w-8 text-hireready-blue" />,
    },
    {
      title: "Intelligent Feedback Engine",
      description: "AI analyzes your conversation and provides detailed, actionable feedback to improve your skills.",
      icon: <ShieldCheck className="h-8 w-8 text-hireready-blue" />,
    },
    {
      title: "Comprehensive Dashboard",
      description: "View and manage all your interviews from a central place with detailed analytics.",
      icon: <LayoutDashboard className="h-8 w-8 text-hireready-blue" />,
    },
    {
      title: "Secure Authentication",
      description: "Sign up and sign in securely using Firebase authentication to protect your data.",
      icon: <ShieldCheck className="h-8 w-8 text-hireready-blue" />,
    },
    {
      title: "Responsive Design",
      description: "Practice interviews on any device - mobile, tablet, or desktop with our fully responsive interface.",
      icon: <Smartphone className="h-8 w-8 text-hireready-blue" />,
    },
  ];

  return (
    <section id="features" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hireready-darkblue mb-4">
            Powerful Features
          </h2>
          <p className="text-hireready-gray text-lg">
            Everything you need to prepare for your next interview and land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-custom hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-hireready-lightgray rounded-xl p-3 inline-flex mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-hireready-darkblue mb-3">
                {feature.title}
              </h3>
              <p className="text-hireready-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
