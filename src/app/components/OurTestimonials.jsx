import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { client1, client2, client3, client4 } from "@/assets/images";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Wow, this is absolutely incredible – huge props to the API team for bringing these amazing mental health programs to our community!",
    name: "Olivia Rhye",
    role: "Community Member",
    date: "20 Jan 2022",
    image: client1,
  },
  {
    text: "Finally a program I can ACTUALLY include as part of my well-being journey. I love how seamless it is from start to finish.",
    name: "SoyBalta",
    role: "Youth Participant",
    date: "20 Jan 2022",
    image: client2,
  },
  {
    text: "This is pure magic. Group sessions, creative activities, and peer support all in one place. API is saving the day for youth and families!",
    name: "DannPetty",
    role: "Parent & Supporter",
    date: "20 Jan 2022",
    image: client3,
  },
  {
    text: "Very excited for API’s new community-based programs. The messaging and positioning: ‘to empower you, not replace you’.",
    name: "GabeLopez",
    role: "Community Advocate",
    date: "20 Jan 2022",
    image: client4,
  },
];

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

const OurTestimonials = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="text-center mb-6"
        variants={itemVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex justify-center gap-1 mb-2">
          {testimonials.map((t, idx) => (
            <Avatar key={idx} className="w-8 h-8">
              <AvatarImage src={t.image.src} alt={t.name} />
              <AvatarFallback>{t.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-xs text-gray-500 !mb-2">
          700+ Youth & Families trust API
        </p>
        <h2 className=" text-2xl md:text-3xl font-bold !mb-2">
          Helping youth thrive with community support
        </h2>
        <div className="flex  flex-col md:flex-row justify-center gap-3 !mt-6">
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            Join our community
          </button>
          <button className="bg-white border px-4 py-2 rounded-full text-sm font-medium">
            Read more reviews
          </button>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white rounded-xl min-h-[30vh] p-6">
              <p className="text-gray-800 text-sm mb-4">{t.text}</p>
              <div className="flex items-center gap-3 mt-6">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={t.image.src} alt={t.name} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm text-gray-900">
                    @{t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurTestimonials;
