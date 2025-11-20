import React, { useState, useRef, useEffect } from "react";
import { askAI } from "@/api/ai";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ from: "user" | "ai"; text: string }[]>([
    {
      from: "ai",
      text: "Bonjour ! Je suis votre agent AI dans KasbahVR. Posez-moi n'importe quelle question.",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const send = async () => {
    if (!input.trim()) return;

    // Ajouter le message de l'utilisateur
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    // Appel à l'API AI
    const aiReply = await askAI(input);

    // Ajouter la réponse AI
    setMessages((prev) => [...prev, { from: "ai", text: aiReply }]);
  };

  return (
    <div className="flex flex-col h-[500px] max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-indigo-600 text-white">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#6366F1">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5z"/>
          </svg>
        </div>
        <h2 className="text-lg font-semibold">Agent AI KasbahVR</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-xl ${
                msg.from === "user" ? "bg-indigo-600 text-white rounded-br-none" : "bg-white text-gray-800 rounded-bl-none shadow"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-gray-100 flex gap-2">
        <input
          type="text"
          placeholder="Pose ta question..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button
          onClick={send}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
