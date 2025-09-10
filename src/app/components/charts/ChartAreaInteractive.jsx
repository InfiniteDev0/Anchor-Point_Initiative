"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", wellBeing: 60, attendance: 80, engagement: 65 },
  { date: "2024-04-02", wellBeing: 72, attendance: 85, engagement: 70 },
  { date: "2024-04-03", wellBeing: 55, attendance: 78, engagement: 60 },
  { date: "2024-04-04", wellBeing: 80, attendance: 90, engagement: 75 },
  { date: "2024-04-05", wellBeing: 66, attendance: 70, engagement: 82 },
  { date: "2024-04-06", wellBeing: 90, attendance: 95, engagement: 88 },
  { date: "2024-04-07", wellBeing: 68, attendance: 87, engagement: 74 },
  { date: "2024-04-08", wellBeing: 77, attendance: 60, engagement: 85 },
  { date: "2024-04-09", wellBeing: 70, attendance: 89, engagement: 76 },
  { date: "2024-04-10", wellBeing: 61, attendance: 92, engagement: 67 },
  { date: "2024-04-11", wellBeing: 82, attendance: 75, engagement: 78 },
  { date: "2024-04-12", wellBeing: 73, attendance: 92, engagement: 79 },
  { date: "2024-04-13", wellBeing: 60, attendance: 93, engagement: 80 },
  { date: "2024-04-14", wellBeing: 75, attendance: 94, engagement: 81 },
  { date: "2024-04-15", wellBeing: 66, attendance: 95, engagement: 82 },
  { date: "2024-04-16", wellBeing: 77, attendance: 96, engagement: 83 },
  { date: "2024-04-17", wellBeing: 88, attendance: 97, engagement: 84 },
  { date: "2024-04-18", wellBeing: 79, attendance: 98, engagement: 85 },
  { date: "2024-04-19", wellBeing: 80, attendance: 99, engagement: 86 },
  { date: "2024-04-20", wellBeing: 81, attendance: 100, engagement: 87 },
  { date: "2024-04-21", wellBeing: 62, attendance: 99, engagement: 88 },
  { date: "2024-04-22", wellBeing: 83, attendance: 98, engagement: 89 },
  { date: "2024-04-23", wellBeing: 74, attendance: 97, engagement: 90 },
  { date: "2024-04-24", wellBeing: 85, attendance: 96, engagement: 91 },
  { date: "2024-04-25", wellBeing: 66, attendance: 95, engagement: 92 },
  { date: "2024-04-26", wellBeing: 87, attendance: 94, engagement: 93 },
  { date: "2024-04-27", wellBeing: 78, attendance: 93, engagement: 94 },
  { date: "2024-04-28", wellBeing: 89, attendance: 92, engagement: 95 },
  { date: "2024-04-29", wellBeing: 70, attendance: 91, engagement: 96 },
  { date: "2024-04-30", wellBeing: 91, attendance: 90, engagement: 97 },
  { date: "2024-05-01", wellBeing: 82, attendance: 89, engagement: 98 },
  { date: "2024-05-02", wellBeing: 93, attendance: 88, engagement: 99 },
  { date: "2024-05-03", wellBeing: 74, attendance: 87, engagement: 100 },
  { date: "2024-05-04", wellBeing: 85, attendance: 86, engagement: 99 },
  { date: "2024-05-05", wellBeing: 96, attendance: 85, engagement: 98 },
  { date: "2024-05-06", wellBeing: 77, attendance: 84, engagement: 97 },
  { date: "2024-05-07", wellBeing: 98, attendance: 83, engagement: 96 },
  { date: "2024-05-08", wellBeing: 79, attendance: 82, engagement: 95 },
  { date: "2024-05-09", wellBeing: 90, attendance: 81, engagement: 94 },
  { date: "2024-05-10", wellBeing: 61, attendance: 80, engagement: 93 },
  { date: "2024-05-11", wellBeing: 92, attendance: 79, engagement: 92 },
  { date: "2024-05-12", wellBeing: 73, attendance: 78, engagement: 91 },
  { date: "2024-05-13", wellBeing: 84, attendance: 77, engagement: 90 },
  { date: "2024-05-14", wellBeing: 95, attendance: 76, engagement: 89 },
  { date: "2024-05-15", wellBeing: 66, attendance: 75, engagement: 88 },
  { date: "2024-05-16", wellBeing: 87, attendance: 74, engagement: 87 },
  { date: "2024-05-17", wellBeing: 78, attendance: 73, engagement: 86 },
  { date: "2024-05-18", wellBeing: 89, attendance: 72, engagement: 85 },
  { date: "2024-05-19", wellBeing: 70, attendance: 71, engagement: 84 },
  { date: "2024-05-20", wellBeing: 81, attendance: 70, engagement: 83 },
  { date: "2024-05-21", wellBeing: 92, attendance: 69, engagement: 82 },
  { date: "2024-05-22", wellBeing: 73, attendance: 68, engagement: 81 },
  { date: "2024-05-23", wellBeing: 84, attendance: 67, engagement: 80 },
  { date: "2024-05-24", wellBeing: 95, attendance: 66, engagement: 79 },
  { date: "2024-05-25", wellBeing: 76, attendance: 65, engagement: 78 },
  { date: "2024-05-26", wellBeing: 87, attendance: 64, engagement: 77 },
  { date: "2024-05-27", wellBeing: 78, attendance: 63, engagement: 76 },
  { date: "2024-05-28", wellBeing: 89, attendance: 62, engagement: 75 },
  { date: "2024-05-29", wellBeing: 70, attendance: 61, engagement: 74 },
  { date: "2024-05-30", wellBeing: 81, attendance: 60, engagement: 73 },
  { date: "2024-05-31", wellBeing: 92, attendance: 59, engagement: 72 },
  { date: "2024-06-01", wellBeing: 73, attendance: 58, engagement: 71 },
  { date: "2024-06-02", wellBeing: 84, attendance: 57, engagement: 70 },
  { date: "2024-06-03", wellBeing: 95, attendance: 56, engagement: 69 },
  { date: "2024-06-04", wellBeing: 76, attendance: 55, engagement: 68 },
  { date: "2024-06-05", wellBeing: 87, attendance: 54, engagement: 67 },
  { date: "2024-06-06", wellBeing: 78, attendance: 53, engagement: 66 },
  { date: "2024-06-07", wellBeing: 89, attendance: 52, engagement: 65 },
  { date: "2024-06-08", wellBeing: 70, attendance: 51, engagement: 64 },
  { date: "2024-06-09", wellBeing: 81, attendance: 50, engagement: 63 },
  { date: "2024-06-10", wellBeing: 92, attendance: 49, engagement: 62 },
  { date: "2024-06-11", wellBeing: 73, attendance: 48, engagement: 61 },
  { date: "2024-06-12", wellBeing: 84, attendance: 47, engagement: 60 },
  { date: "2024-06-13", wellBeing: 95, attendance: 46, engagement: 59 },
  { date: "2024-06-14", wellBeing: 76, attendance: 45, engagement: 58 },
  { date: "2024-06-15", wellBeing: 87, attendance: 44, engagement: 57 },
  { date: "2024-06-16", wellBeing: 78, attendance: 43, engagement: 56 },
  { date: "2024-06-17", wellBeing: 89, attendance: 42, engagement: 55 },
  { date: "2024-06-18", wellBeing: 70, attendance: 41, engagement: 54 },
  { date: "2024-06-19", wellBeing: 81, attendance: 40, engagement: 53 },
  { date: "2024-06-20", wellBeing: 92, attendance: 39, engagement: 52 },
  { date: "2024-06-21", wellBeing: 73, attendance: 38, engagement: 51 },
  { date: "2024-06-22", wellBeing: 84, attendance: 37, engagement: 50 },
  { date: "2024-06-23", wellBeing: 95, attendance: 36, engagement: 49 },
  { date: "2024-06-24", wellBeing: 76, attendance: 35, engagement: 48 },
  { date: "2024-06-25", wellBeing: 87, attendance: 34, engagement: 47 },
  { date: "2024-06-26", wellBeing: 78, attendance: 33, engagement: 46 },
  { date: "2024-06-27", wellBeing: 89, attendance: 32, engagement: 45 },
  { date: "2024-06-28", wellBeing: 70, attendance: 31, engagement: 44 },
  { date: "2024-06-29", wellBeing: 81, attendance: 30, engagement: 43 },
  { date: "2024-06-30", wellBeing: 92, attendance: 29, engagement: 42 },
];

const chartConfig = {
  wellBeing: {
    label: "Well-being",
    color: "#06b6d4", // cyan
  },
  attendance: {
    label: "Attendance",
    color: "#22c55e", // green
  },
  engagement: {
    label: "Engagement",
    color: "#f59e42", // orange
  },
};

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="hidden md:flex pt-0 dark">
      <CardHeader className="hidden md:flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillWellBeing" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillAttendance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e42" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f59e42" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="wellBeing"
              type="natural"
              fill="url(#fillWellBeing)"
              stroke="#06b6d4"
              stackId="a"
            />
            <Area
              dataKey="attendance"
              type="natural"
              fill="url(#fillAttendance)"
              stroke="#22c55e"
              stackId="a"
            />
            <Area
              dataKey="engagement"
              type="natural"
              fill="url(#fillEngagement)"
              stroke="#f59e42"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
