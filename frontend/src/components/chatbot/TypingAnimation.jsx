import { motion } from "framer-motion";

export default function TypingAnimation() {
  return (
    <div
      className="flex items-start gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white font-semibold">
        AI
      </div>
      <div className="rounded-3xl border border-green-100 bg-white px-5 py-4 shadow-sm">
        <div className="flex gap-2">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className=" h-2.5 w-2.5 rounded-full bg-green-500"/>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }}
            className="h-2.5 w-2.5 rounded-full bg-green-500"/>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} 
            className="h-2.5 w-2.5 rounded-full bg-green-500"/>
        </div>
      </div>
    </div>
  );
}