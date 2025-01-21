import React, { useState } from "react";
import { X, Clock, Check, AlertCircle } from "lucide-react";

const AboutPage = () => (
  <div className="relative min-h-[calc(100vh-5rem)] flex items-center">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-lg p-8 relative z-10">
        <h1 className="text-3xl font-bold mb-6">What Is Our Platform?</h1>
        <div className="space-y-6 text-gray-700">
          <p>
            Our web3-powered prediction market is designed for businesses,
            teams, and communities to make predictions on everything from
            company milestones to internal gossip. Create prediction pools,
            participate in others, and tap into valuable insights that build a
            rich data pool. The platform allows you to forecast everything from
            next quarter earnings to upcoming product launches — all while
            engaging in fun, gamified predictions that get everyone talking.
          </p>
          <div>
            <h1 className="text-xl font-semibold mb-3">
              Why Prediction Markets?
            </h1>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Collective Wisdom: Leverage the knowledge of your entire team or
                community to forecast future events.
              </li>
              <li>
                Data-Driven Decisions: Gather valuable insights from predictions
                that inform business strategies.
              </li>
              <li>
                Engagement & Fun: Make serious business forecasting fun, from
                marketing plans to internal gossip.
              </li>
              <li>
                Web3-Powered: Built on blockchain, ensuring transparency,
                security, and reliability.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-3">Key Features</h1>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Custom Prediction Pools: Create and join prediction markets
                tailored to your needs.
              </li>
              <li>
                Data Analytics: Gain insights from predictions that guide
                business and marketing strategies.
              </li>
              <li>
                Collaborative Forecasting: Bring teams and communities together
                through shared predictions.
              </li>
              <li>
                Privacy & Security: Blockchain ensures your data remains secure
                and transparent.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="relative min-h-[calc(100vh-5rem)] flex items-center">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto bg-white/90 rounded-lg p-8 relative z-10">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-700">Email: miraxrutuz@gmail.com</p>
            <p className="text-gray-700">Phone: +91 8976765432</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CreatePredictionCard = () => {
  const [predictionData, setPredictionData] = useState({
    question: "",
    optionA: "",
    optionB: "",
    endDate: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prediction Card Created:", predictionData);
    // Here you would typically send this to your backend
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create a Prediction Market</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="e.g., Will Bitcoin reach $100k by end of 2025?"
            value={predictionData.question}
            onChange={(e) =>
              setPredictionData({ ...predictionData, question: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Option A
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Yes"
              value={predictionData.optionA}
              onChange={(e) =>
                setPredictionData({
                  ...predictionData,
                  optionA: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Option B
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="No"
              value={predictionData.optionB}
              onChange={(e) =>
                setPredictionData({
                  ...predictionData,
                  optionB: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resolution Date
          </label>
          <input
            type="datetime-local"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={predictionData.endDate}
            onChange={(e) =>
              setPredictionData({ ...predictionData, endDate: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Description
          </label>
          <textarea
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none h-32"
            placeholder="Provide any additional details or context..."
            value={predictionData.description}
            onChange={(e) =>
              setPredictionData({
                ...predictionData,
                description: e.target.value,
              })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-3 rounded-md hover:bg-slate-800 transition-colors"
        >
          Create Prediction Market
        </button>
      </form>

      {/* Preview Card */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-bold">
              {predictionData.question || "Your question will appear here"}
            </h4>
            <div className="flex items-center text-sm text-gray-600">
              <Clock size={16} className="mr-1" />
              <span>
                {predictionData.endDate
                  ? new Date(predictionData.endDate).toLocaleDateString()
                  : "Resolution date"}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-full bg-white border rounded-md p-3">
                <div className="flex justify-between">
                  <span>{predictionData.optionA || "Option A"}</span>
                  <span className="text-green-600">50%</span>
                </div>
                <div className="w-1/2 h-2 bg-green-200 rounded-full mt-2" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-full bg-white border rounded-md p-3">
                <div className="flex justify-between">
                  <span>{predictionData.optionB || "Option B"}</span>
                  <span className="text-red-600">50%</span>
                </div>
                <div className="w-1/2 h-2 bg-red-200 rounded-full mt-2" />
              </div>
            </div>
          </div>

          {predictionData.description && (
            <div className="mt-4 text-sm text-gray-600">
              <p>{predictionData.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PredictionMarket = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "services":
        return <CreatePredictionCard />;
      default:
        return (
          <div className="relative min-h-[calc(100vh-5rem)] flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl relative z-10">
                <h1 className="text-4xl font-bold text-white mb-6">
                  Unlock the Power of Prediction Markets for Your Business
                </h1>
                <p className="text-lg text-blue-100 mb-8">
                  Harness collective intelligence, fun internal competitions,
                  and future insights with our prediction market platform. Turn
                  predictions on business outcomes, marketing trends, team
                  gossip, and more into valuable insights. Elevate your
                  decision-making process with data from your own teams and
                  partners.
                </p>
                <div className="space-y-4 text-blue-100">
                  <h1 className="text-4xl font-bold text-white mb-6">
                    <h1 className="text-4xl font-bold text-white mb-6">
                      From Business Strategies to Internal Whispers — Make
                      Predictions Fun and Insightful!
                    </h1>
                  </h1>
                  <p>Key benefits of prediction markets:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Aggregate knowledge from diverse participants</li>
                    <li>Provide real-time probability estimates</li>
                    <li>Create incentives for accurate predictions</li>
                    <li>Enable better decision-making through crowd wisdom</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Forest-like background pattern */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 bg-slate-800"
            style={{
              left: `${i * 8}%`,
              height: "120%",
              top: "-10%",
              transform: `skew(${-15 + Math.random() * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-transparent p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Mira</div>
          <div className="flex gap-6">
            <a
              href="#"
              onClick={() => setCurrentPage("home")}
              className="text-white hover:text-blue-300"
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => setCurrentPage("about")}
              className="text-white hover:text-blue-300"
            >
              About
            </a>
            <a
              href="#"
              onClick={() => setCurrentPage("services")}
              className="text-white hover:text-blue-300"
            >
              Services
            </a>
            <a
              href="#"
              onClick={() => setCurrentPage("contact")}
              className="text-white hover:text-blue-300"
            >
              Contact
            </a>
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-1 border border-white text-white rounded-md hover:bg-white hover:text-slate-900 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">{renderPage()}</div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold mb-6">Login</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>

              <button className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800">
                Login
              </button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictionMarket;
