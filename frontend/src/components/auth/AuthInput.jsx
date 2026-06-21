export default function AuthInput({
  label,
  ...props
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input {...props} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-600"/>
    </div>
  );
}