import { motion } from "framer-motion";
import {
    FiAlertTriangle,
    FiCheckCircle,
} from "react-icons/fi";

export default function DiagnosisResult({ result }) {
    if (!result) return null;

    const riskStyles = {
        High: {
            bg: "bg-red-100",
            text: "text-red-700",
            icon: <FiAlertTriangle size={14} />,
            label: "Risk Level: High",
        },

        Medium: {
            bg: "bg-amber-100",
            text: "text-amber-700",
            icon: <FiAlertTriangle size={14} />,
            label: "Risk Level: Medium",
        },

        Low: {
            bg: "bg-green-100",
            text: "text-green-700",
            icon: <FiCheckCircle size={14} />,
            label: "Risk Level: Low",
        },

        Clear: {
            bg: "bg-green-100",
            text: "text-green-700",
            icon: <FiCheckCircle size={14} />,
            label: "Healthy Crop",
        },
    };

    const currentRisk =
        riskStyles[result.risk] ||
        riskStyles.Low;

    const riskBorder = {
        High: "bg-red-500",
        Medium: "bg-amber-500",
        Low: "bg-green-500",
        Clear: "bg-emerald-500",
    }

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
                duration: 0.4,
            }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
            
            <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-r-full ${riskBorder[result.risk]}`}/>
            <div className="pl-4 flex flex-col gap-5 md:flex-row md:items-start">
                <div className="h-14 w-14 md:h-16 md:w-16 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 flex-shrink-0">
                    <img src={result.image} alt={result.disease} className=" h-full w-full object-cover "/>
                </div>

                <div className="flex-1">
                    <div className={`inline-flex items-center gap-1 rounded-full bg-red-100 text-red-700 px-2.5 py-1 text-[11px] font-semibold ${currentRisk.bg} ${currentRisk.text}`}>
                        {currentRisk.icon}
                        {currentRisk.label}
                    </div>
                    <h2 className="mt-2 text-xl font-bold text-slate-900 md:text-[38px] md:leading-tight">
                        Detected Disease: {result.disease}
                    </h2>
                    <p className=" mt-2 max-w-2xl text-sm md:text-base leading-relaxed text-slate-600">
                        {result.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}