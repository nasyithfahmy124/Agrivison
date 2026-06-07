import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
            <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 py-10">
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-3xl"
            >
                <div className="rounded-[32px] border border-white/60 bg-white/75 p-8 md:p-12 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                    <div className="flex justify-center">
                        <div className="rounded-full border border-green-100 bg-gradient-to-br from-green-50 to-lime-100 p-8 shadow-lg">
                            <span className="text-6xl">🌾</span>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                            Error 404
                        </span>
                    </div>

                    <h1 className="mt-6 text-center text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text">
                        404
                    </h1>

                    <h2 className="mt-4 text-center text-3xl md:text-4xl font-bold text-slate-900">
                        Lahan Tidak Ditemukan
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-center text-slate-600 leading-relaxed">
                        Halaman yang Anda cari mungkin telah dipindahkan,
                        dihapus, atau belum tersedia dalam ekosistem AgriWisdom.
                    </p>

                    <div className="mt-8 rounded-2xl bg-green-50 p-5">
                        <p className="text-center text-green-800 font-medium">
                            🌱 Mari kembali menjelajahi peluang agribisnis digital
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full sm:w-auto rounded-xl bg-green-600 px-8 py-3 font-semibold text-white shadow-lg shadow-green-200"
                            >
                                Kembali ke Beranda
                            </motion.button>
                        </Link>

                        <Link to="/projects">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-8 py-3 font-semibold text-green-700"
                            >
                                ← Lihat Proyek
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}