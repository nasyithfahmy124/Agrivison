export default function WeatherDay({day, icon, temp, lowTemp, rainChance, active = false,}) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-slate-700">{day}</p>
      <div className="my-3 text-3xl">{icon}</div>
      <p className="font-semibold text-slate-900">{temp}°</p>
      <p className="text-sm text-slate-400">{lowTemp}°</p>
      <div className={` mt-3 rounded-md px-2 py-1 text-xs font-medium
          ${
            active
              ? "bg-green-100 text-green-700"
              : "text-slate-500"
          }
        `}
      >{rainChance}%</div>
    </div>
  );
}