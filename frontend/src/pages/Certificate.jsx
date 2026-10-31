function Certificate() {

  const storedUser =
    localStorage.getItem("user");

  const user =
    storedUser
      ? JSON.parse(storedUser)
      : null;

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
      }}
    >

      <div
        style={{
          background: "white",
          padding: "50px",
          width: "700px",
          textAlign: "center",
          border:
            "10px solid #4CAF50",
          borderRadius: "15px",
        }}
      >

        <h1
          style={{
            color: "#4CAF50",
          }}
        >
          Certificate of Completion
        </h1>

        <h2>
          AI Empowerment Platform
        </h2>

        <p
          style={{
            marginTop: "30px",
            fontSize: "22px",
          }}
        >
          This certifies that
        </p>

        <h1>
          {
            user?.name ||
            "Student"
          }
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          has successfully completed
        </p>

        <h2
          style={{
            color: "#4CAF50",
          }}
        >
          Class 8 Science Quiz
        </h2>

      </div>

    </div>

  );

}

export default Certificate;