import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

export default function ChatbotPopup({ isOpen, onClose }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const GEMINI_API_KEY = "AIzaSyBo1I_8OAkHsrekY8b2Nlrk-DzOcz31ZX8"; // Replace with your actual key

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMsg = { sender: "user", text: userInput };
    setChatHistory((prev) => [...prev, userMsg]);
    setUserInput("");
    setLoading(true);

   try {
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [
            {
              text: `You are a helpful science tutor for Class 11 students. Only answer questions related to Thermodynamics in simple, easy words, with real-life examples students can relate to. in 2 lines only 
                  
Student's Question: ${userInput}`,
            },
          ],
        },
      ],
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  const aiReply =
    response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "I couldn't generate a response.";

  const botMsg = { sender: "bot", text: aiReply };
  setChatHistory((prev) => [...prev, botMsg]);
} catch (error) {
  console.error("Gemini API Error:", error);
  setChatHistory((prev) => [
    ...prev,
    { sender: "bot", text: "Error processing your doubt." },
  ]);
}


    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/30">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white bg-opacity-20 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-6 w-96 text-white flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Dr.Nisha Sharma </h2>
              <button onClick={onClose} className="text-xl hover:text-red-500">
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 h-60 overflow-y-auto bg-white/10 rounded p-2 mb-4 space-y-2 text-sm">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded ${
                    msg.sender === "user"
                      ? "bg-blue-500 self-end ml-auto"
                      : "bg-gray-700 self-start mr-auto"
                  } max-w-[80%]`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <div className="text-gray-300 text-sm">Thinking...</div>}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask your doubt..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 px-3 py-2 rounded bg-white/20 text-white outline-none"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
                disabled={!userInput.trim() || loading}
              >
                Send
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
