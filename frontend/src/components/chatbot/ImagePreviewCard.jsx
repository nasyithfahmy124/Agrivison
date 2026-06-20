import { FiX, FiImage } from "react-icons/fi";

export default function ImagePreviewCard({
  file,
  onRemove,
}) {
  if (!file) return null;

  const imageUrl =
    URL.createObjectURL(file);

  return (
    <div
      className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative">
        <img src={imageUrl} alt="Preview" className="h-64 w-full object-cover"/>
        <button onClick={onRemove} className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg">
          <FiX />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <FiImage className="text-green-600"/>
          <div>
            <h4 className="text-sm font-medium">
              {file.name}
            </h4>
            <p className="text-xs text-slate-500">
              Ready for AI analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}