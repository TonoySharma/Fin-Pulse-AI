"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send, Bot, User, Sparkles, MessageCircleIcon } from "lucide-react";

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

  // Messenger style auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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

      if (data.success && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.reply,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.message || "Sorry, I could not understand.",
          },
        ]);
      }
    } catch (error) {
      console.error("Chat Client Error:", error);
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
    <div className="font-sans antialiased selection:bg-blue-500/30">
      {/* Floating Messenger Action Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-tr from-[#006aff] via-[#0084ff] to-[#00c6ff] text-white shadow-[0_8px_24px_rgba(0,106,255,0.3)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 group"
        >
          <MessageCircleIcon size={30} className="fill-white group-hover:rotate-6 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-zinc-900"></span>
          </span>
        </button>
      )}

      {/* Premium Messenger Box Box UI */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] rounded-2xl bg-white dark:bg-[#1c1c1e] shadow-[0_12px_42px_rgba(0,0,0,0.16)] border border-zinc-200/60 dark:border-zinc-800/80 overflow-hidden flex flex-col transition-all duration-300 scale-100 origin-bottom-right">
          
          {/* Messenger Custom Top Bar Header */}
          <div className="px-4 py-3 bg-white dark:bg-[#1c1c1e] border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center shadow-sm z-10">
            <div className="flex gap-3 items-center">
              <div className="relative">
                <div className="bg-gradient-to-tr from-[#006aff] to-[#00c6ff] p-2.5 rounded-full text-white shadow-md">
                  <Bot size={22} className="stroke-[2.5]" />
                </div>
                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-[#45bd62] border-2 border-white dark:border-[#1c1c1e]" />
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-zinc-900 dark:text-zinc-50 tracking-tight leading-none">FinPulse AI</h3>
                <p className="text-[12px] text-[#006aff] dark:text-[#398fff] font-medium mt-1 flex items-center gap-1">
                  Active now
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messenger Clean Feed Room */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2.5 bg-zinc-50/50 dark:bg-[#121212]">
            {messages.map((msg, index) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={index}
                  className={`flex gap-2 items-end ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <div className="bg-zinc-200 dark:bg-zinc-800 p-1 rounded-full mb-0.5 shadow-sm">
                      <Bot size={14} className="text-zinc-600 dark:text-zinc-300" />
                    </div>
                  )}

                  <div
                    className={`max-w-[75%] px-3.5 py-2 text-[14.5px] leading-snug tracking-wide transition-all ${
                      isUser
                        ? "bg-[#0084ff] text-white rounded-[18px] rounded-br-[4px] shadow-sm font-normal"
                        : "bg-[#e4e6eb] dark:bg-[#242526] text-zinc-900 dark:text-zinc-100 rounded-[18px] rounded-bl-[4px]"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}

            {/* Premium Messenger Typing Indicator */}
            {loading && (
              <div className="flex gap-2 items-center text-zinc-400">
                <div className="bg-zinc-200 dark:bg-zinc-800 p-1 rounded-full shadow-sm">
                  <Bot size={14} className="text-zinc-600 dark:text-zinc-300" />
                </div>
                <div className="bg-[#e4e6eb] dark:bg-[#242526] rounded-[18px] rounded-bl-[4px] px-4 py-3 flex gap-1 items-center shadow-sm">
                  <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Reply Premium Context Chips */}
          {messages.length === 1 && !loading && (
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-zinc-50/50 dark:bg-[#121212]">
              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => sendMessage(item)}
                  className="whitespace-nowrap text-[12px] font-medium border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#242526] text-zinc-700 dark:text-zinc-200 rounded-full px-3.5 py-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-700 shadow-sm active:scale-95 transition-all flex items-center flex-shrink-0"
                >
                  <Sparkles size={11} className="mr-1.5 text-amber-500 fill-amber-500" />
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* Bottom Custom Utilities Input Row */}
          <div className="p-3 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-[#1c1c1e] flex gap-2 items-center">
            <div className="flex-1 relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Aa"
                disabled={loading}
                className="w-full text-[14.5px] rounded-full border-none bg-[#f0f2f5] dark:bg-[#242526] pl-4 pr-3 py-2.5 outline-none text-zinc-950 dark:text-zinc-50 placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-1 focus:ring-blue-500/30 transition-all disabled:opacity-60"
              />
            </div>
            
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="text-[#0084ff] hover:text-[#006aff] dark:text-[#398fff] p-2 transition-all active:scale-90 disabled:text-zinc-300 dark:disabled:text-zinc-700 disabled:scale-100"
            >
              <Send size={20} className="fill-current stroke-none" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}