import React, { useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Timeline } from "@/components/ui/timeline";
import { AudioWaveform, ChartSpline, Lightbulb } from "lucide-react";
import { ChartAreaInteractive } from "./charts/ChartAreaInteractive";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { soln, survey } from "@/assets/images";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "recharts";
import { Input } from "@/components/ui/input";
import { Calendar24 } from "@/components/ui/calendar24";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OurWork = () => {
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
            <Sheet className="">
              <SheetTrigger asChild>
                <Button className="bg-cyan-600 active:bg-cyan-500 md:hover:bg-indigo-700 transition-all duration-500 text-white font-medium !px-8 !py-3 rounded-full">
                  Book An Appointment
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto px-6 py-6 max-h-screen">
                <SheetHeader>
                  <SheetTitle>Book Your Appointment</SheetTitle>
                  <SheetDescription>
                    Fill out the form below to book a session with our mental
                    health professionals. All information is confidential.
                  </SheetDescription>
                </SheetHeader>
                <form className="grid gap-6 mt-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 602-774-4735"
                      required
                    />
                  </div>
                  <Calendar24 />
                  <div className="grid gap-3">
                    <Label htmlFor="type">Session Type</Label>
                    <Select name="type" required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="virtual">
                          Virtual (Online)
                        </SelectItem>
                        <SelectItem value="in-person">In-Person</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="concern">Main Concern</Label>
                    <Input
                      id="concern"
                      name="concern"
                      placeholder="e.g. Anxiety, Depression, ADHD"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Input
                      id="notes"
                      name="notes"
                      placeholder="Anything else we should know?"
                    />
                  </div>
                  <SheetFooter className="mt-6 flex gap-4">
                    <Button type="submit" className="bg-cyan-600 text-white">
                      Book Appointment
                    </Button>
                    <SheetClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </SheetClose>
                  </SheetFooter>
                </form>
              </SheetContent>
            </Sheet>
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
          <div className="w-full">
            <ChartAreaInteractive />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip md:!px-[5%] !py-[5rem]">
      <h1 className="text-4xl md:text-9xl font-extrabold tracking-tighter text-gray-300 text-center mb-12">
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
