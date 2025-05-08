
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Engineer, Hired at Google",
    content: "HireReady transformed my interview preparation. The AI feedback identified weaknesses in my responses that I wouldn't have caught otherwise. Landed my dream job after just two weeks of practice!",
    avatar: "AC",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager, Hired at Meta",
    content: "The realistic interview scenarios and instant feedback made all the difference. I felt so much more confident going into my actual interviews after practicing with HireReady's AI voice agents.",
    avatar: "SJ",
  },
  {
    name: "Mark Williams",
    role: "Data Scientist, Hired at Amazon",
    content: "As someone who gets nervous during interviews, being able to practice with AI interviewers helped me overcome my anxiety. The detailed feedback reports were incredibly valuable.",
    avatar: "MW",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hireready-darkblue mb-4">
            Success Stories
          </h2>
          <p className="text-hireready-gray text-lg">
            See how HireReady has helped candidates land their dream jobs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-custom rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-hireready-gray mb-6 flex-grow">"{testimonial.content}"</p>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-10 w-10 mr-3 border-2 border-hireready-blue">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.avatar}`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-hireready-darkblue">{testimonial.name}</p>
                      <p className="text-sm text-hireready-gray">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
