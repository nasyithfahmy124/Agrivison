export default function CustomTooltip({
  active,
  payload,
}) {
  if (!active || !payload?.length) {
    return null;
  }

  const data = payload[0];

  return (
    <div
      className="
        rounded-lg
        bg-green-700
        px-4
        py-2
        text-white
        shadow-lg
      "
    >
      <p className="font-semibold">
        {data.value} Tons
      </p>
    </div>
  );
}