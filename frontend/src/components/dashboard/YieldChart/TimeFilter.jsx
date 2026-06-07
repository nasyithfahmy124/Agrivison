export default function TimeFilter({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        h-14
        min-w-[140px]

        rounded-2xl
        border
        border-slate-200

        px-4

        text-sm
        text-slate-700

        bg-white
      "
    >
      <option value="1y">
        1 Year Comparison
      </option>

      <option value="3y">
        3 Year Comparison
      </option>

      <option value="5y">
        5 Year Comparison
      </option>
    </select>
  );
}