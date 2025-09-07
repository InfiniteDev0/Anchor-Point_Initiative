import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Instagram, Twitter, Globe } from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/assets/assets";

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

const Team = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto py-20 px-6 md:py-16 md:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.p
        className="text-center text-gray-500 mb-2"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        OUR TEAM
      </motion.p>
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        Meet the team
      </motion.h2>
      <motion.p
        className="text-center text-sm text-gray-400 mb-10"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        We choose our team for their compassion, expertise, and commitment Each member embodies our core values
        of empathy, resilience.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className={`overflow-hidden shadow-none p-0`}>
              <div className="w-full  flex items-center justify-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="object-cover  w-full h-74"
                />
              </div>
              <CardContent className="bg-white pt-4 pb-6 px-5">
                <div className="font-semibold  text-gray-900 mb-1">
                  {member.name}
                </div>
                <div className="text-sm text-gray-500 mb-2">{member.role}</div>
                <div className="text-[10px] text-gray-400 mb-4">
                  {member.description}
                </div>
                <div className="flex  gap-4">
                  <Globe
                    size={17}
                    className="text-gray-800 hover:text-black transition"
                  />
                  <Instagram
                    size={17}
                    className="text-gray-800 hover:text-pink-500 transition"
                  />
                  <Twitter
                    size={17}
                    className="text-gray-800 hover:text-sky-500 transition"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
