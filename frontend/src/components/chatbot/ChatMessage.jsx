import { motion } from "framer-motion";

import MarkdownResponse from "./MarkdownResponse";
import ImageMessage from "./ImageMessage";

export default function ChatMessage({
  message,
}) {
  const isUser =
    message.role === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      {isUser ? (
        <div
          className="
            max-w-3xl

            rounded-[28px]
            rounded-br-md

            bg-gradient-to-r
            from-green-600
            to-emerald-500

            px-5
            py-4

            text-white

            shadow-lg
            shadow-green-500/20
          "
        >
          {message.image && (
            <div className="mb-4">
              <ImageMessage
                src={message.image}
              />
            </div>
          )}

          <p
            className="
              whitespace-pre-wrap
              leading-relaxed
            "
          >
            {message.content}
          </p>
        </div>
      ) : (
        <div className="w-full max-w-5xl">
          <div className="flex items-start gap-4">
            <div
              className="
                relative

                flex
                h-12
                w-12

                shrink-0

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-green-600
                via-emerald-500
                to-green-700

                font-bold

                text-white

                shadow-lg
                shadow-green-500/20
              "
            >
              AI

              <div
                className="
                  absolute

                  -bottom-1
                  -right-1

                  h-4
                  w-4

                  rounded-full

                  border-2
                  border-white

                  bg-green-400
                "
              />
            </div>

            <div className="flex-1">
              <MarkdownResponse
                content={
                  typeof message.content ===
                  "string"
                    ? message.content
                    : ""
                }
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}