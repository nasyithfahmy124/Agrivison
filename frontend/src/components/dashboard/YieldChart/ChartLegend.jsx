export default function ChartLegend() {
  return (
    <div className="flex flex-wrap gap-8">

      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-700" />

        <span className="text-sm text-slate-600">
          AI Prediction
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-slate-600" />

        <span className="text-sm text-slate-600">
          Actual Yield
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-4 border-t-2 border-dashed border-slate-400" />

        <span className="text-sm text-slate-600">
          Regional Average
        </span>
      </div>

    </div>
  );
}