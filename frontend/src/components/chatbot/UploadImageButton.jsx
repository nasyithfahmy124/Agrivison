import { useRef } from "react";
import { motion } from "framer-motion";
import { FiImage, FiUploadCloud } from "react-icons/fi";

export default function UploadImageButton({
  onImageSelect,
}) {
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    onImageSelect(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    onImageSelect(file);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => inputRef.current?.click()}
      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition-all duration-300 hover:border-green-300 hover:bg-green-50 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
        <FiImage size={18} className="text-green-700"/>
      </div>
      <div>
        <h4 className="text-sm font-medium text-slate-900">
          Upload Crop Image
        </h4>
        <p className="text-xs text-slate-500">
          JPG, PNG up to 10MB
        </p>
      </div>
      <FiUploadCloud className="ml-auto text-slate-400" size={20}/>
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleFileChange}/>
    </motion.div>
  );
}