import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  FiTrendingUp,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";

export default function SuccessProbabilityCard({
  probability = 87,
}) {
  const radius = 90;
  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (probability / 100) *
      circumference;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-slate-200

        bg-white

        p-8

        shadow-sm
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          right-0
          top-0

          h-40
          w-40

          rounded-full

          bg-green-100

          blur-3xl
        "
      />

      {/* Header */}

      <div
        className="
          relative

          flex
          items-center
          justify-between
        "
      >
        <div>
          <h3
            className="
              text-lg
              font-semibold

              text-slate-900
            "
          >
            AI Success Probability
          </h3>

          <p
            className="
              mt-1

              text-sm

              text-slate-500
            "
          >
            Prediksi peluang panen
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

          AI Engine
        </div>
      </div>

      {/* Circle */}

      <div
        className="
          relative

          mt-8

          flex
          justify-center
        "
      >
        <svg
          width="240"
          height="240"
          className="-rotate-90"
        >
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="14"
          />

          <motion.circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="#16a34a"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={
              circumference
            }
            initial={{
              strokeDashoffset:
                circumference,
            }}
            animate={{
              strokeDashoffset:
                offset,
            }}
            transition={{
              duration: 1.8,
            }}
          />
        </svg>

        {/* Center */}

        <div
          className="
            absolute
            inset-0

            flex
            flex-col
            items-center
            justify-center
          "
        >
          <h2
            className="
              text-6xl
              font-bold

              text-slate-900
            "
          >
            {probability}%
            
          </h2>

          <span
            className="
              mt-2

              rounded-full

              bg-green-100

              px-4
              py-1

              text-sm
              font-medium

              text-green-700
            "
          >
            Tinggi
          </span>
        </div>
      </div>

      {/* Insight */}

      <div
        className="
          mt-8

          rounded-3xl

          bg-slate-100

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
              text-green-600
            "
          />

          <h4
            className="
              font-semibold

              text-slate-900
            "
          >
            AI Insight
          </h4>
        </div>

        <p
          className="
            mt-3

            text-sm

            leading-relaxed

            text-slate-600
          "
        >
          Kondisi cuaca,
          kesuburan tanah,
          dan varietas yang
          digunakan menunjukkan
          peluang keberhasilan
          panen yang sangat baik.
        </p>
      </div>

      {/* Footer */}

      <div
        className="
          mt-6

          flex
          items-center
          gap-2

          text-sm

          text-green-700
        "
      >
        <FiCheckCircle />

        Rekomendasi AI:
        Lanjutkan penanaman
      </div>
    </motion.div>
  );
}