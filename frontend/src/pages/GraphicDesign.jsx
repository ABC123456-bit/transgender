import { useNavigate } from "react-router-dom";

function GraphicDesign() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        padding: "40px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Graphic Design Skill Course
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >

        <h2>
          Module 1: Introduction to Graphic Design
        </h2>

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/BU_afT-aIn0"
          title="Graphic Design"
          allowFullScreen
        ></iframe>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          Learn:
        </p>

        <ul>
          <li>Design Principles</li>
          <li>Color Theory</li>
          <li>Typography</li>
          <li>Canva Basics</li>
          <li>Poster Design</li>
        </ul>

        <button
          onClick={() =>
            navigate("/graphic-design-quiz")
          }
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Start Skill Quiz
        </button>

      </div>

    </div>

  );

}

export default GraphicDesign;