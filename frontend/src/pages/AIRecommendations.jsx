import {
  useEffect,
  useState,
} from "react";

function AIRecommendations() {

  const [recommendations,
    setRecommendations] =
    useState([]);

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  useEffect(() => {

    fetch(

      "http://localhost:5000/api/recommendations/" +
      user._id

    )

    .then((res) =>
      res.json()
    )

    .then((data) => {

      setRecommendations(data);

    })

    .catch((error) => {

      console.log(error);

    });

  }, []);

  return (

    <div
      style={{
        padding: "40px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1>
        AI Personalized Recommendations
      </h1>

      {
        recommendations.length === 0

        ? (

          <h2>
            No Recommendations Yet
          </h2>

        )

        : (

          recommendations.map(
            (item, index) => (

              <div
                key={index}

                style={{
                  background: "white",
                  padding: "20px",
                  marginTop: "20px",
                  borderRadius: "10px",
                }}
              >

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.description}
                </p>

              </div>

            )
          )

        )
      }

    </div>

  );

}

export default AIRecommendations;