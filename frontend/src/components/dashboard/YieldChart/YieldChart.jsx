import { useState } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { yieldData } from "../../../data/dashboard/yieldData";

import ChartLegend from "./ChartLegend";
import TimeFilter from "./TimeFilter";
import CustomTooltip from "./CustomTooltip";
import AIInsight from "./AIInsight";

export default function YieldChart() {
  const [period, setPeriod] = useState("5y");

  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-[28px]
        p-8
      "
    >
      {/* HEADER */}

      <div
        className="
          flex
          flex-col
          gap-6

          xl:flex-row
          xl:items-start
          xl:justify-between
        "
      >
        <div className="flex flex-col xl:flex-row gap-8">
          <h2
            className="
              text-[22px]
              font-semibold
              text-slate-900
              leading-tight
            "
          >
            Predicted Yield
          </h2>

          <ChartLegend />
        </div>

        <TimeFilter
          value={period}
          onChange={setPeriod}
        />
      </div>

      {/* DIVIDER */}

      <div className="my-8 border-t border-slate-200" />

      {/* CHART */}

      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={yieldData}>
            <CartesianGrid
              stroke="#E5E7EB"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="prediction"
              stroke="#047857"
              strokeWidth={6}
              dot={false}
              activeDot={{
                r: 7,
                fill: "#047857",
              }}
            />

            <Line
              type="monotone"
              dataKey="actual"
              stroke="#6B7280"
              strokeWidth={5}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="regional"
              stroke="#9CA3AF"
              strokeWidth={4}
              strokeDasharray="8 8"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <AIInsight />
    </div>
  );
}