import { motion } from "framer-motion";

import {
  FiSearch,
  FiStar,
} from "react-icons/fi";

const filterIcons = {
  All: "🛒",
  Seed: "🌱",
  Fertilizer: "🧪",
  Pesticide: "🛡️",
};

export default function MarketplaceFilters({
  categories = [],
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
  aiOnly,
  onToggleAI,
  totalProducts,
}) {
  return (
    <div className="space-y-5">


      <div className="relative">
        <FiSearch
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2

            text-slate-400
          "
        />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            onSearchChange(
              e.target.value
            )
          }
          placeholder="Cari benih, pupuk, pestisida..."
          className="
            h-14
            w-full

            rounded-2xl

            border
            border-slate-200

            bg-white

            pl-12
            pr-4

            text-sm

            outline-none

            transition-all

            focus:border-green-500
            focus:ring-4
            focus:ring-green-100
          "
        />
      </div>


      <div
        className="
          flex
          flex-col
          gap-4

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >
          {categories.map(
            (category) => (
              <motion.button
                key={category}
                layout
                onClick={() =>
                  onCategoryChange(
                    category
                  )
                }
                className={`
                  relative

                  flex
                  items-center
                  gap-2

                  rounded-full

                  px-5
                  py-3

                  text-sm
                  font-medium

                  transition-all

                  ${
                    activeCategory ===
                    category
                      ? "text-green-800"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-green-200 hover:text-green-700"
                  }
                `}
              >
                {activeCategory ===
                  category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="
                      absolute
                      inset-0

                      rounded-full

                      bg-gradient-to-r
                      from-green-300
                      to-emerald-200
                    "
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {
                    filterIcons[
                      category
                    ]
                  }
                </span>

                <span className="relative z-10">
                  {category}
                </span>
              </motion.button>
            )
          )}
        </div>


        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >

          <motion.button
            whileTap={{
              scale: 0.97,
            }}
            onClick={
              onToggleAI
            }
            className={`
              flex
              items-center
              gap-2

              rounded-full

              px-4
              py-3

              text-sm
              font-medium

              transition-all

              ${
                aiOnly
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-green-200"
              }
            `}
          >
            <FiStar />

            AI Recommended
          </motion.button>


          <div
            className="
              rounded-full

              bg-slate-100

              px-4
              py-3

              text-sm
              font-medium

              text-slate-600
            "
          >
            {totalProducts} Products
          </div>
        </div>
      </div>
    </div>
  );
}