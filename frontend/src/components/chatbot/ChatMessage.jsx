import { motion } from "framer-motion";
import MarkdownResponse from "./MarkdownResponse";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${ isUser ? "justify-end" : "justify-start"}`}>
      {isUser ? (
        <div className="max-w-3xl rounded-[24px] rounded-br-md bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-4 text-white shadow-lg shadow-green-500/10">
          <p className="whitespace-pre-wrap leading-relaxed">
            {message.content}
          </p>
        </div>
      ) : (
        <div className="max-w-4xl">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-sm font-bold text-white shadow-md">
              AI
            </div>
            <MarkdownResponse content={message.content}/>

          </div>
        </div>
      )}
    </motion.div>
  );
}