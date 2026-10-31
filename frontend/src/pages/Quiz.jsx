import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Quiz() {

  const navigate =
    useNavigate();



  // QUESTIONS

  const questions = [

    {

      question:
        "Which process is used to grow crops?",

      options: [

        "Agriculture",
        "Mining",
        "Fishing",
        "Transport",

      ],

      answer:
        "Agriculture",

    },



    {

      question:
        "Which microorganism makes curd?",

      options: [

        "Bacteria",
        "Virus",
        "Fungi",
        "Protozoa",

      ],

      answer:
        "Bacteria",

    },



    {

      question:
        "Which is a synthetic fibre?",

      options: [

        "Cotton",
        "Wool",
        "Nylon",
        "Silk",

      ],

      answer:
        "Nylon",

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




  // HANDLE QUIZ SUBMIT

  const handleSubmit =
    async () => {

      let finalScore = 0;



      questions.forEach(
        (q, index) => {

          if (

            selectedAnswers[index]
            === q.answer

          ) {

            finalScore++;

          }

        }
      );



      setScore(finalScore);

      setSubmitted(true);




      // PERCENTAGE

      const percentage =

        (finalScore /
          questions.length) * 100;




      // USER

      const userData =

        localStorage.getItem(
          "user"
        );



      const user =

        userData
          ? JSON.parse(userData)
          : null;



      console.log(
        "Logged In User:",
        user
      );



      // IF USER NOT FOUND

      if (!user) {

        alert(
          "User Not Logged In"
        );

        return;

      }




      try {

        // SAVE PROGRESS API

        const response =

          await axios.post(

            "http://localhost:5000/api/save-progress",

            {

              userId:
                user._id,

              courseName:
                "Science Quiz",

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
          "Progress Saved:",
          response.data
        );



        alert(
          "Progress Saved Successfully"
        );

      }

      catch (error) {

        console.log(
          "SAVE PROGRESS ERROR:",
          error.response?.data ||
          error.message
        );



        alert(
          "Failed To Save Progress"
        );

      }




      // PASS CONDITION

      if (finalScore >= 2) {

        setTimeout(() => {

          navigate(
            "/certificate"
          );

        }, 2000);

      }

    };




  return (

    <div
      style={{
        padding: "30px",
        backgroundColor:
          "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1>
        Science Quiz
      </h1>



      {

        questions.map(
          (q, index) => (

            <div
              key={index}

              style={{

                backgroundColor:
                  "white",

                padding: "20px",

                marginTop: "20px",

                borderRadius: "10px",

                boxShadow:

                  "0px 0px 10px rgba(0,0,0,0.1)",

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
                          "10px 20px",

                        borderRadius:
                          "5px",

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

      <div
        style={{
          marginTop: "40px",
          marginBottom: "100px",
        }}
      >

        <button

          onClick={handleSubmit}

          style={{

            padding:
              "15px 30px",

            backgroundColor:
              "black",

            color:
              "white",

            border:
              "none",

            borderRadius:
              "10px",

            fontSize:
              "18px",

            cursor:
              "pointer",

          }}
        >

          Submit Quiz

        </button>

      </div>



      {/* RESULT */}

      {

        submitted && (

          <div
            style={{

              backgroundColor:
                "white",

              padding:
                "20px",

              borderRadius:
                "10px",

              boxShadow:

                "0px 0px 10px rgba(0,0,0,0.1)",

            }}
          >

            <h2>

              Your Score:
              {" "}
              {score}/3

            </h2>



            {

              score >= 2

                ? (

                  <h3
                    style={{
                      color:
                        "green",
                    }}
                  >

                    Congratulations!
                    You Passed

                  </h3>

                )

                : (

                  <h3
                    style={{
                      color:
                        "red",
                    }}
                  >

                    You Failed.
                    Try Again

                  </h3>

                )

            }

          </div>

        )

      }

    </div>

  );

}



export default Quiz;