"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import io from "socket.io-client";

export default function ChatRoom() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId"); // Get roomId from the URL
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const socketRef = useRef(null); // Manage socket instance

  useEffect(() => {
    if (!roomId) return; // Wait until roomId is available

    // Initialize the socket only once
    if (!socketRef.current) {
      const socket = io("http://localhost:3000");
      socketRef.current = socket;

      const onMessageReceived = (data) => {
        setMessages((prev) => [...prev, data]);
      };

      socket.on("connect", () => {
        setUserId(socket.id); // Store user ID
        socket.emit("join room", roomId); // Join the room
      });

      // Listen for incoming messages
      socket.on("message", onMessageReceived);

    
      return () => {
        socket.off("message", onMessageReceived); 
        socket.disconnect(); // Disconnect socket
        socketRef.current = null; // Reset socketRef
      };
    }
  }, [roomId]); // Re-run the effect if roomId changes

  const sendMessage = () => {
    if (!socketRef.current) {
      console.error("Socket is not initialized.");
      return;
    }
    if (message.trim()) {
      // Only emit the message without updating local state immediately
      socketRef.current.emit("message", { roomId, content: message, from: userId });
      setMessage(""); // Clear input
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md mt-10">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-700">Chat Room: {roomId}</h1>
          <p className="text-sm text-gray-500">Your ID: {userId}</p>
        </div>
        <div className="p-4 space-y-2 h-64 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === userId ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg ${
                  msg.from === userId
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <p className="text-xs font-medium">
                  {msg.from === userId ? "You" : msg.from}
                </p>
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
              disabled={!message.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
