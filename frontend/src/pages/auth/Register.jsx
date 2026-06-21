import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FiEye, FiEyeOff, FiMail, FiMapPin, FiLock, FiUser } from "react-icons/fi";

import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl">
      <div className="relative overflow-hidden rounded-[28px] lg:rounded-[36px] bg-white/80 backdrop-blur-xl border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.08)] grid grid-cols-1 lg:grid-cols-2">
        <div className="absolute -top-16 -left-10 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl" />
        <div
          className="order-2 lg:order-1 relative z-20 bg-white rounded-t-[32px] lg:rounded-none -mt-8 lg:mt-0 p-6 sm:p-8 lg:p-14">
          <h1 className="text-3xl lg:text-4xl font-bold text-emerald-700">
            AgroVision
          </h1>

          <h2 className="mt-2 text-2xl lg:text-3xl font-semibold text-slate-900">
            Create Account
          </h2>

          <p className="mt-3 text-sm lg:text-base text-slate-500">
            Start optimizing your farm with
            AI-powered precision agriculture.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <div className="relative">

                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Enter full name" className="w-full rounded-xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <div className="relative">

                <FiMail className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" placeholder="Enter email" className=" w-full rounded-xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Farm Location
              </label>

              <div className="relative">
                <FiMapPin className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Enter farm location" className="w-full rounded-xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" />
              </div>
            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <div className="relative">

                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className=" w-full rounded-xl border border-slate-200 py-3 pl-12 pr-12 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" />

                <button type="button" onClick={() => setShowPassword(!showPassword)} className=" absolute right-4 top-1/2 -translate-y-1/2 ">
                  {showPassword ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
                  )}
                </button>
              </div>
            </div>

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full rounded-xl bg-emerald-700 py-3 font-medium text-white transition hover:bg-emerald-800">
              Create Account
            </motion.button>

          </form>

          <div className="my-6 text-center text-sm text-slate-400">
            Or continue with
          </div>

          <motion.button whileHover={{ y: -3 }} className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 py-3 transition hover:border-emerald-300 hover:bg-slate-50 hover:shadow-md">
            <FcGoogle size={22} />
            Continue with Google
          </motion.button>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?
            <Link to="/login" className="ml-1 font-medium text-emerald-700">
              Login
            </Link>
          </p>

        </div>
        <div className=" relative order-1 lg:order-2 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 h-[260px] sm:h-[320px] lg:h-auto px-6 py-8 lg:p-12 ">
          <div className="absolute -top-20 -left-20 h-52 w-52 lg:h-64 lg:w-64 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-56 w-56 lg:h-72 lg:w-72 rounded-full bg-lime-400/20 blur-3xl" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute left-3 top-4 lg:left-8 lg:top-10 rounded-xl lg:rounded-2xl border border-white/50 bg-white/80 px-3 py-2 lg:px-4 lg:py-3 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-[10px] lg:text-xs font-medium text-slate-700">
                AI Monitoring Active
              </span>
            </div>

            <p className="mt-1 text-sm lg:text-lg font-bold text-emerald-600">
              98.7%
            </p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute right-3 bottom-5 lg:right-8 lg:bottom-16 rounded-xl lg:rounded-2xl border border-white/50 bg-white/80 px-3 py-2 lg:px-4 lg:py-3 backdrop-blur-xl shadow-xl">
            <p className="text-[10px] lg:text-xs text-slate-500">
              Crop Health
            </p>

            <p className="text-xs lg:text-base font-semibold text-emerald-600">
              Excellent 🌱
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute inset-0 rounded-full bg-emerald-400/20 blur-3xl"/>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] lg:h-[340px] lg:w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/30"/>
            <motion.img src="/img/logo2.svg" alt="AgroVision" className="relative z-10 w-36 sm:w-48 md:w-56 lg:w-72 drop-shadow-[0_0_35px_rgba(34,197,94,0.35)]" animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}/>
          </div>

          <div className="mt-4 flex gap-2 lg:hidden">
            <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium shadow">
              🌱 Smart Farming
            </span>

            <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium shadow">
              🤖 AI Powered
            </span>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 grid grid-cols-3 gap-2 w-full max-w-[320px] lg:mt-10 lg:gap-4">
            <div className="rounded-xl lg:rounded-2xl bg-white/70 px-2 py-2 lg:px-5 lg:py-4 text-center shadow-lg backdrop-blur-xl">
              <p className="text-sm lg:text-xl font-bold text-emerald-600">
                12K+
              </p>

              <p className="text-[10px] lg:text-xs text-slate-500">
                Fields
              </p>
            </div>

            <div className="rounded-xl lg:rounded-2xl bg-white/70 px-2 py-2 lg:px-5 lg:py-4 text-center shadow-lg backdrop-blur-xl">
              <p className="text-sm lg:text-xl font-bold text-emerald-600">
                98%
              </p>

              <p className="text-[10px] lg:text-xs text-slate-500">
                Accuracy
              </p>
            </div>

            <div className="rounded-xl lg:rounded-2xl bg-white/70 px-2 py-2 lg:px-5 lg:py-4 text-center shadow-lg backdrop-blur-xl">
              <p className="text-sm lg:text-xl font-bold text-emerald-600">
                24/7
              </p>

              <p className="text-[10px] lg:text-xs text-slate-500">
                Monitoring
              </p>
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hidden lg:block mt-8 max-w-md text-center text-sm italic leading-relaxed text-slate-500">
            "Empowering farmers with AI-driven insights,
            real-time monitoring, and smarter agricultural decisions."
          </motion.p>
        </div>

      </div>
    </motion.div>
  );
}