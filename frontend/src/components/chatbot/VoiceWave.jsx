import { motion } from "framer-motion";

export default function VoiceWave() {
  return (
    <div className="flex items-end gap-1">

      {[1,2,3,4,5].map((bar) => (
        <motion.div
          key={bar}
          animate={{ height: [ 10, 30, 15, 40, 10 ], }}
          transition={{ repeat: Infinity, duration: 1.2, delay: bar * 0.1 }}
          className="w-1.5 rounded-full bg-green-500"/>
      ))}

    </div>
  );
}