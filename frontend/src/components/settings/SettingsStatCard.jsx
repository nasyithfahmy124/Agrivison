import { motion } from "framer-motion";

export default function SettingsStatCard({
  icon: Icon,
  label,
  value,
  accent = "green",
}) {
  const accentStyles = {
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
    },

    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
    },

    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
    },
  };

  const current =
    accentStyles[accent] ||
    accentStyles.green;

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
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        flex
        h-full
        min-h-[130px]
        flex-col
        items-center
        justify-center

        rounded-[24px]

        border
        border-slate-200

        bg-white

        p-6

        shadow-sm

        transition-all
      "
    >
      {/* Icon */}

      <div
        className={`
          mb-4

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-2xl

          ${current.bg}
          ${current.text}
        `}
      >
        <Icon size={22} />
      </div>

      {/* Label */}

      <p
        className="
          text-[11px]
          font-semibold

          uppercase

          tracking-[0.18em]

          text-slate-400
        "
      >
        {label}
      </p>

      {/* Value */}

      <h3
        className="
          mt-2

          text-center

          text-[28px]
          font-bold

          leading-tight

          text-slate-900
        "
      >
        {value}
      </h3>
    </motion.div>
  );
}