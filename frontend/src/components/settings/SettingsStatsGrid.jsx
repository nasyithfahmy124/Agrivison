import { motion } from "framer-motion";

import {
  FiAward,
  FiTrendingUp,
  FiGlobe,
} from "react-icons/fi";

import SettingsStatCard from "./SettingsStatCard";

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function SettingsStatsGrid({
  stats = {
    level: 1,
    harvests: 148,
    exports: 92,
  },
}) {
  const cards = [
    {
      icon: FiAward,
      label: "Level",
      value: (
        <>
          Agripreneur
          <br />
          Level {stats.level}
        </>
      ),
      accent: "green",
    },

    {
      icon: FiTrendingUp,
      label: "Total Harvests",
      value: (
        <>
          {stats.harvests}
          <br />
          Seasons
        </>
      ),
      accent: "emerald",
    },

    {
      icon: FiGlobe,
      label: "Successful Exports",
      value: (
        <>
          {stats.exports}
          <br />
          Successful
        </>
      ),
      accent: "green",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      className="
        grid
        gap-4

        grid-cols-1

        sm:grid-cols-2

        xl:grid-cols-3
      "
    >
      {cards.map((card) => (
        <SettingsStatCard
          key={card.label}
          icon={card.icon}
          label={card.label}
          value={card.value}
          accent={card.accent}
        />
      ))}
    </motion.div>
  );
}