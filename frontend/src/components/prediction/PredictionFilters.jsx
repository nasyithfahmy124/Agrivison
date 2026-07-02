import { motion } from "framer-motion";

import {
  FiMapPin,
  FiCalendar,
  FiGrid,
  FiRefreshCw,
} from "react-icons/fi";

export default function PredictionFilters({
  location = "Demak, Jawa Tengah",
  season = "Mei - Agustus 2026",
  landArea = "1 Hektar",
  onRecalculate,
}) {
  const filters = [
    {
      icon: FiMapPin,
      label: "Lokasi",
      value: location,
    },
    {
      icon: FiCalendar,
      label: "Musim Tanam",
      value: season,
    },
    {
      icon: FiGrid,
      label: "Luas Lahan",
      value: landArea,
    },
  ];

  return (
    <div
      className="
        mt-8

        grid
        gap-4

        lg:grid-cols-[1fr_1fr_1fr_auto]
      "
    >
      {filters.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            whileHover={{
              y: -2,
            }}
            className="
              flex
              items-center
              gap-4

              rounded-2xl

              border
              border-slate-200

              bg-white

              px-5
              py-4

              shadow-sm

              transition-all

              hover:border-green-200
              hover:shadow-md
            "
          >

            <div
              className="
                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-xl

                bg-green-50

                text-green-700
              "
            >
              <Icon size={18} />
            </div>


            <div>
              <p
                className="
                  text-xs

                  font-medium

                  text-slate-500
                "
              >
                {item.label}
              </p>

              <p
                className="
                  mt-1

                  text-sm
                  font-semibold

                  text-slate-900
                "
              >
                {item.value}
              </p>
            </div>
          </motion.div>
        );
      })}


      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={onRecalculate}
        className="
          flex
          h-full
          min-h-[72px]

          items-center
          justify-center
          gap-3

          rounded-2xl

          bg-green-400

          px-8

          text-sm
          font-semibold

          text-green-900

          shadow-sm

          transition-all

          hover:bg-green-500
          hover:shadow-md
        "
      >
        <FiRefreshCw size={18} />

        Recalculate
      </motion.button>
    </div>
  );
}