
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Feedback = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock data for demo purposes
  const feedbackData = {
    overallScore: 85,
    strengths: [
      "Strong technical knowledge",
      "Clear communication style",
      "Good problem-solving approach"
    ],
    improvements: [
      "Could provide more specific examples",
      "Sometimes speaks too quickly",
      "Could improve conciseness in responses"
    ],
    detailedFeedback: {
      "Communication": {
        score: 80,
        comment: "You communicate your ideas clearly, but sometimes use technical jargon that might be difficult for non-technical interviewers to understand."
      },
      "Technical Knowledge": {
        score: 90,
        comment: "Demonstrated strong technical understanding and problem-solving skills. You were able to explain complex concepts well."
      },
      "Experience": {
        score: 85,
        comment: "You provided relevant examples from your experience, but could have been more specific about your individual contributions in team projects."
      },
      "Cultural Fit": {
        score: 88,
        comment: "Your values and work style seem well-aligned with typical company cultures. You showed enthusiasm and adaptability."
      }
    },
    transcript: [
      { role: "interviewer", text: "Tell me about yourself and your background." },
      { role: "user", text: "I have over five years of experience in software development, specializing in frontend technologies like React and TypeScript. I've worked on projects ranging from e-commerce platforms to data visualization tools." },
      { role: "interviewer", text: "What are your greatest strengths and weaknesses?" },
      { role: "user", text: "My greatest strength is my ability to solve complex problems by breaking them down into manageable parts. As for weaknesses, I sometimes focus too much on details, but I've been working on balancing attention to detail with meeting deadlines." }
    ]
  };

  React.useEffect(() => {
    document.title = "HireReady - Interview Feedback";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-custom overflow-hidden mb-8">
            <div className="border-b p-6 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Interview Feedback</h1>
                <p className="text-gray-600">Frontend Developer Interview</p>
              </div>
              <div className="flex items-center">
                <div className="text-right mr-4">
                  <div className="text-sm text-gray-500">Overall Score</div>
                  <div className="text-2xl font-bold text-hireready-blue">{feedbackData.overallScore}%</div>
                </div>
                <div className="h-16 w-16 rounded-full bg-hireready-blue/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-hireready-blue">{feedbackData.overallScore}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-5">
                  <h2 className="text-lg font-semibold mb-3 text-green-600">Strengths</h2>
                  <ul className="space-y-2">
                    {feedbackData.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border rounded-lg p-5">
                  <h2 className="text-lg font-semibold mb-3 text-amber-600">Areas for Improvement</h2>
                  <ul className="space-y-2">
                    {feedbackData.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block bg-amber-100 text-amber-800 p-1 rounded-full mr-2">!</span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-4">Detailed Feedback</h2>
              <div className="space-y-6 mb-8">
                {Object.entries(feedbackData.detailedFeedback).map(([category, data]: [string, any], index) => (
                  <div key={index} className="border rounded-lg p-5">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold">{category}</h3>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                          <div 
                            className="h-full bg-hireready-blue rounded-full" 
                            style={{ width: `${data.score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{data.score}%</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{data.comment}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-xl font-semibold mb-4">Interview Transcript</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 max-h-96 overflow-y-auto">
                {feedbackData.transcript.map((item, index) => (
                  <div key={index} className={`mb-4 ${item.role === 'interviewer' ? '' : 'pl-8'}`}>
                    <div className="font-medium text-sm text-gray-500 mb-1">
                      {item.role === 'interviewer' ? 'AI Interviewer' : 'You'}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      item.role === 'interviewer' 
                        ? 'bg-blue-50 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                >
                  Back to Dashboard
                </Button>
                <Button
                  onClick={() => navigate("/interview")}
                  className="bg-hireready-blue hover:bg-hireready-blue/90"
                >
                  Start New Interview
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
