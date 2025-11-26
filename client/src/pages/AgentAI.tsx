import React, { useState, useRef, useEffect } from "react";

// Simuler l'API pour la démo
const askAI = async (message: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Réponse de l'IA à : "${message}"`;
};

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { from: "user" | "ai"; text: string; timestamp: string }[]
  >([
    {
      from: "ai",
      text: "Hello! I'm your AI Assistant. How can I help you today? You can ask me about your account, recent orders, or our services.",
      timestamp: "10:30 AM",
    },
    {
      from: "user",
      text: "I have a question about my recent invoice.",
      timestamp: "10:31 AM",
    },
    {
      from: "ai",
      text: "I can certainly help with that. Please provide the invoice number or the date of the order.",
      timestamp: "10:31 AM",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const send = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    const now = new Date();
    const timestamp = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: userMsg, timestamp }]);
    setLoading(true);

    const aiReply = await askAI(userMsg);
    const aiTimestamp = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    setMessages((prev) => [...prev, { from: "ai", text: aiReply, timestamp: aiTimestamp }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b bg-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-semibold">
              AI
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">AI Assistant</span>
            <span className="text-xs text-gray-500">Online</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            —
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50 space-y-4">
        {/* Date Separator */}
        <div className="flex justify-center">
          <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
            Today
          </span>
        </div>

        {messages.map((msg, index) => (
          <div key={index} className="space-y-1">
            {msg.from === "ai" ? (
              <>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                    AI
                  </div>
                  <div className="flex flex-col gap-1 max-w-[70%]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-900">
                        AI Assistant
                      </span>
                      <span className="text-xs text-gray-400">{msg.timestamp}</span>
                    </div>
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm text-sm leading-relaxed">
                      {msg.text}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-end items-start gap-3">
                  <div className="flex flex-col gap-1 max-w-[70%] items-end">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{msg.timestamp}</span>
                      <span className="text-xs font-medium text-gray-900">You</span>
                    </div>
                    <div className="bg-blue-500 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-sm text-sm leading-relaxed">
                      {msg.text}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                    U
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs font-semibold">
              AI
            </div>
            <div className="bg-white shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.15s" }}
                ></span>
                <span
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                ></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-6 py-4 bg-white border-t">
        <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
          <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
            </svg>
          </button>

          <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
            </svg>
          </button>

          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />

          <button
            onClick={send}
            className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}