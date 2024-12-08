"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import io from "socket.io-client";
import { Send, User, MessageCircle } from "lucide-react";

export default function ChatRoom() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!roomId) return;

    if (!socketRef.current) {
      const socket = io("http://localhost:3000");
      socketRef.current = socket;

      const onMessageReceived = (data) => {
        setMessages((prev) => [...prev, data]);
      };

      socket.on("connect", () => {
        setUserId(socket.id);
        socket.emit("join room", roomId);
      });

      socket.on("message", onMessageReceived);

      return () => {
        socket.off("message", onMessageReceived);
        socket.disconnect();
        socketRef.current = null;
      };
    }
  }, [roomId]);

  const sendMessage = () => {
    if (!socketRef.current) {
      console.error("Socket is not initialized.");
      return;
    }
    if (message.trim()) {
      socketRef.current.emit("message", {
        roomId,
        content: message,
        from: userId,
      });
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-300 p-4">
      <div className="w-full max-w-md transform overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:scale-105">
        {/* Header */}
        <div className="flex items-center space-x-4 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 p-6 text-white shadow-md">
          <MessageCircle size={32} />
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide">Chat Room</h1>
            <p className="text-sm opacity-90">Room: {roomId}</p>
          </div>
        </div>

        {/* Messages Container */}
        <div className="h-[450px] space-y-4 overflow-y-auto bg-gray-50 p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === userId ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-lg transition-all duration-300 ${
                  msg.from === userId
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "border bg-white text-gray-800"
                }`}
              >
                <p
                  className={`mb-1 text-xs font-semibold transition-all ${
                    msg.from === userId ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {msg.from === userId ? (
                    "You"
                  ) : (
                    <User className="mr-1 inline-block" size={12} />
                  )}
                </p>
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="border-t bg-white p-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-full bg-gray-100 px-5 py-3 text-sm text-gray-700 shadow-inner transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={sendMessage}
              className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-3 text-white shadow-md transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50"
              disabled={!message.trim()}
            >
              <Send size={20} />
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-gray-500">
            Your ID: {userId.slice(0, 8)}...
          </p>
        </div>
      </div>
    </div>
  );
}
