import { ResponsiveContainer } from "recharts";
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
import { problemsData } from "@/assets/assets";

// Real data from WHO 2025

const chartVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function MentalHealthProblemsChart(props) {
  const radarOnly = props && props.radarOnly;
  return (
    <div className="flex flex-col items-center justify-center mr-[2rem] gap-12 w-full">
      {/* Radar Chart only if radarOnly, else all charts */}
      {radarOnly ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={chartVariants}
        >
          <div className="w-full h-[220px] md:h-[250px] overflow-x-auto p-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx={120}
                cy={100}
                outerRadius={60}
                data={problemsData.riskFactors}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="label" />
                <PolarRadiusAxis />
                <Radar
                  name="Risk Factors"
                  dataKey="value"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.6}
                />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "10px" }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      ) : (
        <>{/* ...existing code for all charts... */}</>
      )}
    </div>
  );
}
