"use client";
import { Activities, Awareness, Resilience } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Image, Palette, ShieldCheck, Slack, TrophyIcon } from "lucide-react";
import React from "react";

const Programspage = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="max-w-8xl mx-auto py-10 md:py-[4rem] flex flex-col gap-[4rem] md:gap-[3rem]">
      {/* header */}
      <div className="w-full relative flex items-center justify-center h-[400px] md:h-[500px]">
        <img
          src="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww"
          alt="park nature"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-xs  mb-2 tracking-wide drop-shadow-lg">
            ANCHOR POINT INITIATIVE PROGRAMS
          </h2>
          <h1 className="text-white text-4xl">
            BOOST YOUR MENTAL HEALTH AND <br /> ELEVATE WITH OTHERS
          </h1>
          <div className="text-white  md:text-sm text-xs font-medium drop-shadow-lg">
            CREATIVE ACTIVITIES / RESILIENCE BUILDING / AWARENESS & EDUCATION
          </div>
        </div>
      </div>
      {/* intro */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center w-full !px-6 gap-[2rem]">
        <div>
          <p className="text-[9px] font-semibold text-gray-400">OUR PROGRAMS</p>
          <h1 className="text-2xl font-extralight tracking-tighter text-gray-700">
            FEEL AT EASE AND PARTICIPATE IN OUR
            <br />
            YOUTH PROGRAMS AS WE PROVIDE
            <br />
            EVRYTHING YOU NEED.
          </h1>
        </div>
        <div className="text-xs flex flex-col items-center gap-5 text-gray-400">
          <p>
            Join our slack account and discord, where we post events , schedule
            meetings and create group where you can participate and have fun
            with your colleages
          </p>
          <div className="flex items-center gap-5">
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
      </div>
      {/* Program 1: creative solution */}
      <div className="flex relative flex-col gap-5 min-h-fit !px-6 max-w-6xl mx-auto w-full">
        <p className="text-sm sticky top-0 bg-cyan-500 backdrop-blur-3xl w-fit !p-2 text-white rounded-sm tracking-tighter flex items-center gap-2">
          <Palette className="w-5 h-5" />
          OUR CREATIVE ACTIVITIES
        </p>
        <div className="flex flex-col gap-15 items-center">
          <p className="flex items-center gap-2 text-cyan-500 text-sm">
            Goal:
            <span className="text-xs  text-gray-500">
              Purpose: Encourage self-expression, reduce stress, and build
              confidence.
            </span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {Activities.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <img src={item.image} alt="" />
                <p className="text-[12px] font-medium text-gray-600 tracking-tighter">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Program 2: Resilence Building */}
      <div className="flex !px-6 relative flex-col gap-5 min-h-fit max-w-6xl mx-auto w-full">
        <p className="text-sm sticky top-0 bg-white/50 backdrop-blur-3xl w-fit !p-2 rounded-sm tracking-tighter flex items-center gap-2">
          <ShieldCheck className="text-green-500 w-5 h-5" />
          Resilience Building
        </p>
        <div className="flex flex-col gap-15 items-center">
          <p className="flex items-center gap-2 text-cyan-500 text-sm">
            Goal:
            <span className="text-xs  text-gray-500">
              Teach coping skills and strengthen emotional balance.
            </span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {Resilience.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <img src={item.image} alt="" />
                <p className="text-[12px] font-medium text-gray-600 tracking-tighter">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Program 1: creative solution */}
      <div className="flex !px-6 relative flex-col gap-5 min-h-fit max-w-6xl mx-auto w-full">
        <p className="text-sm sticky top-0 bg-white/50 backdrop-blur-3xl w-fit !p-2 rounded-sm tracking-tighter flex items-center gap-2">
          <TrophyIcon className="text-yellow-500 w-5 h-5" /> 
          AWARENESS AND EDUCATION
        </p>
        <div className="flex flex-col gap-15 items-center">
          <p className="flex items-center gap-2 text-cyan-500 text-sm">
            Goal:
            <span className="text-xs  text-gray-500">
              Purpose: Encourage self-expression, reduce stress, and build
              confidence.
            </span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {Awareness.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <img src={item.image} alt="" />
                <p className="text-[12px] font-medium text-gray-600 tracking-tighter">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Programspage;
