import { FiMessageSquare, FiTrendingUp, FiCloudRain, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ChatHistorySidebar({ history = [], show, onToggle }) {
  return (
    <>
      <div onClick={onToggle} className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300 lg:hidden
          ${ show ? "visible opacity-100" : "invisible opacity-0"}`}/>
      <button onClick={onToggle} className="fixed right-5 top-24 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:scale-105">
        {show ? (
          <FiChevronRight />
        ) : (
          <FiChevronLeft />
        )}
      </button>
      <aside className={`fixed top-0 right-0 z-40 h-screen w-[340px] border-l border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-in-out
          ${ show ? "translate-x-0" : "translate-x-full"}`}>
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            AI Workspace
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Farming context & chat history
          </p>
        </div>
        <div className="m-4 rounded-3xl bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 p-5 text-white shadow-lg shadow-green-500/20">
          <FiTrendingUp size={24} />

          <h3 className="mt-4 font-semibold">
            Yield Forecast
          </h3>

          <p className="mt-1 text-3xl font-bold">
            6.42 Tons
          </p>

          <p className="mt-2 text-sm text-green-100">
            +12.5% above regional average
          </p>

        </div>

        <div className="mx-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <FiCloudRain size={18} className="text-blue-500"/>
            </div>

            <div>
              <h4 className="font-medium text-slate-900">
                Weather Risk
              </h4>
              <p className="text-sm text-slate-500">
                Low risk next 7 days
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-6 flex-1 overflow-y-auto px-4 pb-6">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Recent Conversations
          </h3>
          <div className="space-y-2">
            {history.map((chat, index) => (
              <button key={chat.id} className={` group w-full rounded-2xl border p-4 text-left transition-all duration-300 ${ index === 0 ? ` border-green-200 bg-green-50 ` : ` border-slate-100 bg-white hover:border-green-200 hover:shadow-md ` } `} >
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                    <FiMessageSquare size={14} />
                  </div>
                  <div className="flex-1">
                     <h4 className="line-clamp-1 text-sm font-medium text-slate-900">
                      {chat.title}
                    </h4>
                    <p className=" mt-1 text-xs text-slate-500">
                      {chat.date}
                    </p>
                  </div>

                </div>
              </button>
            ))}

          </div>
        </div>
      </aside>
    </>
  );
}