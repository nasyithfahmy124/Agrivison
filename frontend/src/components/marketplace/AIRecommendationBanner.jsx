import { motion } from "framer-motion";

import {
  FiAward,
  FiArrowRight,
} from "react-icons/fi";

export default function AIRecommendationBanner({
  recommendation,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        overflow-hidden rounded-[24px] border border-green-200 bg-gradient-to-r from-green-100 via-green-50 to-slate-50 px-8 py-7">
      <div className=" flex flex-col
          gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-5">

          <div
            className="
              flex
              h-16
              w-16

              shrink-0

              items-center
              justify-center

              rounded-full

              border
              border-green-200

              bg-green-100
            "
          >
            <div
              className="
                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                bg-green-700

                text-white
              "
            >
              <FiAward size={18} />
            </div>
          </div>

          <div className="max-w-2xl">
            <h2
              className="
                text-3xl
                font-bold

                text-slate-900
              "
            >
              AI Recommendations for
              Your Land
            </h2>

            <p
              className="
                mt-3

                text-lg

                leading-relaxed

                text-slate-600
              "
            >
              Based on the condition
              of your land (Block A),
              current soil moisture
              level, and the weather
              forecast for the coming
              week, we recommend{" "}
              <span
                className="
                  font-semibold

                  text-green-700
                "
              >
                {
                  recommendation.product
                }
              </span>{" "}
              for optimal harvest results.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            flex
            h-14

            items-center
            gap-3

            rounded-2xl

            bg-green-400

            px-7

            font-semibold

            text-green-900

            shadow-sm

            transition-all

            hover:bg-green-500
          "
        >
          View Recommendations

          <FiArrowRight />
        </motion.button>
      </div>
    </motion.div>
  );
}