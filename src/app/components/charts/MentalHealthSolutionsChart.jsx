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

export default function MentalHealthSolutionsChart() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className=" text-green-600 text-sm">Mental Health Solutions</h2>
      {/* Bar Chart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={chartVariants}
      >
        <ChartContainer config={{}}>
          <BarChart width={400} height={250} data={solutionsData.interventions}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#22c55e">
              {solutionsData.interventions.map((entry, idx) => (
                <Cell key={`cell-bar-${idx}`} fill="#22c55e" />
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
              data={solutionsData.outcomes}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {solutionsData.outcomes.map((entry, idx) => (
                <Cell
                  key={`cell-pie-${idx}`}
                  fill={
                    [
                      "#22c55e", // green
                      "#fbbf24", // yellow
                      "#3b82f6", // blue
                      "#6366f1", // indigo
                    ][idx % 4]
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
          <LineChart
            width={400}
            height={250}
            data={solutionsData.interventions}
          >
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#22c55e" />
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
          <AreaChart width={400} height={250} data={solutionsData.outcomes}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              fill="#bbf7d0"
            />
          </AreaChart>
        </ChartContainer>
      </motion.div>
    </div>
  );
}
