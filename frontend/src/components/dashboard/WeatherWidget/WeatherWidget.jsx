import {FiCloudRain, FiCloudLightning, FiCloud,} from "react-icons/fi";

import WeatherDay from "./WeatherDay";
import RiskFactor from "./RiskFactor";

export default function WeatherWidget() {

  const weatherData = [
    {
      day: "Today",
      icon: <FiCloudRain />,
      temp: 30,
      lowTemp: 24,
      rainChance: 60,
      active: true,
    },
    {
      day: "Tue",
      icon: <FiCloudRain />,
      temp: 29,
      lowTemp: 24,
      rainChance: 70,
    },
    {
      day: "Wed",
      icon: <FiCloudLightning />,
      temp: 28,
      lowTemp: 23,
      rainChance: 80,
    },
    {
      day: "Thu",
      icon: <FiCloud />,
      temp: 27,
      lowTemp: 23,
      rainChance: 75,
    },
  ];

  return (
    <div className=" bg-white border border-slate-200 rounded-[28px] p-8 h-full">
      <h2 className=" text-[22px] font-semibold text-slate-900 leading-tight">7-Day Weather<br />Forecast</h2>
      <div className="mt-10 grid grid-cols-4 gap-4">
        {weatherData.map((item) => (
          <WeatherDay
            key={item.day}
            {...item}
          />
        ))}
      </div>
      <div className="my-12 border-t border-slate-200" />
      <div>
        <h3 className=" mb-6 text-lg font-semibold text-slate-900">
          Key Risk Factors
        </h3>
        <div className="space-y-6">
          <RiskFactor label="Heavy Rainfall" value={70} color="#DC2626"/>
          <RiskFactor label="Humidity" value={45} color="#4B6B4B"/>
          <RiskFactor label="Pest Activity" value={30} color="#4B6B4B"/>
        </div>
      </div>
    </div>
  );
}