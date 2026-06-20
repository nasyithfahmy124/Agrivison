import { useState } from "react";

import ChatHero from "../components/chatbot/ChatHero";
import ChatMessages from "../components/chatbot/ChatMessages";
import ChatInput from "../components/chatbot/ChatInput";
import SuggestionCards from "../components/chatbot/SuggestionCards";

import ChatHistorySidebar from "../components/chatbot/ChatHistorySidebar";
import AIThinking from "../components/chatbot/AIThinking";
import TypingAnimation from "../components/chatbot/TypingAnimation";
import MarkdownResponse from "../components/chatbot/MarkdownResponse";
import UploadImageButton from "../components/chatbot/UploadImageButton";
import ImagePreviewCard from "../components/chatbot/ImagePreviewCard";
import VoiceModal from "../components/chatbot/VoiceModal";

import { suggestions } from "../data/chat/suggestions";
import { initialMessages } from "../data/chat/messages";
import { chatHistory } from "../data/chat/history";
import { aiResponse } from "../data/chat/aiResponse";

export default function Chat() {
  const [messages, setMessages] =
    useState(initialMessages);

  const [input, setInput] =
    useState("");

  const [showWorkspace, setShowWorkspace] =
    useState(false);

  const [isThinking, setIsThinking] =
    useState(false);

  const [isTyping, setIsTyping] =
    useState(false);

  const [image, setImage] =
    useState(null);

  const [showActions, setShowActions] =
    useState(false);

  const [showVoice, setShowVoice] =
    useState(false);

  const [voiceState, setVoiceState] =
    useState("idle");

  const handleSend = () => {
    if (!input.trim() && !image) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input,
      image,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");
    setImage(null);

    setIsThinking(true);
    setIsTyping(false);

    setTimeout(() => {
      setIsThinking(false);

      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            role: "assistant",
            content: aiResponse,
          },
        ]);
      }, 1500);
    }, 2000);
  };
  return (
    <div className="relative flex h-[calc(100vh-80px)]">
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <ChatHero />
          <SuggestionCards suggestions={suggestions} onSelect={setInput} />
          <div className="mt-10">
            <ChatMessages messages={messages} />
            {isThinking && (
              <AIThinking />
            )}
            {isTyping && (
              <TypingAnimation />
            )}
          </div>
        </div>
        <div className=" sticky bottom-0 bg-white/80 backdrop-blur-xl border-t border-slate-200 p-4">
          <div className="mx-auto max-w-5xl">
            <ChatInput value={input} onChange={setInput} onSend={handleSend} image={image} onRemoveImage={() => setImage(null)} showActions={showActions} setShowActions={setShowActions} onImageSelect={setImage} onVoiceClick={() => { setShowVoice(true); setVoiceState("idle"); }} />
          </div>
        </div>
      </div>
      <VoiceModal open={showVoice} onClose={() => setShowVoice(false)} voiceState={voiceState} />
      <ChatHistorySidebar history={chatHistory} show={showWorkspace} onToggle={() => setShowWorkspace(!showWorkspace)} />
    </div>
  );
}