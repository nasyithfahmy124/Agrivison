import { motion } from "framer-motion";

import {
  FiCheckCircle,
  FiAlertTriangle,
  FiFileText,
  FiChevronRight,
} from "react-icons/fi";

const iconMap = {
  success: {
    Icon: FiCheckCircle,
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-100",
  },

  warning: {
    Icon: FiAlertTriangle,
    bg: "bg-amber-100",
    text: "text-amber-700",
    border: "border-amber-100",
  },

  neutral: {
    Icon: FiFileText,
    bg: "bg-slate-100",
    text: "text-slate-700",
    border: "border-slate-200",
  },
};

export default function ActivityItem({
  activity,
}) {
  const config =
    iconMap[activity.type] ||
    iconMap.neutral;

  const Icon = config.Icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
      }}
      whileHover={{
        y: -2,
      }}
      className="
        relative

        flex
        gap-5
      "
    >
      {/* Timeline Icon */}

      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 4,
        }}
        className={`
          relative
          z-10

          flex
          h-12
          w-12

          shrink-0

          items-center
          justify-center

          rounded-full

          ${config.bg}
          ${config.text}
        `}
      >
        <Icon size={20} />
      </motion.div>

      {/* Content */}

      <motion.div
        whileHover={{
          x: 3,
        }}
        className={`
          group

          flex-1

          rounded-[24px]

          border

          ${config.border}

          bg-white

          p-5

          shadow-sm

          transition-all
          duration-300

          hover:shadow-md
        `}
      >
        {/* Header */}

        <div
          className="
            flex
            flex-col
            gap-2

            md:flex-row
            md:items-start
            md:justify-between
          "
        >
          <div>
            <h3
              className="
                text-base
                font-semibold

                text-slate-900
              "
            >
              {activity.title}
            </h3>

            <p
              className="
                mt-2

                text-sm

                leading-relaxed

                text-slate-600
              "
            >
              {activity.description}
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                whitespace-nowrap

                text-xs
                font-medium

                text-slate-400
              "
            >
              {activity.time}
            </span>

            <FiChevronRight
              size={16}
              className="
                text-slate-300

                transition-all

                group-hover:translate-x-1
                group-hover:text-slate-500
              "
            />
          </div>
        </div>

        {/* Footer Badge */}

        <div className="mt-4">
          <span
            className={`
              inline-flex

              rounded-full

              px-3
              py-1

              text-xs
              font-medium

              ${config.bg}
              ${config.text}
            `}
          >
            {activity.type ===
            "success"
              ? "Completed"
              : activity.type ===
                "warning"
              ? "Attention Required"
              : "Information"}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}