import { motion } from "framer-motion";
import { FiCloud, FiTrendingUp, FiCpu } from "react-icons/fi";

const steps = [
  {
    icon: "🌾",
    text: "Analyzing crop conditions",
  },
  {
    icon: "☁️",
    text: "Checking weather forecast",
  },
  {
    icon: "📈",
    text: "Comparing yield benchmarks",
  },
  {
    icon: "🧠",
    text: "Generating recommendations",
  },
];

export default function AIThinking() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
          <FiCpu className="text-green-700"/>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">
            AgroVision AI
          </h3>
          <p className="text-sm text-slate-500">
            Thinking...
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.text}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.4 }}
            className="flex items-center gap-3 text-sm text-slate-700">
            <span>{step.icon}</span>
            <span>{step.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}