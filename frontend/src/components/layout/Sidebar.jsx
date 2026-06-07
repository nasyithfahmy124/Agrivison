import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiActivity,
  FiShoppingBag,
  FiTrendingUp,
  FiBox,
  FiSettings,
  FiMessageCircle,
} from "react-icons/fi";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: FiGrid,
  },
  {
    title: "Crop Diagnosis",
    path: "/diagnosis",
    icon: FiActivity,
  },
  {
    title: "Marketplace",
    path: "/marketplace",
    icon: FiShoppingBag,
  },
  {
    title: "Yield Prediction",
    path: "/prediction",
    icon: FiTrendingUp,
  },
  {
    title: "Learning Hub",
    path: "/simulation",
    icon: FiBox,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}
      {/* tambah img logo letaknya disamping */}
      <div className="flex items-center gap-4 border-b border-slate-200 px-4 py-6">
        <div>
          <img src="../../../../public/img/logo.png" alt="AgroVision Logo" className="h-12 w-12" />
        </div>
        <div className="pt-8 pb-6">
          <h1 className="text-3xl font-bold text-green-700">
            AgroVision
          </h1>

          <p className="mt-1 text-xs tracking-wider text-slate-500 uppercase">
            AI Agriculture Intelligence
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                group
                flex items-center gap-3
                px-5 py-4
                rounded-2xl
                transition-all duration-200

                ${
                  isActive
                    ? "bg-green-100 text-green-700 font-semibold border-r-4 border-green-600"
                    : "text-slate-600 hover:bg-slate-100"
                }
              `
              }
            >
              <Icon size={18} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Push Bottom */}
      <div className="flex-1" />

      {/* AI Assistant Card */}
      <div className="p-4">
        <div className="rounded-3xl border border-slate-200 bg-[#F8FAF8] p-5">

          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <FiMessageCircle
                size={22}
                className="text-green-700"
              />
            </div>

            <div>
              <h3 className="font-semibold">
                AI Agronomist
              </h3>

              <p className="text-xs text-slate-500">
                Smart farming assistant
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Get AI-powered recommendations for crop health,
            yield optimization, and farming decisions.
          </p>

          <button
            className="
              mt-5
              w-full
              rounded-xl
              bg-green-700
              py-3
              text-sm
              font-medium
              text-white
              transition
              hover:bg-green-800
            "
          >
            Start Consultation
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="px-4 pb-4">
        <NavLink
          to="/settings"
          className="
            flex items-center gap-3
            px-5 py-4
            rounded-2xl
            text-slate-600
            hover:bg-slate-100
            transition
          "
        >
          <FiSettings size={18} />
          <span>Settings</span>
        </NavLink>
      </div>

    </aside>
  );
}