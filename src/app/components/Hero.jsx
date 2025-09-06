import { brain, hero1, hero2 } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 !py-[10%]  md:!py-[1%] min-h-[80vh]">
      <div
        className="flex flex-col gap-10 items-center w-full  md:!px-[5%] !py-[3rem] justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero1.src})`,
        }}
      >
        <style jsx>{`
          @media (max-width: 768px) {
            .bg-cover.bg-center {
              background-image: url(${require("@/assets/images").hero4
                .src}) !important;
            }
          }
        `}</style>
        <div className="w-[90%] flex flex-col !p-5 gap-3">
          <motion.p
            className="text-orange-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            FEEL STRONGER
          </motion.p>
          <motion.h1
            className="text-4xl md:text-gray-200 font-extrabold one"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            BUILDING OUR COMMUNITY BY HELPING THE YOUTH
          </motion.h1>
          <motion.p
            className="text-gray-700 md:text-gray-300 text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            Anchor Point Initiative (API) runs community-based mental health
            group programs that provide a safe and supportive space for
            individuals to share, learn, and grow together.
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-5 w-full !px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          <Button
            className={
              "bg-cyan-500 active:bg-cyan-400 hover:bg-cyan-500 md:hover:bg-cyan-400 w-full md:w-fit !px-[2rem] text-md rounded-full transition-all duration-500 cursor-pointer !py-[1.5rem]  "
            }
          >
            {" "}
            Join Our Community
          </Button>
          <Button
            className={
              "bg-white text-black w-full md:w-fit !px-[2rem] text-md rounded-full active:bg-cyan-400 hover:bg-white md:hover:bg-cyan-500 transition-all duration-500 cursor-pointer !py-[1.5rem]  "
            }
          >
            Upcoming Events
          </Button>
        </motion.div>
      </div>
      <div className="w-full md:flex hidden">
        <Image alt="img" src={hero2} className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
