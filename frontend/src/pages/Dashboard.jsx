import { motion } from "framer-motion";

import {
  FiTrendingUp,
  FiDollarSign,
  FiFolder,
} from "react-icons/fi";

import DashboardTopBar from "../components/dashboard/DashboardTopBar";
import PageHeader from "../components/layout/shared/PageHeader";

import StatCard from "../components/dashboard/StatCard";
import RiskCard from "../components/dashboard/RiskCard";
import StatsSection from "../components/dashboard/StatsSection";

import YieldChart from "../components/dashboard/YieldChart/YieldChart";
import WeatherWidget from "../components/dashboard/WeatherWidget/WeatherWidget";

export default function Dashboard() {
  return (
    <div className="px-4 lg:px-8 py-6">

      {/* Top Bar */}
      <DashboardTopBar />

      {/* Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <PageHeader
          title="Agricultural Intelligence Dashboard"
          description="
            Monitor crop health, yield prediction,
            weather intelligence and AI-powered insights.
          "
        />
      </motion.div>

      {/* KPI Section */}

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
          delay: 0.2,
          duration: 0.5,
        }}
      >
        <StatsSection>

          <StatCard
            icon={<FiTrendingUp />}
            title="Predicted Yield"
            value="6.42"
            unit="Tons"
            trend="+12.5%"
          />

          <StatCard
            icon={<FiDollarSign />}
            title="Estimated Revenue"
            value="Rp 38.5M"
          />

          <StatCard
            icon={<FiFolder />}
            title="Estimated Cost"
            value="Rp 12.3M"
          />

          <RiskCard />

        </StatsSection>
      </motion.div>

      {/* Main Dashboard Grid */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        className="
          mt-6

          grid
          grid-cols-1
          xl:grid-cols-12

          gap-6
        "
      >

        {/* Yield Chart */}

        <div
          className="
            xl:col-span-8
          "
        >
          <YieldChart />
        </div>

        {/* Weather */}

        <div
          className="
            xl:col-span-4
          "
        >
          <WeatherWidget />
        </div>

      </motion.div>

    </div>
  );
}