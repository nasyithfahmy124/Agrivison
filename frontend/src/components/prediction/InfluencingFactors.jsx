import { motion } from "framer-motion";

import {
  FiCloudRain,
  FiMapPin,
  FiLayers,
  FiCpu,
} from "react-icons/fi";

import FactorProgress from "./FactorProgress";

export default function InfluencingFactors() {
  const factors = [
    {
      label: "Cuaca",
      value: 92,
      description:
        "Rainfall and temperature are at ideal levels for plant growth.",
      icon: FiCloudRain,
    },
    {
      label: "Varietas",
      value: 85,
      description:
        "Seeds of Inpari 32 have high performance under the current field conditions.",
      icon: FiLayers,
    },
    {
      label: "Lokasi",
      value: 80,
      description:
        "Soil fertility and geographic conditions support crop productivity.",
      icon: FiMapPin,
    },
  ];

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

      <div
        className="
          flex
          items-start
          justify-between
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
            Faktor yang Mempengaruhi
          </h2>

          <p
            className="
              mt-2

              text-slate-500
            "
          >
            Analysis of the main factors that
            are used by AI to calculate
            the probability of successful harvest.
          </p>
        </div>

        <div
          className="
            flex
            items-center
            gap-2

            rounded-full

            bg-green-100

            px-3
            py-1

            text-xs
            font-medium

            text-green-700
          "
        >
          <FiCpu />

          AI Analysis
        </div>
      </div>


      <div className="mt-8 space-y-8">
        {factors.map((factor) => (
          <FactorProgress
            key={factor.label}
            label={factor.label}
            value={factor.value}
            description={
              factor.description
            }
          />
        ))}
      </div>


      <div
        className="
          mt-8

          rounded-3xl

          bg-green-50

          p-5
        "
      >
        <h4
          className="
            font-semibold

            text-green-800
          "
        >
          Insight AI
        </h4>

        <p
          className="
            mt-2

            text-sm

            leading-relaxed

            text-green-700
          "
        >
          Weather factors have
          the most significant impact on
          the success of the harvest in this
          planting season. The prediction shows
          conditions that are very supportive
          for achieving optimal results.
        </p>
      </div>
    </motion.div>
  );
}