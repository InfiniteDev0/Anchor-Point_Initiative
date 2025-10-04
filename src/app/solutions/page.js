"use client";
import { solutions } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Users, Handshake, Sparkles, ArrowRight, Slack } from "lucide-react";
import React from "react";

const Solutionspage = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Filter solutions to match navigation items
  const guidedDiscussions = solutions.filter(
    (s) => s.title === "Guided Discussions"
  )[0];

  const peerSupport = solutions.filter((s) => s.title === "Peer Support")[0];

  const hopeEmpowerment = solutions.filter(
    (s) => s.title === "Hope & Empowerment"
  )[0];

  return (
    <main className="max-w-8xl mx-auto py-10 md:py-[4rem] flex flex-col gap-[3rem]">
      {/* Header */}
      <div className="w-full relative flex items-center justify-center h-[400px] md:h-[500px]">
        <img
          src="https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tbXVuaXR5fGVufDB8fDB8fHww"
          alt="mental health solutions"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-sm mb-2 tracking-wide drop-shadow-lg">
            ANCHOR POINT INITIATIVE SOLUTIONS
          </h2>
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            COMPREHENSIVE MENTAL HEALTH SOLUTIONS
          </h1>
          <div className="text-white text-base font-medium drop-shadow-lg mt-4">
            GUIDED DISCUSSIONS / PEER SUPPORT / HOPE & EMPOWERMENT
          </div>
        </div>
      </div>

      {/* Section 1: Guided Discussions */}
      <section id="guided-discussions" className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-5 h-5 text-cyan-500" />
          <h2 className="text-xl font-bold text-gray-800">
            Guided Discussions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {guidedDiscussions?.description}
            </p>
            <h3 className="font-semibold text-gray-800 mb-3">What we offer:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Weekly facilitated group sessions</li>
              <li>• Safe space sharing and listening</li>
              <li>• Structured topic discussions</li>
              <li>• Coping strategy workshops</li>
              <li>• Mental health education</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-cyan-800 mb-3">
              Session Topics Include:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="bg-white px-3 py-1 rounded-full text-cyan-700">
                Anxiety Management
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-cyan-700">
                Stress Relief
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-cyan-700">
                Self-Care
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-cyan-700">
                Goal Setting
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Peer Support */}
      <section id="peer-support" className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <Handshake className="w-5 h-5 text-green-500" />
          <h2 className="text-xl font-bold text-gray-800">Peer Support</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">
              Support Network Benefits:
            </h4>
            <div className="space-y-2 text-sm text-green-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Reduced isolation and loneliness</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Shared experiences and understanding</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Mutual encouragement and motivation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Breaking stigma together</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {peerSupport?.description}
            </p>
            <h3 className="font-semibold text-gray-800 mb-3">How it works:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Peer matching based on experiences</li>
              <li>• Regular check-ins and conversations</li>
              <li>• Group activities and events</li>
              <li>• Mentorship opportunities</li>
              <li>• Crisis support partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Hope & Empowerment */}
      <section id="hope-&-empowerment" className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          <h2 className="text-xl font-bold text-gray-800">
            Hope & Empowerment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <h4 className="font-semibold text-yellow-800 mb-3">
              Building Confidence
            </h4>
            <p className="text-xs text-yellow-700">
              Through skill-building activities and positive reinforcement, we
              help youth develop self-confidence and self-worth.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h4 className="font-semibold text-purple-800 mb-3">
              Creating Purpose
            </h4>
            <p className="text-xs text-purple-700">
              We connect youth with meaningful activities and volunteer
              opportunities that give them a sense of purpose.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h4 className="font-semibold text-blue-800 mb-3">
              Future Planning
            </h4>
            <p className="text-xs text-blue-700">
              Goal-setting workshops and life skills training prepare youth for
              a bright and hopeful future.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-12 mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Begin Your Mental Health Journey?
          </h2>
          <p className="text-gray-600 text-xs mb-8 leading-relaxed">
            Join thousands of young people who have found hope, support, and
            empowerment through our comprehensive mental health solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-transparent text-gray-800 hover:bg-gray-300 cursor-pointer border border-gray-400 px-4 py-2 rounded-sm text-xs  font-medium flex items-center gap-2">
              <Slack />
              Join our community
            </Button>
            <Button className="bg-purple-700 text-white hover:bg-purple-600 cursor-pointer border border-purple-700 px-4 py-2 rounded-sm text-xs  font-medium flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill={"#FFFFFF"}
                viewBox="0 0 24 24"
              >
                <path d="M14.82 4.26a10 10 0 0 0-.53 1.1 14.7 14.7 0 0 0-4.58 0 10 10 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A13 13 0 0 0 8.23 18a9.7 9.7 0 0 1-1.71-.83 3.4 3.4 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a11 11 0 0 1-1.71.84 12.4 12.4 0 0 0 1.08 1.78 16.4 16.4 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16 16 0 0 0-4.09-1.35M8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2m6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2"></path>
              </svg>
              Join our Discord
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutionspage;
