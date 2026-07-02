import { useState } from "react";
import { motion } from "framer-motion";

import DashboardTopBar from "../components/dashboard/DashboardTopBar";

import SettingsProfileCard from "../components/settings/SettingsProfileCard";
import SettingsStatsGrid from "../components/settings/SettingsStatsGrid";
import FarmDetailCard from "../components/settings/FarmDetailCard";
import SecurityCard from "../components/settings/SecurityCard";
import ActivityTimeline from "../components/settings/ActivityTimeline";
import AddEntryModal from "../components/settings/AddEntryModal";

const containerVariants = {
    hidden: {},

    show: {
        transition: {
            staggerChildren: 0.1,
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
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

export default function Settings() {
    const [openModal, setOpenModal] =
        useState(false);

    const [formData, setFormData] =
        useState({
            title: "",
            description: "",
            type: "success",
        });

    const user = {
        name: "Nasyith",
        role: "Agripreneur",
        location:
            "Semarang, Central Java",

        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=400",
    };

    const stats = {
        level: 1,
        harvests: 148,
        exports: 92,
    };

    const farm = {
        crop: "Rice",
        location:
            "Demak Regency, Central Java",
        status: "Healthy",
    };

    const activities = [
        {
            id: 1,
            type: "success",
            title:
                "AI Analysis Completed",

            description:
                "Harvest success probability increased to 87% after the latest weather forecast update.",

            time: "2 hours ago",
        },

        {
            id: 2,
            type: "warning",
            title:
                "Pest Risk Detected",

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
    ];

    const handleAddEntry = (
        data
    ) => {
        console.log(data);

        setOpenModal(false);

        setFormData({
            title: "",
            description: "",
            type: "success",
        });
    };

    return (
        <>
            <DashboardTopBar />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="
          min-h-screen

          bg-gradient-to-b
          from-slate-50
          via-white
          to-slate-100

          px-6
          py-8

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

                    <motion.div
                        variants={itemVariants}
                        className="mb-8"
                    >
                        <h1
                            className="
                text-4xl
                font-bold

                tracking-tight

                text-slate-900
              "
                        >
                            Account Settings
                        </h1>

                        <p
                            className="
                mt-2

                text-slate-500
              "
                        >
                            Manage your profile,
                            farm information,
                            security preferences,
                            and agricultural
                            activities.
                        </p>
                    </motion.div>

                    {/* Top Layout */}

                    <div
                        className="
    grid
    gap-6

    lg:grid-cols-12

    items-start
  "
                    >
                        {/* LEFT */}

                        <div
                            className="
      space-y-6

      lg:col-span-8
    "
                        >
                            <motion.div
                                variants={itemVariants}
                            >
                                <SettingsProfileCard
                                    user={user}
                                    onAddEntry={() =>
                                        setOpenModal(true)
                                    }
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                            >
                                <SettingsStatsGrid
                                    stats={stats}
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                            >
                                <FarmDetailCard
                                    farm={farm}
                                />
                            </motion.div>
                        </div>

                        {/* RIGHT */}

                        <div
                            className="
      lg:col-span-4
    "
                        >
                            <motion.div
                                variants={itemVariants}
                                className="
        sticky
        top-24
      "
                            >
                                <SecurityCard />
                            </motion.div>
                        </div>
                    </div>
                    

                    {/* Activity Timeline */}

                    <motion.div
                        variants={itemVariants}
                        className="mt-6"
                    >
                        <ActivityTimeline
                            activities={
                                activities
                            }
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Modal */}

            <AddEntryModal
                open={openModal}
                onClose={() =>
                    setOpenModal(false)
                }
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleAddEntry}
            />
        </>
    );
}