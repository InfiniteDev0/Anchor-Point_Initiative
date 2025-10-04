import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { solutions } from "@/assets/assets";

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

const OurSolutions = () => {
  return (
    <motion.div
      className="max-w-6xl md:max-w-8xl mx-auto flex flex-col items-center py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className=" text-xl md:text-3xl mb-6 text-center"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        Our Solutions & Programs
      </motion.h2>
      <motion.p
        className="text-gray-700 text-xs  mb-10 w-[70%] text-center"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        The Anchor Point Initiative (API) runs community-based mental health
        group programs that provide a safe and supportive space for individuals
        to share, learn, and grow together.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 !px-[1.5rem] md:!px-[3rem] gap-6">
        {solutions.map((solution, idx) => (
          <motion.div
            key={solution.title}
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="md:bg-white/10 backdrop-blur-xl hover:bg-white transition-all duration-500 border-none cursor-pointer">
              <CardHeader className="flex flex-col  text-left gap-2">
                <solution.icon
                  size={35}
                  className="!p-2 bg-black rounded-full"
                  color={solution.color}
                />
                <span className="font-semibold">{solution.title}</span>
              </CardHeader>
              <CardContent className="text-gray-600 text-xs">
                {solution.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurSolutions;
