import { useState } from "react";

function AIChatbot() {

  const [message, setMessage] =
    useState("");

  const [chat, setChat] =
    useState([]);

  const sendMessage = () => {

    if (!message) return;

    const userMessage = {

      sender: "user",

      text: message,

    };

    setChat((prev) => [

      ...prev,
      userMessage,

    ]);

    let reply = "";

    if (
      message.toLowerCase().includes("ai")
    ) {

      reply =
        "Artificial Intelligence helps machines learn and solve problems like humans.";

    }

    else if (
      message.toLowerCase().includes("python")
    ) {

      reply =
        "Python is one of the most popular programming languages for AI.";

    }

    else if (
      message.toLowerCase().includes("career")
    ) {

      reply =
        "You can explore careers in AI, Web Development, Cybersecurity, and Data Science.";

    }

    else {

      reply =
        "I am your AI Learning Assistant.";

    }

    const botMessage = {

      sender: "bot",

      text: reply,

    };

    setChat((prev) => [

      ...prev,
      botMessage,

    ]);

    setMessage("");

  };

  return (

    <div
      style={{
        padding: "20px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h2>
        AI Learning Assistant
      </h2>

      <div
        style={{
          background: "white",
          height: "500px",
          overflowY: "scroll",
          padding: "20px",
          borderRadius: "10px",
        }}
      >

        {

          chat.map((msg, index) => (

            <div
              key={index}
              style={{
                textAlign:
                  msg.sender === "user"
                    ? "right"
                    : "left",
                marginBottom: "20px",
              }}
            >

              <span
                style={{
                  background:
                    msg.sender === "user"
                      ? "#2f80ed"
                      : "#e0e0e0",

                  color:
                    msg.sender === "user"
                      ? "white"
                      : "black",

                  padding: "10px 15px",

                  borderRadius: "10px",

                  display: "inline-block",

                  maxWidth: "70%",
                }}
              >

                {msg.text}

              </span>

            </div>

          ))

        }

      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
        }}
      >

        <input
          type="text"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid gray",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "12px 20px",
            background: "#2f80ed",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >

          Send

        </button>

      </div>

    </div>

  );

}

export default AIChatbot;