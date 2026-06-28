import { motion } from "framer-motion";

import {
  FiLock,
  FiMail,
  FiShield,
  FiChevronRight,
} from "react-icons/fi";

function SecurityItem({
  icon: Icon,
  title,
  value,
  status,
}) {
  return (
    <motion.button
      whileHover={{
        x: 4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group

        flex
        w-full

        items-center
        justify-between

        rounded-2xl

        border
        border-transparent

        p-4

        text-left

        transition-all
        duration-300

        hover:border-slate-200
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

        <div
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
        </div>

        {/* Content */}

        <div>
          <h4
            className="
              font-semibold

              text-slate-900
            "
          >
            {title}
          </h4>

          <p
            className="
              mt-1

              text-sm

              text-slate-500
            "
          >
            {value}
          </p>
        </div>
      </div>

      {/* Right Side */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        {status && (
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
            {status}
          </span>
        )}

        <FiChevronRight
          className="
            text-slate-400

            transition-all

            group-hover:translate-x-1
            group-hover:text-slate-700
          "
        />
      </div>
    </motion.button>
  );
}

export default function SecurityCard() {
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
      whileHover={{
        y: -4,
      }}
      className="
        rounded-[28px]

        border
        border-slate-200

        bg-white

        p-6

        shadow-sm
      "
    >
      {/* Header */}

      <div>
        <h2
          className="
            text-xl
            font-bold

            text-slate-900
          "
        >
          Security & Login
        </h2>

        <p
          className="
            mt-1

            text-sm

            text-slate-500
          "
        >
          Manage your account security
          and authentication settings.
        </p>
      </div>

      {/* Items */}

      <div className="mt-6 space-y-2">
        <SecurityItem
          icon={FiLock}
          title="Password"
          value="Last changed 30 days ago"
        />

        <SecurityItem
          icon={FiMail}
          title="Email Address"
          value="nasyith@example.com"
          status="Verified"
        />

        <SecurityItem
          icon={FiShield}
          title="Two-Factor Authentication"
          value="Additional protection enabled"
          status="Active"
        />
      </div>

      {/* Footer */}

      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        className="
          mt-6

          rounded-2xl

          bg-green-50

          p-4
        "
      >
        <p
          className="
            text-sm

            font-medium

            text-green-800
          "
        >
          Security Status
        </p>

        <p
          className="
            mt-2

            text-sm

            leading-relaxed

            text-green-700
          "
        >
          Your account security is in
          excellent condition. All
          recommended protection methods
          are enabled.
        </p>
      </motion.div>
    </motion.div>
  );
}