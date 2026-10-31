function SkillCertificate() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (

    <div
      style={{
        height: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        background: "#f4f4f4",
      }}
    >

      <div
        style={{
          width: "800px",

          background: "white",

          padding: "50px",

          borderRadius: "20px",

          textAlign: "center",

          border:
            "15px solid #1e90ff",

          boxShadow:
            "0px 0px 20px rgba(0,0,0,0.2)",
        }}
      >

        <h1
          style={{
            color: "#1e90ff",
          }}
        >

          Skill Certification

        </h1>

        <h2>
          AI Employability Platform
        </h2>

        <br />

        <h1>
          This certifies that
        </h1>

        <h2
          style={{
            color: "#1e90ff",
          }}
        >

          {user?.name}

        </h2>

        <br />

        <h1>
          successfully completed
        </h1>

        <h2
          style={{
            color: "#1e90ff",
          }}
        >

          Graphic Design Skill Program

        </h2>

      </div>

    </div>

  );

}

export default SkillCertificate;