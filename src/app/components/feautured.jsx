"use client";

import React from "react";
import {
  Brain,
  HeartPulse,
  Hospital,
  User,
  Stethoscope,
  Syringe,
} from "lucide-react";

const healthCompanies = [
  { logo: "/brands/nami.svg", name: "NAMI" },
  { logo: "/brands/mind.svg", name: "Mind" },
  { logo: "/brands/apa.svg", name: "APA" },
  { logo: "/brands/mha.svg", name: "MHA" },
  { logo: "/brands/headspace.svg", name: "Headspace" },
  { logo: "/brands/betterhelp.svg", name: "BetterHelp" },
];

const Featured = () => {
  return (
    <div className="flex !p-[5%] flex-col items-center w-full">
      <p className="!mb-8 text-sm md:text-sm text-gray-600">
        We're Featured Across Multiple Directories
      </p>
      <div className="w-full overflow-hidden flex justify-center">
        <div className="w-full md:max-w-6xl mx-auto overflow-hidden flex justify-center">
          <div className="grid grid-cols-3 md:grid-cols-6 md:gap-[5rem]">
            {healthCompanies.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-2xl !py-5 !px-[5%]"
              >
                <img
                  src={item.logo}
                  alt={item.name + " logo"}
                  className="w-28 h-10 object-contain mb-2 grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
                {/* <span className="text-xs text-gray-500 mt-1">{item.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
