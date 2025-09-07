import { ChartContainer } from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import React from "react";
import { motion } from "framer-motion";
import { solutionsData } from "@/assets/assets";

// Real interventions and solutions

const chartVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function MentalHealthSolutionsChart(props) {
  const radarOnly = props && props.radarOnly;
  return (
    <div className="flex flex-col gap-8">
      <h2 className=" text-green-600 text-sm">Mental Health Solutions</h2>
      {/* Radar Chart only if radarOnly, else all charts */}
      {radarOnly ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={chartVariants}
        >
          <ChartContainer config={{}}>
            <RadarChart
              cx={200}
              cy={125}
              outerRadius={80}
              width={400}
              height={250}
              data={solutionsData.prevention}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="label" />
              <PolarRadiusAxis />
              <Radar
                name="Prevention Strategies"
                dataKey="value"
                stroke="#22c55e"
                fill="#22c55e"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ChartContainer>
        </motion.div>
      ) : (
        <>{/* ...existing code for all charts... */}</>
      )}
    </div>
  );
}
