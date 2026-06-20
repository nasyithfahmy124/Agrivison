import { FiMic } from "react-icons/fi";

export default function VoiceButton({
  onClick,
}) {
  return (
    <button onClick={onClick} className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition-all hover:bg-green-100 hover:text-green-700">
      <FiMic size={18} />
    </button>
  );
}