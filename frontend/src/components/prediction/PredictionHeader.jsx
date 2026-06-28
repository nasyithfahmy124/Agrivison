import { motion } from "framer-motion";
import { FiInfo } from "react-icons/fi";

export default function PredictionHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        flex
        flex-col
        gap-5

        lg:flex-row
        lg:items-start
        lg:justify-between
      "
    >
      <div>
        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <h1
            className="
              text-[36px]
              font-bold
              leading-none

              text-slate-900
            "
          >
            AI Success Probability
          </h1>

          <span
            className="
              inline-flex
              items-center
              gap-1

              rounded-full

              bg-green-100

              px-2
              py-1

              text-[11px]
              font-medium

              text-green-700
            "
          >
            🤖 AI
          </span>
        </div>

        <p
          className="
            mt-3

            text-[15px]

            text-slate-500
          "
        >
          Prediksi peluang berhasil panen
          sebelum Anda menanam.
        </p>
      </div>

      {/* RIGHT */}

      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          flex
          h-12

          items-center
          gap-2

          rounded-xl

          border
          border-slate-200

          bg-white

          px-5

          text-sm
          font-medium

          text-slate-700

          shadow-sm

          transition-all

          hover:border-slate-300
          hover:shadow-md
        "
      >
        <FiInfo size={16} />

        Tentang Fitur
      </motion.button>
    </motion.div>
  );
}