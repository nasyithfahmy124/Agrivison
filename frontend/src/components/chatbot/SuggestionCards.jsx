import { motion } from "framer-motion";

export default function SuggestionCards({
  suggestions,
  onSelect,
}) {
  return (
    <div
      className="mt-10 grid gap-4 md:grid-cols-2">
      {suggestions.map((item) => (
        <motion.button key={item.id} whileHover={{ y: -3 }} onClick={() => onSelect(item.title)} className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all hover:border-green-300 hover:shadow-lg">
          <h3 className="font-semibold">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {item.description}
          </p>
        </motion.button>
      ))}
    </div>
  );
}