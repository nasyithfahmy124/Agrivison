import { useRef } from "react";
import { FiUploadCloud, FiImage } from "react-icons/fi";
import { motion } from "framer-motion";

export default function UploadZone({
  image,
  onImageChange,
}) {
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image.");
      return;
    }

    onImageChange(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    handleFile(file);
  };

  const handleBrowse = (e) => {
    const file = e.target.files[0];

    handleFile(file);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className="cursor-pointer rounded-[28px] border-2 border-dashed border-slate-300 bg-white transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50/30">
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleBrowse} className="hidden"
      />
      {!image && (
        <div className="flex min-h-[280px] flex-col items-center justify-center px-6 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
            <FiUploadCloud size={32} className="text-emerald-600"/>
          </div>
          <h3 className="text-3xl font-semibold text-slate-900">
            Upload Plant Image
          </h3>
          <p className="mt-2 text-slate-500">
            Drag and drop or click to browse
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Supports JPG, PNG (Max 5MB)
          </p>
        </div>
      )}

      {image && (
        <div className="p-6">
          <img
            src={URL.createObjectURL(image)}
            alt="Preview" className="h-[350px] w-full rounded-2xl object-cover"/>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FiImage className="text-emerald-600" size={20}/>
              <span className="text-sm font-medium text-slate-700" >
                {image.name}
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onImageChange(null);}} 
                className="rounded-xl bg-red-50 px-4 py-2 text-sm text-red-600 hover:bg-red-100">
              Remove
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}