import { motion } from "framer-motion";

export default function YieldForecastCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        rounded-[20px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      {/* Title */}

      <h2
        className="
          text-[30px]
          font-bold
          tracking-tight
          text-slate-900
        "
      >
        Yield Forecast
      </h2>

      {/* Yield */}

      <div className="mt-10 text-center">
        <h3
          className="
            text-6xl
            font-bold
            tracking-tight
            text-green-700
          "
        >
          6.2 - 6.8
        </h3>

        <p
          className="
            mt-2
            text-sm
            font-medium
            text-slate-500
          "
        >
          Tons / Ha
        </p>
      </div>

      {/* Divider */}

      <div
        className="
          my-8
          border-t
          border-slate-200
        "
      />

      {/* Revenue */}

      <div className="text-center">
        <p
          className="
            text-sm
            font-medium
            text-slate-500
          "
        >
          Estimated Revenue
        </p>

        <h3
          className="
            mt-3
            text-[40px]
            font-bold
            tracking-tight
            text-green-700
          "
        >
          Rp 37 - 41M
        </h3>
      </div>

      {/* Button */}

      <button
        className="
          mt-8
          w-full
          rounded-xl
          bg-green-700
          px-5
          py-4
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-green-800
          hover:shadow-lg
          hover:shadow-green-200
        "
      >
        View Prediction Details
      </button>
    </motion.div>
  );
}