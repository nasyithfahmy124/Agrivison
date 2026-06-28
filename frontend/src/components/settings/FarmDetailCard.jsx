import { motion } from "framer-motion";
import {
  FiPackage,
} from "react-icons/fi";

export default function FarmDetailCard({
  farm = {
    crop: "Rice",
    location: "Demak Regency",
    status: "Healthy",
  },
}) {
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
      transition={{
        duration: 0.4,
      }}
      className="
        overflow-hidden

        rounded-[28px]

        border
        border-slate-200

        bg-white

        shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between

          border-b
          border-slate-100

          px-6
          py-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <FiPackage
            className="
              text-green-700
            "
            size={18}
          />

          <h2
            className="
              text-lg
              font-semibold

              text-slate-900
            "
          >
            Farm Details
          </h2>
        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            text-sm
            font-medium

            text-green-700

            transition-colors

            hover:text-green-800
          "
        >
          Update
        </motion.button>
      </div>

      {/* Content */}

      <div
        className="
          grid

          gap-8

          px-6
          py-7

          md:grid-cols-3
        "
      >
        {/* Crop */}

        <motion.div
          whileHover={{
            y: -2,
          }}
        >
          <p
            className="
              text-sm

              text-slate-500
            "
          >
            Crop Type
          </p>

          <h3
            className="
              mt-2

              text-[20px]
              font-bold

              text-slate-900
            "
          >
            {farm.crop}
          </h3>

          <div
            className="
              mt-3

              h-1
              w-10

              rounded-full

              bg-green-400
            "
          />
        </motion.div>

        {/* Location */}

        <motion.div
          whileHover={{
            y: -2,
          }}
        >
          <p
            className="
              text-sm

              text-slate-500
            "
          >
            Farm Location
          </p>

          <h3
            className="
              mt-2

              text-[20px]
              font-bold

              text-slate-900
            "
          >
            {farm.location}
          </h3>

          <div
            className="
              mt-3

              h-1
              w-10

              rounded-full

              bg-green-400
            "
          />
        </motion.div>

        {/* Status */}

        <motion.div
          whileHover={{
            y: -2,
          }}
        >
          <p
            className="
              text-sm

              text-slate-500
            "
          >
            Farm Status
          </p>

          <h3
            className="
              mt-2

              text-[20px]
              font-bold

              text-slate-900
            "
          >
            {farm.status}
          </h3>

          <div
            className="
              mt-3

              h-1
              w-10

              rounded-full

              bg-green-400
            "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}