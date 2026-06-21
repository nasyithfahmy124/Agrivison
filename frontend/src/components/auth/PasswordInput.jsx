import { useState } from "react";

import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordInput() {
  const [show, setShow] =
    useState(false);

  return (
    <div>

      <label className="mb-2 block text-sm font-medium">
        Password
      </label>

      <div className="relative">
        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
        <input
          type={show ? "text" : "password"}
          placeholder="Enter password"
          className="w-full rounded-xl border border-slate-200 py-3 pl-12 pr-12 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"/>
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2">
          {show ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
}