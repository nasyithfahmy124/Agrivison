import { useRef, useEffect } from "react";

import { FiSend, FiPlus, FiX } from "react-icons/fi";

import VoiceButton from "./VoiceButton";
import UploadImageButton from "./UploadImageButton";

export default function ChatInput({
  value,
  onChange,
  onSend,
  image,
  onRemoveImage,
  showActions,
  setShowActions,
  onImageSelect,
  onVoiceClick,
}) {
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);
  const menuRef = useRef(null);

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      onSend();
    }
  };

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setShowActions(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [setShowActions]);

  return (
    <div className="relative">
      {image && (
        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <img src={URL.createObjectURL(image)} alt="Preview" className="h-14 w-14 rounded-xl object-cover"/>

          <div className="flex-1">
            <h4 className="text-sm font-medium text-slate-900">
              {image.name}
            </h4>

            <p className="text-xs text-slate-500">
              Ready for AI analysis
            </p>
          </div>

          <button onClick={onRemoveImage} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-100">
            <FiX />
          </button>
        </div>
      )}

      {showActions && (
        <div ref={menuRef} className="absolute bottom-[85px] left-0 z-50 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl">
          <UploadImageButton onImageSelect={(file) => { onImageSelect(file); setShowActions(false); }} fileInputRef={fileInputRef} compact/>
        </div>
      )}
      <input ref={fileInputRef} type="file" hidden accept="image/*" onChange={(e) => onImageSelect( e.target.files?.[0] )} />
      <div className="rounded-[28px] border border-slate-200 bg-white/90 backdrop-blur-xl px-3 py-3 shadow-lg">
        <div className="flex items-end gap-3">
          <button
            onClick={() => setShowActions( !showActions )}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300
              ${ showActions ? ` rotate-45 bg-green-100 text-green-700 ` : ` bg-slate-100 hover:bg-green-100 hover:text-green-700`}`}>
            <FiPlus size={20} />
          </button>
          <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => onChange( e.target.value )}
            onKeyDown={handleKeyDown}
            placeholder="Ask AgroVision AI about crops, weather, diseases, yield prediction..."
            className="max-h-40 min-h-[44px] flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none"/>
          <VoiceButton onClick={onVoiceClick}/>
          <button
            onClick={onSend}
            disabled={ !value.trim() && !image }
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50">
            <FiSend size={18} />
          </button>

        </div>
      </div>
    </div>
  );
}