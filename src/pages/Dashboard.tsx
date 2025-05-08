
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const [interviews, setInterviews] = React.useState([
    {
      id: 1,
      title: "Frontend Developer Interview",
      date: "2025-05-15",
      status: "Completed",
      score: 85,
    },
    {
      id: 2,
      title: "UX Designer Interview",
      date: "2025-05-20",
      status: "Scheduled",
      score: null,
    },
    {
      id: 3,
      title: "Product Manager Interview",
      date: "2025-05-08",
      status: "Completed",
      score: 92,
    },
  ]);

  React.useEffect(() => {
    document.title = "HireReady - Dashboard";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Your Dashboard</h1>
            <Button 
              onClick={() => navigate("/interview")} 
              className="bg-hireready-blue hover:bg-hireready-blue/90"
            >
              Start New Interview
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-custom p-6 mb-10">
            <h2 className="text-xl font-semibold mb-4">Your Interviews</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Interview</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Score</th>
                    <th className="text-right py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {interviews.map((interview) => (
                    <tr key={interview.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{interview.title}</td>
                      <td className="py-3 px-4">{interview.date}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            interview.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {interview.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {interview.score ? `${interview.score}%` : "-"}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {interview.status === "Completed" ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/feedback/${interview.id}`)}
                          >
                            View Feedback
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/interview/${interview.id}`)}
                          >
                            Join
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-custom p-6">
              <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
              <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg">
                <p className="text-gray-500">Performance chart will appear here</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-custom p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Feedback</h2>
              <ul className="space-y-4">
                <li className="p-4 border rounded-lg">
                  <p className="font-medium">Frontend Developer Interview</p>
                  <p className="text-sm text-gray-600 mt-1">
                    "Great technical knowledge, but could improve on explaining complex concepts simply."
                  </p>
                </li>
                <li className="p-4 border rounded-lg">
                  <p className="font-medium">Product Manager Interview</p>
                  <p className="text-sm text-gray-600 mt-1">
                    "Excellent stakeholder management responses. Consider adding more metrics to your answers."
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
