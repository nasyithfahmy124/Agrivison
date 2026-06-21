import { motion } from "framer-motion";

export default function DiagnosisHistory({
  history = [],
  onViewAll,
}) {
  const recentHistory = history.slice(0, 3);

  const riskStyles = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-slate-100 text-slate-700",
    Clear: "bg-green-100 text-green-700",
  };

  return (
    <div
      className=" rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Diagnoses
          </h2>

          <p className="text-sm text-slate-500">
            Latest AI crop analyses
          </p>
        </div>

        {history.length > 0 && (
          <button onClick={onViewAll} className="text-sm font-medium text-green-600 transition-colors hover:text-green-700">
            View All
          </button>
        )}
      </div>
      {recentHistory.length === 0 ? (
        <div className="flex h-48 items-center justify-center rounded-2xl bg-slate-50">
          <p className="text-sm text-slate-500">
            No diagnosis history available
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {recentHistory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: index * 0.1}}
              whileHover={{scale: 1.02}}
              className=" flex items-center justify-between rounded-2xl p-3 transition-all duration-300 hover:bg-slate-50 hover:shadow-sm">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.disease} className="h-16 w-16 rounded-xl object-cover flex-shrink-0"/>

                <div>
                  <h3 className="font-medium text-slate-800">
                    {item.disease}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.plot}
                  </p>

                  <p className="text-sm font-medium text-slate-600">
                    {item.time}
                  </p>
                </div>
              </div>

              <span className={` rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap ${riskStyles[item.risk] || "bg-slate-100 text-slate-700"}`}>
                {item.risk}
                {item.risk !== "Clear" ? " Risk" : ""}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}