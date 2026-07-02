import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function Simulation() {
  const handleDownload = () => {
    window.open(
      "http://127.0.0.1:8000/media/apk/app-debug.apk",
      "_blank"
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg rounded-3xl bg-white p-10 shadow-xl"
      >
        <h1 className="text-3xl font-bold">
          AgroVision Learning Game
        </h1>

        <p className="mt-4 text-slate-600">
          Experience smart farming through our interactive educational game.
        </p>

        <button
          onClick={handleDownload}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-4 font-semibold text-white"
        >
          <FiDownload />
          Download APK
        </button>
      </motion.div>
    </div>
  );
}