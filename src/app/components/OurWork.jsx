import React, { useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Timeline } from "@/components/ui/timeline";
import { AudioWaveform, ChartSpline, Lightbulb } from "lucide-react";
import { ChartAreaInteractive } from "./charts/ChartAreaInteractive";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { soln, survey } from "@/assets/images";

const OurWork = () => {
  const router = useRouter();
  const { scrollY } = useViewportScroll();
  const start = 300; // when animation starts
  const end = 700; // when animation ends
  // Animate y from 8rem to 0 as you scroll from start to end
  const y = useTransform(scrollY, [start, end], ["8rem", "0rem"]);
  const timelineData = [
    {
      icon: <AudioWaveform className="w-8 h-8 text-cyan-500" />,
      title: "Track Your Mental Health",
      content: (
        <div className="flex flex-col md:flex-row bg-white !p-4 rounded-xl justify-between items-center gap-8 w-full">
          <div className="!p-4 w-full md:w-1/2">
            <div className="max-w-[350px] mx-auto md:mx-0">
              <p className="text-gray-500 text-sm mb-4">
                We help you identify your mental health challenges—anxiety,
                depression, ADHD, and more—using surveys and one-on-one sessions
                after you sign up.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap  md:justify-start">
              <Button
                className={
                  "bg-cyan-400 text-white hover:text-black hover:bg-gray-200 transition-all duration-200 w-full cursor-pointer"
                }
                onClick={() => router.push("/auth")}
              >
                Login
              </Button>
              <Button
                className={"!px-6 !py-1 w-full cursor-pointer"}
                onClick={() => router.push("/auth?mode=signup")}
              >
                Start for free
              </Button>
            </div>
          </div>
          <div className="h-32 w-32 md:h-40 md:w-40 flex-shrink-0 hidden md:flex items-center justify-center">
            {/* Replace with your survey image */}
            <Image
              className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center"
              src={survey}
              alt=""
            />
          </div>
        </div>
      ),
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Personalized Solutions",
      content: (
        <div className="flex flex-col md:flex-row bg-white !p-4 rounded-xl justify-between items-center gap-8 w-full">
          <div className="max-w-[350px] w-full md:w-1/2 mx-auto md:mx-0">
            <p className="text-gray-500 text-sm mb-4">
              Based on your unique needs, we recommend school programs,
              counseling, family support, and more. Solutions are tailored from
              your survey and session results.
            </p>
          </div>
          <div className="h-32 w-32 md:h-40 md:w-40 flex-shrink-0 hidden md:flex items-center justify-center">
            <Image
              className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center"
              src={soln}
              alt=""
            />
          </div>
        </div>
      ),
    },
    {
      icon: <ChartSpline className="w-8 h-8 text-green-500" />,
      title: "Track Your Progress",
      content: (
        <div className="flex flex-col bg-white !p-4 rounded-xl w-full gap-8">
          <div className="max-w-[350px] w-full mx-auto md:mx-0">
            <p className="text-gray-500 text-sm mb-4">
              Monitor your improvement over time with interactive charts. See
              your well-being, attendance, and more as you progress through our
              programs.
            </p>
          </div>
          <div className="w-full min-h-[200px]">
            <ChartAreaInteractive />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip !px-[1.5rem] md:!px-[5%] !py-[5rem]">
      <h1 className="text-5xl md:text-9xl font-extrabold tracking-tighter text-gray-300 text-center mb-12">
        HOW WE{" "}
        <motion.span
          style={{ y, display: "inline-block" }}
          className="text-cyan-500"
        >
          HELP
        </motion.span>{" "}
        YOU
      </h1>
      <Timeline data={timelineData} />
    </div>
  );
};

export default OurWork;
