import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

import {
  FiTrendingUp,
  FiCpu,
} from "react-icons/fi";

import { predictionChartData } from "../../data/prediction/chartData";

function CustomTooltip({
  active,
  payload,
  label,
}) {
  if (
    active &&
    payload &&
    payload.length
  ) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          shadow-xl
        "
      >
        <p
          className="
            text-sm
            font-semibold
            text-slate-900
          "
        >
          {label}
        </p>

        {payload.map((item) => (
          <p
            key={item.dataKey}
            className="
              mt-2
              text-sm
            "
          >
            {item.name}:{" "}
            <span className="font-semibold">
              {item.value} Ton/Ha
            </span>
          </p>
        ))}
      </div>
    );
  }

  return null;
}

export default function PredictionChart() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="
        rounded-[32px]

        border
        border-slate-200

        bg-white

        p-8

        shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          gap-4

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <h2
            className="
              text-2xl
              font-bold

              text-slate-900
            "
          >
            Yield Forecast
          </h2>

          <p
            className="
              mt-2

              text-slate-500
            "
          >
            Prediksi hasil panen berdasarkan
            kondisi lahan dan AI model.
          </p>
        </div>

        <div
          className="
            flex
            items-center
            gap-2

            rounded-full

            bg-green-100

            px-4
            py-2

            text-sm
            font-medium

            text-green-700
          "
        >
          <FiCpu />

          AI Forecast Active
        </div>
      </div>

      {/* Chart */}

      <div className="mt-8 h-[380px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={predictionChartData}
          >
            <defs>
              <linearGradient
                id="yieldGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22c55e"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#22c55e"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e2e8f0"
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

            <Tooltip
              content={<CustomTooltip />}
            />

            <Legend />

            <Area
              type="monotone"
              dataKey="actual"
              name="Actual Yield"
              stroke="#16a34a"
              fill="url(#yieldGradient)"
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="predicted"
              name="AI Prediction"
              stroke="#0f172a"
              strokeDasharray="6 6"
              fill="transparent"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Insight */}

      <div
        className="
          mt-8

          rounded-3xl

          bg-green-50

          p-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <FiTrendingUp
            className="
              text-green-700
            "
          />

          <h3
            className="
              font-semibold

              text-green-800
            "
          >
            AI Forecast Insight
          </h3>
        </div>

        <p
          className="
            mt-3

            text-sm

            leading-relaxed

            text-green-700
          "
        >
          Berdasarkan pola cuaca,
          kelembaban tanah, dan
          varietas yang digunakan,
          hasil panen diperkirakan
          mencapai 6.4 Ton/Ha pada
          puncak musim panen.
        </p>
      </div>
    </motion.div>
  );
}