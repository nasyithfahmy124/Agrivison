import { FiMic, FiX, FiLoader } from "react-icons/fi";

import VoiceWave from "./VoiceWave";

export default function VoiceModal({
  open,
  onClose,
  voiceState,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <FiX size={22} />
          </button>
        </div>

        <div className="mt-2 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <FiMic size={32} className="text-green-700"/>
          </div>
          <h2 className="mt-6 text-2xl font-semibold">
            AgroVision Voice
          </h2>

          {voiceState ===
            "recording" && (
            <>
              <p className="mt-3 text-slate-500">
                Listening...
              </p>
              <div className="mt-8">
                <VoiceWave />
              </div>
            </>
          )}

          {voiceState ===
            "processing" && (
            <>
              <p className="mt-3 text-slate-500">
                Processing speech...
              </p>
              <FiLoader className="mx-auto mt-8 animate-spin text-green-600" size={30} />
            </>
          )}
          {voiceState ===
            "idle" && (
            <p className="mt-3 text-slate-500">
              Start talking to AgroVision AI
            </p>
          )}
        </div>
      </div>
    </div>
  );
}