import { motion } from "framer-motion";

import {
  FiMapPin,
  FiPlus,
} from "react-icons/fi";

export default function SettingsProfileCard({
  user = {
    name: "Nasyith",
    role: "Farmer",
    location:
      "Semarang, Central Java",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=400",
  },

  onAddEntry = () => {},
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
        duration: 0.5,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        relative

        overflow-hidden

        rounded-[28px]

        border
        border-slate-200

        bg-white

        p-6

        shadow-sm

        transition-all
      "
    >
      {/* Background Shape */}

      <div
        className="
          absolute

          -right-16
          -top-16

          h-48
          w-48

          rounded-full

          bg-slate-100/80
        "
      />

      <div
        className="
          relative

          flex
          flex-col
          gap-6

          lg:flex-row
          lg:items-center
        "
      >
        {/* Avatar */}

        <div className="relative">
          <motion.img
            whileHover={{
              scale: 1.05,
            }}
            src={user.avatar}
            alt={user.name}
            className="
              h-24
              w-24

              rounded-full

              border-4
              border-green-200

              object-cover

              shadow-lg
            "
          />

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onAddEntry}
            className="
              absolute

              -bottom-2
              left-1/2

              flex
              -translate-x-1/2

              items-center
              gap-2

              rounded-full

              bg-green-700

              px-4
              py-2

              text-xs
              font-medium

              text-white

              shadow-lg
              shadow-green-700/20

              transition-all

              hover:bg-green-800
            "
          >
            <FiPlus size={14} />
            Add Entry
          </motion.button>
        </div>

        {/* Profile Content */}

        <div className="flex-1">
          <h1
            className="
              text-4xl
              font-bold

              tracking-tight

              text-slate-900
            "
          >
            {user.name}
          </h1>

          <div
            className="
              mt-2

              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {/* Role */}

            <span
              className="
                rounded-full

                bg-green-100

                px-3
                py-1

                text-xs
                font-medium

                text-green-700
              "
            >
              {user.role}
            </span>

            {/* Location */}

            <div
              className="
                flex
                items-center
                gap-1

                text-sm

                text-slate-500
              "
            >
              <FiMapPin
                size={14}
              />

              {user.location}
            </div>
          </div>

          <p
            className="
              mt-3

              text-sm

              text-slate-500
            "
          >
            Your latest agricultural
            activities and field
            observations.
          </p>
        </div>
      </div>
    </motion.div>
  );
}