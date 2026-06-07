import {
  FiBell,
  FiHelpCircle,
} from "react-icons/fi";

export default function DashboardTopBar() {
  return (
    <div className="flex items-center justify-end gap-6 border-b border-slate-200 bg-white px-8 py-3">

      {/* AI Status Badge */}
      <div
        className="
          flex items-center gap-3
          rounded-full
          border border-green-200
          bg-green-50
          px-5 py-2
        "
      >
        <div
          className="
            flex h-7 w-7
            items-center justify-center
            rounded-full
            bg-green-100
          "
        >
          <span className="text-xs font-bold text-green-700">
            AI
          </span>
        </div>

        <div>
          <p className="text-[11px] text-slate-500">
            AI Analysis Updated
          </p>

          <p className="text-xs font-medium text-slate-700">
            10 Jun 2026 · 08:30
          </p>
        </div>
      </div>

      {/* Notification */}
      <button className="text-slate-600 hover:text-slate-900">
        <FiBell size={18} />
      </button>

      {/* Help */}
      <button className="text-slate-600 hover:text-slate-900">
        <FiHelpCircle size={18} />
      </button>

      {/* User */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold">
            Faiq
          </p>

          <p className="text-xs text-slate-500">
            Agronomist
          </p>
        </div>

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="h-10 w-10 rounded-full border"
        />
      </div>
    </div>
  );
}