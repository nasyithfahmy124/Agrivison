import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

export default function FarmDetailItem({
  icon: Icon,
  label,
  value,
  showArrow = false,
}) {
  return (
    <motion.div
      whileHover={{
        x: 4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group

        flex
        items-center
        justify-between

        rounded-2xl

        border
        border-transparent

        px-3
        py-3

        transition-all
        duration-300

        hover:border-slate-100
        hover:bg-slate-50
      "
    >
      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 3,
          }}
          className="
            flex
            h-12
            w-12

            items-center
            justify-center

            rounded-2xl

            bg-green-50

            text-green-700
          "
        >
          <Icon size={20} />
        </motion.div>

        {/* Content */}

        <div>
          <p
            className="
              text-sm

              font-medium

              text-slate-500
            "
          >
            {label}
          </p>

          <h4
            className="
              mt-1

              text-base
              font-semibold

              text-slate-900
            "
          >
            {value}
          </h4>
        </div>
      </div>

      {/* Arrow */}

      {showArrow && (
        <motion.div
          initial={{
            opacity: 0,
            x: -5,
          }}
          whileHover={{
            x: 4,
          }}
          className="
            text-slate-400

            transition-all

            group-hover:text-slate-700
          "
        >
          <FiChevronRight size={18} />
        </motion.div>
      )}
    </motion.div>
  );
}