import { useState } from "react";

function Dashboard() {

  const [interest, setInterest] =
    useState("");

  const [
    recommendations,
    setRecommendations
  ] = useState([]);

  const [message, setMessage] =
    useState("");

  const [reply, setReply] =
    useState("");

  const getRecommendations =
    async () => {

      try {

        const response =
          await fetch(
            "http://127.0.0.1:5001/recommend",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                interest: interest,
              }),
            }
          );

        const data =
          await response.json();

        setRecommendations(
          data.recommendations
        );

      } catch (error) {

        console.log(error);

        alert("Backend Error");

      }

    };

  const sendMessage =
    async () => {

      try {

        const response =
          await fetch(
            "http://127.0.0.1:5001/chat",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                message: message,
              }),
            }
          );

        const data =
          await response.json();

        setReply(data.reply);

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <div className="dashboard">

      <div className="sidebar">

        <h2>
          AI Empowerment
        </h2>

        <p>
          Welcome User
        </p>

        <button>
          Logout
        </button>

      </div>

      <div className="main-content">

        <h1>
          AI Recommendation System
        </h1>

        <input
          type="text"
          placeholder="Enter Interest"
          value={interest}
          onChange={(e) =>
            setInterest(e.target.value)
          }
        />

        <br /><br />

        <button
          onClick={
            getRecommendations
          }
        >
          Get Recommendations
        </button>

        <div className="recommendations">

          {
            recommendations.map(
              (course, index) => (

                <p key={index}>
                  {course}
                </p>

              )
            )
          }

        </div>

      </div>

      <div className="chat-panel">

        <h2>
          AI Assistant
        </h2>

        <input
          type="text"
          placeholder="Ask AI..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <br /><br />

        <button
          onClick={sendMessage}
        >
          Send
        </button>

        <br /><br />

        <p>{reply}</p>

      </div>

    </div>

  );

}

export default Dashboard;