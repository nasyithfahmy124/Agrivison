export default function AIInsight() {
  return (
    <div className=" mt-10 rounded-3xl border border-green-200 px-6 py-5 flex items-center gap-5">
      <div className=" h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
        AI
      </div>

      <div>
        <h4 className=" text-sm font-semibold text-slate-900">
          AI Insight
        </h4>

        <p className=" mt-1 text-sm text-slate-600 leading-relaxed">
          Predicted yield is expected to exceed
          the 5-year regional average by 12.5%
          under current weather and crop health
          conditions.
        </p>
      </div>
    </div>
  );
}