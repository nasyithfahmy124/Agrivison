import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#F8FAF8]">
      <Sidebar />

      <main className="flex-1 overflow-auto lg:ml-72 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}