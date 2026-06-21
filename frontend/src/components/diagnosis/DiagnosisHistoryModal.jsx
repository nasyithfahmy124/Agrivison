import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSearch } from "react-icons/fi";

export default function DiagnosisHistoryModal({
  open,
  onClose,
  history,
}) {
  const riskStyles = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-slate-200 text-slate-700",
    Clear: "bg-green-100 text-green-700",
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"/>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            className=" fixed left-1/2 top-1/2 z-[60] h-[80vh] w-[95%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 p-6">
              <div>
                <h2 className="text-2xl font-bold">
                  Diagnosis History
                </h2>

                <p className="text-slate-500">
                  All AI diagnosis records
                </p>
              </div>

              <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100">
                <FiX size={24} />
              </button>
            </div>
            <div className="p-6 pb-0">
              <div className="flex items-center gap-3 rounded-2xl border px-4 py-3">
                <FiSearch />
                <input placeholder="Search diagnosis..." className="w-full outline-none"/>
              </div>
            </div>

            <div className=" flex-1 overflow-y-auto p-6 space-y-3">
              {history.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    scale: 1.01,
                  }}
                  className=" flex items-center justify-between rounded-2xl border border-slate-100 p-4 hover:bg-slate-50">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.disease} className="h-20 w-20 rounded-xl object-cover"/>
                    <div>
                      <h3 className="font-semibold">
                        {item.disease}
                      </h3>

                      <p className="text-slate-500">
                        {item.plot}
                      </p>

                      <p className="text-sm text-slate-400">
                        {item.time}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-xl text-sm font-medium ${riskStyles[item.risk]}`}>
                    {item.risk}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}