export default function RiskFactor({
  label,
  value,
  color,
}) {
  return (
    <div>

      <div className="flex justify-between mb-2">

        <span className="text-sm text-slate-700">
          {label}
        </span>

        <span className="text-sm text-slate-500">
          {value}%
        </span>

      </div>

      <div className="h-2 rounded-full bg-slate-100">

        <div
          className="h-2 rounded-full"
          style={{
            width: `${value}%`,
            backgroundColor: color,
          }}
        />

      </div>

    </div>
  );
}