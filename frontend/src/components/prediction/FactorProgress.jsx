import { motion } from "framer-motion";

export default function FactorProgress({
  label,
  value,
  description,
}) {
  return (
    <div>
      <div
        className="
          mb-2

          flex
          items-center
          justify-between
        "
      >
        <h4
          className="
            font-semibold

            text-slate-900
          "
        >
          {label}
        </h4>

        <span
          className="
            text-sm
            font-semibold

            text-green-700
          "
        >
          {value}%
        </span>
      </div>

      <div
        className="
          h-3

          overflow-hidden

          rounded-full

          bg-slate-100
        "
      >
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${value}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            h-full

            rounded-full

            bg-gradient-to-r
            from-green-500
            to-emerald-500
          "
        />
      </div>

      <p
        className="
          mt-2

          text-sm

          text-slate-500
        "
      >
        {description}
      </p>
    </div>
  );
}