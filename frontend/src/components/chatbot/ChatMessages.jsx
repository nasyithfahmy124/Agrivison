import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";

export default function ChatMessages({
  messages,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="space-y-6">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
        />
      ))}

      <div ref={bottomRef}></div>

    </div>
  );
}