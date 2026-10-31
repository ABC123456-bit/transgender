import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function GraphicDesignQuiz() {

  const navigate =
    useNavigate();



  // QUESTIONS

  const questions = [

    {

      question:
        "Which software is used for graphic design?",

      options: [

        "Photoshop",
        "MS Word",
        "Excel",
        "Chrome",

      ],

      correct:
        "Photoshop",

    },



    {

      question:
        "Which color combination creates contrast?",

      options: [

        "Black & White",
        "Blue & Blue",
        "Red & Red",
        "Green & Green",

      ],

      correct:
        "Black & White",

    },



    {

      question:
        "Which file format is best for logos?",

      options: [

        "PNG",
        "JPEG",
        "SVG",
        "MP3",

      ],

      correct:
        "SVG",

    },

  ];



  // STATES

  const [selectedAnswers,
    setSelectedAnswers] =

    useState({});



  const [score,
    setScore] =

    useState(0);



  const [submitted,
    setSubmitted] =

    useState(false);




  // HANDLE OPTION SELECT

  const handleSelect =

    (questionIndex, option) => {

      setSelectedAnswers({

        ...selectedAnswers,

        [questionIndex]:
          option,

      });

    };




  // HANDLE SUBMIT

  const handleSubmit =
    async () => {

      let finalScore = 0;



      // CHECK ANSWERS

      questions.forEach(
        (q, index) => {

          if (

            selectedAnswers[index]
            === q.correct

          ) {

            finalScore++;

          }

        }
      );



      setScore(finalScore);

      setSubmitted(true);




      // CALCULATE PERCENTAGE

      const percentage =

        (
          finalScore /
          questions.length
        ) * 100;




      // GET USER

      const userData =

        localStorage.getItem(
          "user"
        );



      const user =

        userData
          ? JSON.parse(userData)
          : null;




      // SAVE PROGRESS

      try {

        await axios.post(

          "http://localhost:5000/api/save-progress",

          {

            userId:
              user?._id,

            courseName:
              "Graphic Design",

            score:
              finalScore,

            percentage,

            passed:
              percentage >= 50,

            certificateGenerated:
              percentage >= 50,

          }

        );



        console.log(
          "Graphic Design Progress Saved"
        );

      }

      catch (error) {

        console.log(error);

      }




      // CERTIFICATE NAVIGATION

      if (percentage >= 50) {

        setTimeout(() => {

          navigate(
            "/skill-certificate"
          );

        }, 2000);

      }

    };




  return (

    <div
      style={{
        padding: "40px",
        background:
          "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1>
        Graphic Design Quiz
      </h1>



      {

        questions.map(
          (q, index) => (

            <div
              key={index}

              style={{

                background:
                  "white",

                padding:
                  "20px",

                marginTop:
                  "20px",

                borderRadius:
                  "10px",

                boxShadow:

                  "0 0 10px rgba(0,0,0,0.1)",

              }}
            >

              <h3>
                {q.question}
              </h3>



              {

                q.options.map(
                  (option, i) => (

                    <button

                      key={i}

                      onClick={() =>

                        handleSelect(
                          index,
                          option
                        )

                      }

                      style={{

                        display:
                          "block",

                        marginTop:
                          "10px",

                        padding:
                          "12px 20px",

                        width:
                          "220px",

                        borderRadius:
                          "8px",

                        border:
                          "1px solid gray",

                        cursor:
                          "pointer",



                        backgroundColor:

                          selectedAnswers[index]
                          === option

                            ? "green"

                            : "white",



                        color:

                          selectedAnswers[index]
                          === option

                            ? "white"

                            : "black",



                        fontWeight:

                          selectedAnswers[index]
                          === option

                            ? "bold"

                            : "normal",

                      }}
                    >

                      {option}

                    </button>

                  )
                )

              }

            </div>

          )
        )

      }



      {/* SUBMIT BUTTON */}

      <button

        onClick={handleSubmit}

        style={{

          marginTop:
            "30px",

          padding:
            "15px 30px",

          background:
            "black",

          color:
            "white",

          border:
            "none",

          borderRadius:
            "10px",

          cursor:
            "pointer",

          fontSize:
            "18px",

        }}
      >

        Submit Quiz

      </button>



      {/* RESULT */}

      {

        submitted && (

          <div
            style={{

              marginTop:
                "30px",

              background:
                "white",

              padding:
                "20px",

              borderRadius:
                "10px",

              boxShadow:

                "0 0 10px rgba(0,0,0,0.1)",

            }}
          >

            <h2>

              Your Score:
              {" "}
              {score}
              /
              {questions.length}

            </h2>



            <h2>

              Percentage:
              {" "}

              {

                (
                  (
                    score /
                    questions.length
                  ) * 100
                ).toFixed(0)

              }%

            </h2>



            {

              (
                (
                  score /
                  questions.length
                ) * 100
              ) >= 50

              ? (

                <h2
                  style={{
                    color:
                      "green",
                  }}
                >

                  Passed

                </h2>

              )

              : (

                <h2
                  style={{
                    color:
                      "red",
                  }}
                >

                  Failed

                </h2>

              )

            }

          </div>

        )

      }

    </div>

  );

}



export default GraphicDesignQuiz;