import React, { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Bot, User } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const categories = [
  "📒 Spirituality",
  "👤 Autobiography",
  "📚 History",
  "📷 Photography",
  "🔥 Science",
  "🌍 Travel",
  "💻 Technology",
  "💡 Self-help",
  "🔍 Cookbooks",
  "🔍 Mystery",
  "👻 Horror",
  "🧩 Thriller",
  "🏰 Historical Fiction",
  "📖 Literary Fiction",
  "🚀 Science Fiction",
  "💥 Action",
  "🧙 Fantasy",
];

const options = ["Browse Books", "Contact Support", "Know about me", "Who are you"];

const sections = {
  "Browse Books": [
    "All Categories",
    "New Arrivals",
    "Best Sellers",
    "Discounted Books",
  ],
  "Know about me": [
    "I am LitCart, your online bookstore assistant.",
    "Ask me anything about books, orders, or support.",
  ],
  "Who are you": [
    "I am LitBot, your virtual book assistant from LitCart.",
    "I'm here to help you explore, shop, and get support.",
  ],
  "thanks": ["Welcome. Visit again!"],
};

const LitBot = () => {
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState("");
  const [chat, setChat] = useState([]);
  const [showOptions, setShowOptions] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const [showShopRedirect, setShowShopRedirect] = useState(false);
  const navigate = useNavigate();
  const chatRef = useRef(null);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const startListening = () => {
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleUserInput(transcript);
    };
    recognition.onerror = (e) => {
      console.error("Error:", e);
      setIsListening(false);
    };
    recognition.start();
  };

  const handleUserInput = async (text) => {
    if (!text.trim()) return;
    setChat((prev) => [...prev, { sender: "user", text }]);
    setInputText("");
    setShowOptions(false);

    if (text.toLowerCase().includes("browse")) {
      setShowCategories(true);
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Here are some categories to choose from:" },
      ]);
      return;
    }

    if (text.toLowerCase().includes("contact")) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Redirecting you to contact support..." },
      ]);
      setTimeout(() => navigate("/contactus"), 1500);
      return;
    }

    const matchedSection = options.find((option) =>
      text.toLowerCase().includes(option.toLowerCase())
    );
    if (matchedSection && sections[matchedSection]) {
      sections[matchedSection].forEach((info) => {
        setChat((prev) => [...prev, { sender: "bot", text: info }]);
      });
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message: text,
      });
      const reply = res.data.reply;
      setChat((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error(err);
      setChat((prev) => [...prev, { sender: "bot", text: "Please choose from options or type or speak!" }]);
    }
  };

  const handleOptionClick = (option) => {
    handleUserInput(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserInput(inputText);
  };

  const scrollToBottom = () => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dbeafe] via-[#fce7f3] to-[#e0f2fe] flex flex-col items-center py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-800 mb-6 flex items-center"
      >
        <Bot className="w-8 h-8 text-purple-600 mr-3" /> Welcome to LitBot
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-xl flex flex-col h-[600px] overflow-hidden border"
      >
        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2"
        >
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`px-4 py-2 rounded-2xl text-white max-w-xs whitespace-pre-wrap break-words ${
                  msg.sender === "user"
                    ? "bg-indigo-600"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
              >
                {msg.text}
              </motion.div>
            </div>
          ))}

          {showOptions && (
            <div className="space-y-2">
              <p className="text-gray-600">Hi! I'm LitBot. How can I help you today?</p>
              <div className="flex gap-2 flex-wrap">
                {options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showCategories && (
            <div className="space-y-2">
              <p className="text-gray-700 font-semibold">Select a category:</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    className="bg-pink-200 text-black px-3 py-1 rounded-full hover:bg-pink-300"
                    onClick={() => {
                      setChat((prev) => [
                        ...prev,
                        { sender: "user", text: cat },
                        {
                          sender: "bot",
                          text: `Do you want to go to shop for ${cat}?`,
                        },
                      ]);
                      setShowShopRedirect(true);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showShopRedirect && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Do you want to go to the shop?</p>
              <button
                onClick={() => navigate("/")}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Yes, take me to shop
              </button>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
          >
            Send
          </button>
          <button
            type="button"
            onClick={startListening}
            disabled={isListening}
            className={`p-2 rounded-full text-white transition ${
              isListening ? "bg-red-500" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LitBot;
