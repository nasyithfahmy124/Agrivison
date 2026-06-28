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
        "Curah hujan dan suhu berada pada kondisi ideal untuk pertumbuhan tanaman.",
      icon: FiCloudRain,
    },
    {
      label: "Varietas",
      value: 85,
      description:
        "Benih Inpari 32 memiliki performa tinggi pada kondisi lahan saat ini.",
      icon: FiLayers,
    },
    {
      label: "Lokasi",
      value: 80,
      description:
        "Kesuburan tanah dan kondisi geografis mendukung produktivitas panen.",
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
      {/* Header */}

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
            Analisis faktor utama yang
            digunakan AI untuk menghitung
            peluang keberhasilan panen.
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

      {/* Factors */}

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

      {/* Footer */}

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
          Faktor cuaca memiliki
          pengaruh terbesar terhadap
          keberhasilan panen pada musim
          tanam ini. Prediksi menunjukkan
          kondisi yang sangat mendukung
          untuk mencapai hasil optimal.
        </p>
      </div>
    </motion.div>
  );
}