import { useEffect, useState } from "react";

import axios from "axios";

function RecruiterDashboard() {

  const [candidates,
    setCandidates] =

    useState([]);




  // FETCH CANDIDATES

  const fetchCandidates =
    async () => {

      try {

        const response =

          await axios.get(

            "http://localhost:5000/api/recruiter/candidates"

          );

        setCandidates(
          response.data
        );

      }

      catch (error) {

        console.log(error);

      }

    };




  useEffect(() => {

    fetchCandidates();

  }, []);

const shortlistCandidate =
  async (id) => {

    try {

      const response =

        await axios.put(

          `http://localhost:5000/api/recruiter/shortlist/${id}`

        );

      alert(
        response.data.message
      );

      fetchCandidates();

    }

    catch (error) {

      console.log(error);

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
        Recruiter Dashboard
      </h1>



      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {

          candidates.map(
            (candidate, index) => (

              <div
                key={index}

                style={{

                  background: "white",

                  padding: "20px",

                  borderRadius: "12px",

                  boxShadow:
                    "0 0 10px rgba(0,0,0,0.1)",

                }}
              >

                <h2>
                  {candidate.name}
                </h2>

                <p>
                  Email:
                  {" "}
                  {candidate.email}
                </p>

                <p>
                  Progress:
                  {" "}
                  {candidate.progress}%
                </p>

                <p>
                  Risk Status:
                  {" "}
                  {candidate.riskStatus}
                </p>

                <button
                  style={{

                    marginTop: "15px",

                    padding: "10px 20px",

                    background:
                      "black",

                    color: "white",

                    border: "none",

                    borderRadius: "8px",

                    cursor: "pointer",

                  }}
                >

               <button

  onClick={() =>

    shortlistCandidate(
      candidate._id
    )

  }

  style={{

    marginTop: "15px",

    padding: "10px 20px",

    background:
      "black",

    color: "white",

    border: "none",

    borderRadius: "8px",

    cursor: "pointer",

  }}
>

  {

    candidate.shortlisted

      ? "Shortlisted"

      : "Shortlist"

  }

</button>
                </button>

              </div>

            )
          )

        }

      </div>

    </div>

  );

}

export default RecruiterDashboard;