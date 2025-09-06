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

export default function MentalHealthProblemsChart() {
  return (
    <div className="flex flex-col items-center justify-center mr-[2rem] gap-12 w-full">
      {/* Bar Chart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={chartVariants}
      >
        <div className="w-full h-[220px] md:h-[250px] overflow-x-auto p-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={problemsData.prevalence}>
              <XAxis dataKey="label" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
              <Bar dataKey="value" fill="#ef4444">
                {problemsData.prevalence.map((entry, idx) => (
                  <Cell key={`cell-bar-${idx}`} fill="#ef4444" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      {/* Pie Chart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={chartVariants}
      >
        <div className="w-full h-[220px] md:h-[250px] overflow-x-auto p-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={problemsData.prevalence}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                outerRadius={60}
                label={({ name }) => name}
              >
                {problemsData.prevalence.map((entry, idx) => (
                  <Cell
                    key={`cell-pie-${idx}`}
                    fill={
                      [
                        "#ef4444", // red
                        "#f59e42", // orange
                        "#fbbf24", // yellow
                        "#10b981", // green
                        "#3b82f6", // blue
                        "#6366f1", // indigo
                      ][idx % 6]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      {/* Radar Chart */}
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
      {/* Line Chart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={chartVariants}
      >
        <div className="w-full h-[220px] md:h-[250px] overflow-x-auto p-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={problemsData.substance}>
              <XAxis dataKey="label" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
              <Line type="monotone" dataKey="value" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      {/* Area Chart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={chartVariants}
      >
        <div className="w-full h-[220px] md:h-[250px] overflow-x-auto p-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={problemsData.prevalence}>
              <XAxis dataKey="label" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "10px" }} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#ef4444"
                fill="#fee2e2"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
