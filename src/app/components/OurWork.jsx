import React, { useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ChartSpline, Circle, Lightbulb } from "lucide-react";
import MentalHealthProblemsChart from "./charts/MentalHealthProblemsChart";
import MentalHealthSolutionsChart from "./charts/MentalHealthSolutionsChart";

const OurWork = () => {
  const { scrollY } = useViewportScroll();
  const targetRef = useRef(null);

  const start = 300; // when animation starts
  const end = 700; // when animation ends

  // Animate y from 5rem to 0 as you scroll from start to end
  const y = useTransform(scrollY, [start, end], ["8rem", "0rem"]);

  return (
    <div className="!px-[1.5rem] md:!px-[5%] !py-[5rem] flex flex-col gap-[3rem] md:gap-[10rem] items-center ">
      <h1 className="text-5xl md:text-9xl font-extrabold tracking-tighter text-gray-300">
        HOW WE{" "}
        <motion.span
          style={{ y, display: "inline-block" }}
          className="text-cyan-500"
        >
          HELP
        </motion.span>{" "}
        YOU
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-6">
          <h1 className="py-3 border md:rounded-md w-full rounded-full md:w-fit border-gray-300 px-8 flex text-xs md:text-sm text-normal items-center justify-center gap-3">
            <ChartSpline className="text-red-500" />
            Mental Health Analytics: Problems
          </h1>
          <MentalHealthProblemsChart />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="py-3 border md:rounded-md w-full rounded-full md:w-fit border-gray-300 px-8 flex text-xs md:text-sm text-normal items-center justify-center gap-3">
            <Lightbulb className="text-green-500" />
            Solutions by Professionals
          </h1>
          <MentalHealthSolutionsChart />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
