import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({
  text = "Continue with Google",
  onClick,
}) {
  return (
    <>
      <div className="my-6 text-center text-sm text-slate-400">
        Or continue with
      </div>

      <motion.button type="button" onClick={onClick} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 transition-all duration-300 hover:border-emerald-300 hover:bg-slate-50 hover:shadow-md">
        <FcGoogle size={22} />

        <span className="font-medium text-slate-700">
          {text}
        </span>
      </motion.button>
    </>
  );
}