import { useState } from "react";

function CareerRoadmap() {

  const [career, setCareer] =
    useState("");

  const [roadmap, setRoadmap] =
    useState([]);

  const generateRoadmap = () => {

    if (
      career === "AI Engineer"
    ) {

      setRoadmap([

        "Learn Python",

        "Learn Data Structures",

        "Learn Machine Learning",

        "Build AI Projects",

        "Learn Deep Learning",

        "Apply for Internships",

      ]);

    }

    else if (
      career === "Web Developer"
    ) {

      setRoadmap([

        "Learn HTML",

        "Learn CSS",

        "Learn JavaScript",

        "Learn React",

        "Build Projects",

        "Apply for Jobs",

      ]);

    }

    else if (
      career === "Graphic Designer"
    ) {

      setRoadmap([

        "Learn Canva",

        "Learn Photoshop",

        "Practice UI Design",

        "Build Portfolio",

        "Freelancing",

      ]);

    }

    else {

      setRoadmap([

        "Please Select Career",

      ]);

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

      <h1>
        AI Career Roadmap
      </h1>

      <select

        value={career}

        onChange={(e) =>
          setCareer(e.target.value)
        }

        style={{

          padding: "12px",

          width: "300px",

          borderRadius: "8px",

          marginTop: "20px",

        }}
      >

        <option>
          Select Career
        </option>

        <option>
          AI Engineer
        </option>

        <option>
          Web Developer
        </option>

        <option>
          Graphic Designer
        </option>

      </select>

      <br />

      <button

        onClick={generateRoadmap}

        style={{

          marginTop: "20px",

          padding: "12px 20px",

          background: "#2f80ed",

          color: "white",

          border: "none",

          borderRadius: "8px",

          cursor: "pointer",

        }}
      >

        Generate Roadmap

      </button>

      <div
        style={{
          marginTop: "40px",
        }}
      >

        {

          roadmap.map((step, index) => (

            <div

              key={index}

              style={{

                background: "white",

                padding: "15px",

                marginBottom: "15px",

                borderRadius: "8px",

              }}
            >

              Step {index + 1} :
              {" "}
              {step}

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default CareerRoadmap;