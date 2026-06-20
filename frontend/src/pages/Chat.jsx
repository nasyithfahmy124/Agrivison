import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { chatbotApi } from "../api/chatbotApi";

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

export default function Chat() {
  const [messages, setMessages] =
    useState([]);

  const [chatHistory, setChatHistory] =
    useState([]);

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

  const hasUserMessage =
    messages.some(
      (msg) => msg.role === "user"
    );
  const [voiceState, setVoiceState] =
    useState("idle");

  const fetchHistory = async () => {
  try {
    const data =
      await chatbotApi.getHistory();

    setChatHistory(data);
      } catch (error) {
        console.error(error);
      }
    };
  const handleSend = async () => {
    if (!input.trim() && !image)
      return;

    const question = input;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: question,
      image: image
        ? URL.createObjectURL(image)
        : null,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");
    setImage(null);

    try {
      setIsThinking(true);

      const answer =
        await chatbotApi.sendMessage(
          question
        );

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: answer,
        },
      ]);

      fetchHistory();
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "Failed to connect to AgroVision AI.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };
  const openChat = async (id) => {
    try {
      const detail =
        await chatbotApi.getDetail(id);

      setMessages([
        {
          id: detail.id,
          role: "user",
          content: detail.ques,
        },
        {
          id: `${detail.id}-ai`,
          role: "assistant",
          content: detail.answ,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteChat =
    async (id) => {
      try {
        await chatbotApi.deleteChat(
          id
        );

        setChatHistory((prev) =>
          prev.filter(
            (chat) =>
              chat.id !== id
          )
        );
      } catch (error) {
        console.error(error);
      }
    };
  useEffect(() => {
    fetchHistory();
  }, []);
  return (
    <div className="relative flex h-[calc(100vh-80px)]">
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <ChatHero />
          {!hasUserMessage && (<motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
          >
            <SuggestionCards
              suggestions={suggestions}
              onSelect={setInput}
            />
          </motion.div>)}
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
      <ChatHistorySidebar history={chatHistory} onSelect={openChat} onDelete={handleDeleteChat} show={showWorkspace} onToggle={() => setShowWorkspace( !showWorkspace )}/>
    </div>
  );
}