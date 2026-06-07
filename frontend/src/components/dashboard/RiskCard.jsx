export default function RiskCard() {
  return (
    <div className="snap-center min-w-[280px] lg:min-w-0 h-[170px] rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex justify-between">

        <div>
          <p className="text-red-600 text-sm font-medium">
            Climate Risk
          </p>

          <h2 className=" mt-6 text-4xl font-bold text-red-600">
            Moderate
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Monitor rainfall trends
          </p>
        </div>

        {/* Circle */}

        <div className="h-20 w-20 rounded-full border-[8px] border-red-500 flex items-center justify-center">
          <div className="text-center">
            <p className="font-bold">
              62%
            </p>

            <p className="text-[10px]">
              Risk
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}