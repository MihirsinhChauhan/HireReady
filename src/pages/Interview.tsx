
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Interview = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = React.useState(false);
  const [transcript, setTranscript] = React.useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  
  const questions = [
    "Tell me about yourself and your background.",
    "What are your greatest strengths and weaknesses?",
    "Describe a challenging situation at work and how you handled it.",
    "Why do you want to work for our company?",
    "Where do you see yourself in five years?",
  ];

  const startInterview = () => {
    setIsRecording(true);
    // Simulate receiving transcript updates
    const demoTranscript = [
      { role: "interviewer", text: questions[currentQuestion] },
    ];
    setTranscript(demoTranscript);
    
    // Simulate user response after 5 seconds
    setTimeout(() => {
      setTranscript([
        ...demoTranscript,
        { 
          role: "user", 
          text: "I have over five years of experience in software development, specializing in frontend technologies like React and TypeScript. I've worked on projects ranging from e-commerce platforms to data visualization tools." 
        }
      ]);
    }, 5000);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      const newTranscript = [
        ...transcript,
        { role: "interviewer", text: questions[currentQuestion + 1] }
      ];
      setTranscript(newTranscript);
      
      // Simulate user response after 5 seconds
      setTimeout(() => {
        setTranscript([
          ...newTranscript,
          { 
            role: "user", 
            text: "My greatest strength is my ability to solve complex problems by breaking them down into manageable parts. As for weaknesses, I sometimes focus too much on details, but I've been working on balancing attention to detail with meeting deadlines." 
          }
        ]);
      }, 5000);
    } else {
      // End of interview
      navigate("/feedback/demo");
    }
  };

  React.useEffect(() => {
    document.title = "HireReady - Interview";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-custom overflow-hidden">
            <div className="border-b p-6">
              <h1 className="text-2xl font-bold">Frontend Developer Interview</h1>
              <p className="text-gray-600">Practice session with AI Interviewer</p>
            </div>
            
            <div className="p-6">
              {!isRecording ? (
                <div className="text-center py-12">
                  <h2 className="text-xl font-semibold mb-4">Ready to start your interview?</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Our AI interviewer will ask you questions and analyze your responses. Speak naturally as you would in a real interview.
                  </p>
                  <Button 
                    onClick={startInterview}
                    className="bg-hireready-blue hover:bg-hireready-blue/90 px-8"
                    size="lg"
                  >
                    Start Interview
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-red-600"></span>
                        Recording
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Question {currentQuestion + 1} of {questions.length}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6 h-96 overflow-y-auto">
                    {transcript.map((item: any, index) => (
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
                  
                  <div className="flex justify-end">
                    <Button
                      onClick={nextQuestion}
                      className="bg-hireready-blue hover:bg-hireready-blue/90"
                    >
                      {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Interview"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Interview;
