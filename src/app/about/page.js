"use client";
import { Award } from "lucide-react";
import React from "react";
import Team from "../components/Team";
import Image from "next/image";
import { AboutImages, Ourvalues, solutions } from "@/assets/assets";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AboutPage() {
  // Smooth scroll for anchor links
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

  return (
    <main className="max-w-8xl mx-auteo px-4 md:px-8 lg:px-16 py-10 md:py-[6rem] space-y-16 flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-4 mb-10 text-center">
        <p className="rounded-full px-4 py-1 flex items-center gap-2 border-2 border-cyan-400 w-fit text-xs">
          <Award className="w-4 h-4" />
          About Anchor Point Initiative
        </p>
        <div className="flex flex-col gap-6 !mt-5 items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-500 font-bold">
            Empowering your mental wellness with compassion and care
          </h1>
          <p className="text-xs w-[80%]">
            Our mission is to raise awareness about mental health while
            encouraging sign-ups for programs and building a strong support
            network through partnerships and donations.
          </p>
        </div>
      </div>
      <section id="our-story" className="flex flex-col gap-[3rem] md:gap-[5rem] items-center">
        {/*  give the images here */}
        <div className="flex items-center gap-5">
          {AboutImages.map((item, index) => {
            return <Image key={index} src={item} alt={`about image${item}`} />;
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
          <h1 className="text-3xl md:text-5xl">
            We have created programs that help the youth evolve and grow mentaly
          </h1>
          <div className="flex flex-col gap-5 text-sm text-gray-500">
            <p>
              Our programs primarily serve teens and young adults who are
              navigating academic, social, and emotional pressures. We also
              extend support to parents, educators, and community members,
              equipping them with tools to better understand and respond to
              mental health needs. While our focus is youth-centered, we welcome
              anyone seeking a safe space to learn, heal, and grow.
            </p>
            <p>
              Our programs primarily serve teens and young adults who are
              navigating academic, social, and emotional pressures. We also
              extend support to parents, educators, and community members,
              equipping them with tools to better understand and respond to
              mental health needs. While our focus is youth-centered, we welcome
              anyone seeking a safe space to learn, heal, and grow.
            </p>
            <p>
              Our programs primarily serve teens and young adults who are
              navigating academic, social, and emotional pressures. We also
              extend support to parents, educators, and community members,
              equipping them with tools to better understand and respond to
              mental health needs. While our focus is youth-centered, we welcome
              anyone seeking a safe space to learn, heal, and grow.
            </p>
          </div>
        </div>
      </section>
      <section
        id="our-culture"
        className="flex flex-col max-w-6xl mx-auto gap-[5rem] items-center  "
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-3">Our Culture & Values</h2>
          <p className="text-sm w-[80%] text-center">
            We foster a culture of empathy, inclusivity, and growth. Our team
            values open communication, collaboration, and continuous learning to
            ensure a supportive environment for all.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {
            Ourvalues.map((item , index) =>{
              const Icon = item.icon;
              return <div key={index} className="!p-3 border-2 border-gray-300 rounded-md flex flex-col gap-3">
                <Icon className={`w-5 h-5 ${item.color}`}/>
                <h1 className="text-base">{item.title}</h1>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            })
          }
        </div>
      </section>
      <section id="our-team">
        <Team />
      </section>
      <section id="our-approach" className="space-y-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          At Anchor Point Initiative, our approach is holistic, innovative, and
          deeply personal. We blend evidence-based practices, creative
          therapies, and community engagement to support every aspect of mental
          wellness. Explore our core pillars below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 !px-[1.5rem] md:!px-[3rem] gap-6">
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="md:bg-white/40 backdrop-blur-xl hover:bg-white transition-all duration-500 border-none cursor-pointer">
                <CardHeader className="flex flex-col  text-left gap-2">
                  <solution.icon
                    size={55}
                    className="border !p-4 rounded-full"
                    color={solution.color}
                  />
                  <span className="font-semibold">{solution.title}</span>
                </CardHeader>
                <CardContent className="text-gray-600 text-sm">
                  {solution.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
