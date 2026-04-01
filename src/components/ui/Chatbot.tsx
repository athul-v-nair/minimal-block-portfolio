"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Minimize2, Send, Loader2, Bot, User, Copy, Check } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ReactMarkdown from "react-markdown";
import { useCursor } from "@/contexts/CursorContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { changeColor } = useCursor();

  useEffect(() => {
    // Generate a unique session ID on mount
    setSessionId(Math.random().toString(36).substring(7));
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: "Hi there! I am Athul's AI assistant. I'm here to help answer any questions you have about his portfolio, experience, or skills. How can I help you today?",
        },
      ]);
    }
  };

  const API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL || "http://localhost:8000";

  const stripSources = (text: string) => {
    const marker = "[SOURCES]";
    const index = text.indexOf(marker);
    if (index !== -1) {
      return text.substring(0, index).trim();
    }
    return text;
  };

  const handleCopy = (text: string, id: number) => {
    const cleanText = stripSources(text);
    navigator.clipboard.writeText(cleanText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: userMessage.content,
          session_id: sessionId,
          top_k: 3,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let streamedContent = "";

      while (reader && !done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        if (chunkValue) {
          streamedContent += chunkValue;
          setMessages((prev) => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage.role === "assistant") {
              lastMessage.content = streamedContent;
            }
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error while trying to respond. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute bottom-0 right-0 w-[90vw] sm:w-[400px] rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 flex flex-col overflow-hidden max-h-[85vh] h-[550px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-black px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <h3 className="font-semibold text-sm">Athul&apos;s Assistant</h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded p-1.5 hover:bg-white/20 transition-colors"
                  aria-label="Minimize"
                >
                  <Minimize2 size={18} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6 bg-gray-50 hide-scrollbar">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex w-full gap-2 group relative",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white mt-1">
                      <Bot size={16} />
                    </div>
                  )}
                  <div className={cn("relative max-w-[85%]", msg.role === "user" ? "text-right" : "text-left")}>
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-2.5 text-sm shadow-sm transition-all",
                        msg.role === "user"
                          ? "bg-black text-white rounded-br-none"
                          : "bg-white border border-gray-200 text-black rounded-bl-none"
                      )}
                    >
                      <div className="prose prose-sm break-words prose-p:leading-relaxed prose-pre:bg-gray-100 prose-pre:text-black w-full overflow-x-auto">
                        <ReactMarkdown>
                          {msg.role === "assistant" ? stripSources(msg.content) : msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(msg.content, idx)}
                      className={cn(
                        "absolute top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 shadow-sm transition-all opacity-0 group-hover:opacity-100 hover:text-black",
                        msg.role === "user" ? "-left-8" : "-right-8",
                        copiedId === idx && "opacity-100 text-green-600 border-green-200"
                      )}
                      title="Copy message"
                    >
                      {copiedId === idx ? <Check size={12} /> : <Copy size={12} />}
                    </button>
                    {copiedId === idx && (
                      <span className={cn(
                        "absolute -top-6 text-[10px] font-medium text-green-600 transition-all",
                        msg.role === "user" ? "left-0" : "right-0"
                      )}>
                        Copied!
                      </span>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600 mt-1">
                      <User size={16} />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex w-full gap-2 justify-start">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white mt-1">
                    <Bot size={16} />
                  </div>
                  <div className="max-w-[80%] rounded-2xl px-4 py-3 text-sm bg-white border border-gray-100 shadow-sm text-black rounded-bl-none flex items-center gap-2">
                    <span className="flex gap-1">
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>.</motion.span>
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}>.</motion.span>
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}>.</motion.span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t bg-white p-3">
              <form
                onSubmit={handleSubmit}
                className="flex w-full items-center gap-2 rounded-xl border border-black/20 bg-gray-50/50 px-3 py-2.5 focus-within:ring-1 focus-within:ring-black transition-all"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask anything about Athul..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-white shadow-sm transition-all hover:opacity-90 disabled:opacity-50"
                >
                  {isLoading && !inputValue.trim() ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
        onMouseEnter={() => changeColor("black")}
        onMouseLeave={() => changeColor("white")}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-xl transition-all hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
        aria-label="Open chat"
      >
        <MessageCircle size={26} />
      </motion.button>
    </div>
  );
}
