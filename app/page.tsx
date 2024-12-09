"use client";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect } from "react";

export default function Home() {
  const [projectType, setProjectType] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [budget, setBudget] = useState("");
  const [preference, setPreference] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const [callGemini, setCallGemini] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setCallGemini(true);
    e.preventDefault();
  };

  useEffect(() => {
    setCallGemini(false);
    const callGemini = async () => {
      const genAI = new GoogleGenerativeAI(apiKey ? apiKey.toString() : "");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = "Write a story about a magic backpack.";
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
    };
    callGemini();
  }, [callGemini]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Best tech stack for your project
      </h1>
      <h2 className="mb-6 text-xl text-white text-center italic">
        Recommendation System
      </h2>
      <div className="bg-gradient-to-bl rounded-lg shadow-lg p-6 border-black border w-full max-w-md">
        <form className="form-control" onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text text-white font-semibold">
              Question 1: What type of project are you working on?
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="web app, mobile app, cloud service etc."
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          />

          <label className="label mt-4">
            <span className="label-text text-white font-semibold">
              Question 2: How big is your project going to be?
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="few users or millions of users"
            value={projectSize}
            onChange={(e) => setProjectSize(e.target.value)}
          />

          <label className="label mt-4">
            <span className="label-text text-white font-semibold">
              Question 3: What is your estimated budget for the project?
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your estimated budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <label className="label mt-4">
            <span className="label-text text-white font-semibold">
              Question 4: Do you have a preference over a technology or
              framework?
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your favorite technology"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
          />

          <button
            type="submit"
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
