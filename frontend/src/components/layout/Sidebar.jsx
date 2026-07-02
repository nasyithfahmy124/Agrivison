import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { FiGrid, FiActivity, FiShoppingBag, FiTrendingUp, FiBox, FiSettings, FiMessageCircle, FiMenu, FiX,} from "react-icons/fi";

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
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <button onClick={() => setOpen(true)} className=" lg:hidden fixed top-5 left-5 z-[60] p-3 rounded-xl bg-white shadow-lg border border-slate-200 transition-all hover:scale-105">
        <FiMenu size={22} />
      </button>
      <div onClick={() => setOpen(false)} className={` fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
          lg:hidden
        `}
      />

      <aside className={` fixed top-0 left-0 z-50 h-screen w-72 bg-white/90 backdrop-blur-xl border-r border-slate-200 shadow-xl flex flex-col transition-transform duration-300 ease-in-out
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
          lg:translate-x-0
        `}
      >
        <button onClick={() => setOpen(false)} className=" lg:hidden absolute top-5 right-5 text-slate-600">
          <FiX size={24} />
        </button>

        <div className="flex items-center gap-4 border-b border-slate-200 px-5 py-6">
          <img src="/img/logo.png" alt="AgroVision Logo" className="h-12 w-12 object-contain"/>
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              AgriWisdom
            </h1>
            <p className="text-xs tracking-wider uppercase text-slate-500">
              AI Agriculture Intelligence
            </p>
          </div>
        </div>

        <nav className="px-4 py-5 space-y-2"> {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => ` group relative flex items-center gap-4 px-5 py-4 rounded-2xl overflow-hidden transition-all duration-300
                  ${
                    isActive
                      ? `bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-500/25 translate-x-1`
                      : ` text-slate-600 hover:bg-slate-100 hover:translate-x-2`}`}
              >
                <Icon size={20} className=" transition-all duration-300 group-hover:scale-110" />
                <span className="font-medium"> {item.title} </span>
              </NavLink>
            );
          })}
        </nav>

        <div className="flex-1" />
        <div className="p-4">
          <div className=" rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-green-100 p-5 shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <FiMessageCircle size={22} className="text-green-700"/>
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
              Get AI-powered recommendations for crop
              health, yield optimization, and farming
              decisions.
            </p>

            <button onClick={() => navigate("/chat", { state: { source: "sidebar-ai-assistant" } })} className="mt-5 w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
              Start Consultation
            </button>
          </div>
        </div>

        <div className="px-4 pb-5">
          <NavLink to="/settings" className="flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:translate-x-2">
            <FiSettings size={20} />
            <span className="font-medium">
              Settings
            </span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}