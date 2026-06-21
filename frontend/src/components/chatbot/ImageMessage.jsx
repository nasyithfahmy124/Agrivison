export default function ImageMessage({
  src,
}) {
  if (!src) return null;

  return (
    <img
      src={src}
      alt="Uploaded"
      className="
        max-h-80
        w-full
        rounded-2xl
        object-cover
        border
        border-slate-200
      "
    />
  );
}