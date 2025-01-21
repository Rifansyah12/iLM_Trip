import React, { useState, useEffect } from "react";
import callcenterImage from "../assets/logo/callcenter.png";

const ChatRoom = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Menambahkan pesan otomatis dari admin setelah beberapa detik dengan efek penulisan
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true); // Mulai efek penulisan
    }, 1000); // Efek typing dimulai setelah 0.5 detik

    const typingTimeout = setTimeout(() => {
      setIsTyping(false); // Hentikan efek typing
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Halo, bagaimana bisa saya bantu?", sender: "admin" },
      ]);
    }, 2000); // Pesan muncul setelah 2 detik (termasuk typing effect)

    // Bersihkan timeout jika komponen unmount
    return () => {
      clearTimeout(timeout);
      clearTimeout(typingTimeout);
    };
  }, []);

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#1A3B3A",
          padding: "10px 20px",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={callcenterImage}
            alt="Admin"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <h3 style={{ margin: 0 }}>Admin</h3>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            color: "white",
            cursor: "pointer",
            marginLeft: "auto",
          }}
        >
          ✕
        </button>
      </div>

      {/* Chat Content */}
      <div
        style={{
          flex: 1,
          padding: "15px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor:
                message.sender === "user" ? "#007bff" : "#e4e4e4",
              color: message.sender === "user" ? "white" : "black",
              padding: "12px 20px",
              borderRadius: "20px",
              maxWidth: "75%",
              wordWrap: "break-word",
              boxShadow:
                message.sender === "user"
                  ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
                  : "none",
              margin: "5px 0",
              borderBottomLeftRadius: message.sender === "user" ? "20px" : "0",
              borderBottomRightRadius: message.sender === "user" ? "0" : "20px",
            }}
          >
            {message.text}
          </div>
        ))}

        {/* Efek typing dengan titik-titik */}
        {isTyping && (
          <div
            style={{
              alignSelf: "flex-start",
              backgroundColor: "#e4e4e4",
              color: "black",
              padding: "12px 20px",
              borderRadius: "20px",
              maxWidth: "75%",
              wordWrap: "break-word",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              margin: "5px 0",
            }}
          >
            <em className="typing-indicator">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </em>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div
        style={{
          padding: "15px",
          borderTop: "1px solid #ddd",
          display: "flex",
          gap: "10px",
          backgroundColor: "white",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tulis pesan..."
          style={{
            flex: 1,
            padding: "12px 20px",
            borderRadius: "20px",
            border: "1px solid #ddd",
            outline: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "12px 20px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
