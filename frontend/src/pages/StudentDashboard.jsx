import { useNavigate } from "react-router-dom";

function StudentDashboard() {

  const navigate = useNavigate();

  const classes = [

    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",

  ];

  const skills = [

    "Graphic Design",
    "Digital Marketing",
    "AI Basics",
    "Data Entry",

  ];

  const handleClassClick = (selectedClass) => {

    if (selectedClass === "Class 8") {

      navigate("/class8-science");

    } else {

      alert("Module Coming Soon");

    }

  };

  const handleSkillClick = (skill) => {

    if (skill === "Graphic Design") {

      navigate("/graphic-design");

    } else {

      alert("Skill Module Coming Soon");

    }

  };

  return (

    <div
      style={{
        padding: "30px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >

        Student Learning Dashboard

      </h1>


      {/* TOP BUTTONS */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >

        <button

          onClick={() =>
            navigate("/my-progress")
          }

          style={{

            padding: "12px 25px",

            background: "#1e90ff",

            color: "white",

            border: "none",

            borderRadius: "10px",

            cursor: "pointer",

            fontSize: "16px",

          }}
        >

          My Progress

        </button>


        <button

          onClick={() =>
            navigate("/ai-recommendations")
          }

          style={{

            padding: "12px 25px",

            background: "#8e44ad",

            color: "white",

            border: "none",

            borderRadius: "10px",

            cursor: "pointer",

            fontSize: "16px",

          }}
        >

          AI Recommendations

        </button>


        <button

          onClick={() =>
            navigate("/ai-chatbot")
          }

          style={{

            padding: "12px 25px",

            background: "black",

            color: "white",

            border: "none",

            borderRadius: "10px",

            cursor: "pointer",

            fontSize: "16px",

          }}
        >

          AI Chatbot

        </button>

      </div>


      {/* EDUCATION MODULES */}

      <h2>
        Education Modules
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(5, 1fr)",
          gap: "20px",
          marginBottom: "50px",
        }}
      >

        {

          classes.map(
            (item, index) => (

              <div
                key={index}

                onClick={() =>
                  handleClassClick(item)
                }

                style={{

                  background: "white",

                  padding: "30px",

                  textAlign: "center",

                  borderRadius: "10px",

                  cursor: "pointer",

                  fontWeight: "bold",

                  boxShadow:
                    "0 2px 5px rgba(0,0,0,0.2)",

                }}
              >

                {item}

              </div>

            )
          )

        }

      </div>


      {/* SKILL TRAINING */}

      <h2>
        Employability Skill Training
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "50px",
        }}
      >

        {

          skills.map(
            (skill, index) => (

              <div
                key={index}

                onClick={() =>
                  handleSkillClick(skill)
                }

                style={{

                  background: "white",

                  padding: "30px",

                  textAlign: "center",

                  borderRadius: "10px",

                  cursor: "pointer",

                  fontWeight: "bold",

                  boxShadow:
                    "0 2px 5px rgba(0,0,0,0.2)",

                }}
              >

                {skill}

              </div>

            )
          )

        }

      </div>


      {/* AI CAREER ROADMAP */}

      <div

        onClick={() =>
          navigate("/career-roadmap")
        }

        style={{

          background:
            "linear-gradient(135deg,#27ae60,#2ecc71)",

          color: "white",

          padding: "25px",

          borderRadius: "15px",

          width: "300px",

          cursor: "pointer",

          boxShadow:
            "0 4px 15px rgba(0,0,0,0.2)",

          marginBottom: "30px",

        }}
      >

        <h3>
          🚀 AI Career Roadmap
        </h3>

        <p>
          Get step-by-step career
          guidance and learning path
        </p>

      </div>


      {/* RESUME BUILDER */}

      <div

        onClick={() =>
          navigate("/resume-builder")
        }

        style={{

          background:
            "linear-gradient(135deg,#8e44ad,#9b59b6)",

          color: "white",

          padding: "25px",

          borderRadius: "15px",

          width: "300px",

          cursor: "pointer",

          boxShadow:
            "0 4px 15px rgba(0,0,0,0.2)",

        }}
      >

        <h3>
          📄 Resume Builder
        </h3>

        <p>
          Create professional
          resumes easily
        </p>

      </div>

    </div>

  );

}

export default StudentDashboard;