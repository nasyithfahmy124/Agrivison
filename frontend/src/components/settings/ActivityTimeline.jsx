import { motion } from "framer-motion";

import ActivityItem from "./ActivityItem";

const timelineVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ActivityTimeline({
  activities = [
    {
      id: 1,
      type: "success",
      title: "AI Analysis Completed",
      description:
        "Harvest success probability increased to 87% after the latest weather forecast update.",
      time: "2 hours ago",
    },

    {
      id: 2,
      type: "warning",
      title: "Pest Risk Detected",
      description:
        "Potential brown planthopper activity identified in Block C. Immediate monitoring recommended.",
      time: "Yesterday",
    },

    {
      id: 3,
      type: "neutral",
      title:
        "Export Documentation Approved",
      description:
        "All required export documents have been successfully verified.",
      time: "3 days ago",
    },
  ],
}) {
  return (
    <motion.section
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

      <div
        className="
          flex
          flex-col
          gap-4

          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <h2
            className="
              text-2xl
              font-bold

              text-slate-900
            "
          >
            Agricultural Activity Journal
          </h2>

          <p
            className="
              mt-2

              text-sm

              text-slate-500
            "
          >
            Track farming activities,
            AI recommendations, crop
            monitoring results, and
            operational updates.
          </p>
        </div>

        <div
          className="
            rounded-full

            bg-green-50

            px-4
            py-2

            text-sm
            font-medium

            text-green-700
          "
        >
          {activities.length} Records
        </div>
      </div>

      {/* Timeline */}

      <motion.div
        variants={timelineVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="
          relative

          mt-10
        "
      >
        {/* Vertical Line */}

        <div
          className="
            absolute

            left-[23px]
            top-0
            bottom-0

            w-[2px]

            bg-slate-200
          "
        />

        <div className="space-y-8">
          {activities.map(
            (activity) => (
              <ActivityItem
                key={activity.id}
                activity={activity}
              />
            )
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}