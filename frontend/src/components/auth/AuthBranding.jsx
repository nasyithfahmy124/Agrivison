import { motion } from "framer-motion";

export default function AuthBranding() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-white relative">
      <div className=" absolute h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"/>

      <motion.img
        src="/img/logo2.svg"
        alt="AgroVision"
        className="relative z-10 w-72"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut"}}/>

      <p className="relative z-10 mt-10 max-w-sm text-center italic text-slate-500">
        "The future of precision agriculture is in your hands."
      </p>
    </div>
  );
}