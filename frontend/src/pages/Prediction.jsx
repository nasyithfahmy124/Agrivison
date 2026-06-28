import { motion } from "framer-motion";

import DashboardTopBar from "../components/dashboard/DashboardTopBar";

import PredictionHeader from "../components/prediction/PredictionHeader";
import PredictionFilters from "../components/prediction/PredictionFilters";
import SuccessProbabilityCard from "../components/prediction/SuccessProbabilityCard";
import InfluencingFactors from "../components/prediction/InfluencingFactors";
import PredictionChart from "../components/prediction/PredictionChart";
import YieldForecastCard from "../components/prediction/YieldForecastCard";


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Prediction() {
  return (
    <>
      <DashboardTopBar />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="
          min-h-screen
          bg-slate-50

          px-6
          py-6
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
          "
        >
          {/* Header */}

          <motion.div variants={itemVariants}>
            <PredictionHeader />
          </motion.div>

          {/* Filter */}

          <motion.div
            variants={itemVariants}
            className="mt-6"
          >
            <PredictionFilters
              location="Demak, Jawa Tengah"
              season="Mei - Agustus 2026"
              landArea="1 Hektar"
              onRecalculate={() =>
                console.log("recalculate")
              }
            />
          </motion.div>

          {/* Content */}

          <motion.div
            variants={itemVariants}
            className="
              mt-8

              grid
              gap-6

              lg:grid-cols-3

              items-start
            "
          >
            {/* Left */}

            <div className="lg:col-span-1">
              <SuccessProbabilityCard />
            </div>

            {/* Right Placeholder */}

            <div className="lg:col-span-2">
                <InfluencingFactors />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="
                mt-6

                grid
                gap-6

                lg:grid-cols-12

                items-start
            "
            >
            {/* Chart */}

            <div
                className="
                lg:col-span-8
                "
            >
                <PredictionChart />
            </div>

            {/* Yield */}

            <div
                className="
                lg:col-span-4
                "
            >
                <YieldForecastCard />
            </div>
            </motion.div>
        </div>
      </motion.div>
    </>
  );
}