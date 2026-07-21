"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send, Bot, Sparkles, MessageCircleIcon } from "lucide-react";

interface Message {
  role: "user" | "assistant" | "model";
  content: string;
}

const suggestions = [
  "Best AI tool for coding?",
  "Suggest AI tools for students",
  "Compare ChatGPT and Gemini",
];

export default function AIChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi 👋 I am FinPulse AI Assistant. How can I help you today?",
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // অটোমেটিক স্ক্রোলিং
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // মেসেজ পাঠানোর ফাংশন
  const sendMessage = async (text?: string) => {
    const message = text || input;
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
      const response = await fetch(`${serverUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history: updatedMessages,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Sorry, I could not understand.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans antialiased">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#006aff] via-[#0084ff] to-[#00c6ff] text-white shadow-[0_8px_24px_rgba(0,106,255,0.3)] transition hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
        >
          <MessageCircleIcon size={28} className="fill-white" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4">
            <span className="absolute h-full w-full animate-ping rounded-full bg-green-400" />
            <span className="relative h-4 w-4 rounded-full border-2 border-white bg-green-500" />
          </span>
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-3 right-3 z-50 flex h-[75vh] w-[calc(100vw-24px)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_12px_42px_rgba(0,0,0,0.16)] dark:border-zinc-800 dark:bg-[#1c1c1e] sm:bottom-6 sm:right-6 sm:h-[600px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-3 py-3 dark:border-zinc-800 sm:px-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-tr from-[#006aff] to-[#00c6ff] p-2.5 text-white">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold">FinPulse AI</h3>
                <p className="text-xs text-blue-500">Active now</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full bg-zinc-100 p-2 dark:bg-zinc-800"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto bg-zinc-50 px-3 py-4 space-y-3 dark:bg-[#121212] sm:px-4">
            {messages.map((msg, index) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={index}
                  className={`flex items-end gap-2 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isUser && <Bot size={16} className="text-zinc-500" />}
                  <div
                    className={`max-w-[80%] px-3 py-2 text-sm rounded-2xl ${
                      isUser
                        ? "bg-[#0084ff] text-white rounded-br-sm"
                        : "bg-[#e4e6eb] dark:bg-[#242526]"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {loading && (
              <div className="flex gap-2">
                <Bot size={16} />
                <div className="rounded-xl bg-zinc-200 px-4 py-3 dark:bg-zinc-800">
                  <div className="flex gap-1">
                    <span className="animate-bounce">•</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>•</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>•</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && !loading && (
            <div className="no-scrollbar flex gap-2 overflow-x-auto px-3 py-2">
              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => sendMessage(item)}
                  className="flex-shrink-0 rounded-full border bg-white px-3 py-2 text-xs dark:bg-zinc-800 whitespace-nowrap"
                >
                  <Sparkles size={12} className="mr-1 inline text-yellow-500" />
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <div className="flex gap-2 border-t bg-white p-3 dark:border-zinc-800 dark:bg-[#1c1c1e]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Aa"
              className="flex-1 rounded-full bg-zinc-100 px-4 py-2.5 text-sm outline-none dark:bg-zinc-800"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading}
              className="text-blue-500 disabled:opacity-40"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}