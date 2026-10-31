function MyProgress() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (

    <div
      style={{
        padding: "40px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1>
        My Learning Progress
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >

        <h2>
          Student:
          {" "}
          {user?.name}
        </h2>

        <h3>
          Completed Course:
          Graphic Design
        </h3>

        <h3>
          Quiz Status:
          Passed
        </h3>

        <h3>
          Score:
          75%
        </h3>

        <h3>
          Certificate:
          Generated
        </h3>

      </div>

    </div>

  );

}

export default MyProgress;