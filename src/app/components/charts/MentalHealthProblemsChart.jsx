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
import { problemsData } from "@/assets/assets";

// Real data from WHO 2025

const chartVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function MentalHealthProblemsChart() {
  return (
    <div className="flex flex-col  gap-8">
      <h2 className=" text-red-600 text-sm md:text-md">Causes and Triggers</h2>
      {/* Bar Chart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={chartVariants}
      >
        <ChartContainer config={{}}>
          <BarChart width={400} height={250} data={problemsData.prevalence}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#ef4444">
              {problemsData.prevalence.map((entry, idx) => (
                <Cell key={`cell-bar-${idx}`} fill="#ef4444" />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </motion.div>
      {/* Pie Chart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={chartVariants}
      >
        <ChartContainer config={{}}>
          <PieChart width={400} height={250}>
            <Pie
              data={problemsData.prevalence}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={80}
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
            <Legend />
          </PieChart>
        </ChartContainer>
      </motion.div>
      {/* Radar Chart */}
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
            <Legend />
          </RadarChart>
        </ChartContainer>
      </motion.div>
      {/* Line Chart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={chartVariants}
      >
        <ChartContainer config={{}}>
          <LineChart width={400} height={250} data={problemsData.substance}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#ef4444" />
          </LineChart>
        </ChartContainer>
      </motion.div>
      {/* Area Chart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={chartVariants}
      >
        <ChartContainer config={{}}>
          <AreaChart width={400} height={250} data={problemsData.prevalence}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#ef4444"
              fill="#fee2e2"
            />
          </AreaChart>
        </ChartContainer>
      </motion.div>
    </div>
  );
}
