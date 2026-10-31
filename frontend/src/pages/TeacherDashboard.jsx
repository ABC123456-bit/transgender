function TeacherDashboard() {

  return (

    <div
      style={{
        padding: "30px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1>
        Teacher Dashboard
      </h1>

      {/* Analytics Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        <div style={cardStyle}>
          <h2>120</h2>
          <p>Total Students</p>
        </div>

        <div style={cardStyle}>
          <h2>8</h2>
          <p>Courses Assigned</p>
        </div>

        <div style={cardStyle}>
          <h2>72%</h2>
          <p>Average Progress</p>
        </div>

        <div style={cardStyle}>
          <h2>15</h2>
          <p>At Risk Students</p>
        </div>

      </div>

      {/* Add Course */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "40px",
        }}
      >

        <h2>Create Course</h2>

        <input
          placeholder="Course Name"
          style={inputStyle}
        />

        <input
          placeholder="Description"
          style={inputStyle}
        />

        <input
          placeholder="Category"
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Create Course
        </button>

      </div>

      {/* Upload Material */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "30px",
        }}
      >

        <h2>Upload Learning Material</h2>

        <input
          placeholder="Title"
          style={inputStyle}
        />

        <input
          placeholder="PDF Link"
          style={inputStyle}
        />

        <input
          placeholder="Video Link"
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Upload Material
        </button>

      </div>

      {/* Student Monitoring */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "30px",
        }}
      >

        <h2>Student Monitoring</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >

          <thead>

            <tr>

              <th>Student</th>
              <th>Course</th>
              <th>Progress</th>
              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>Sona</td>
              <td>AI Basics</td>
              <td>80%</td>
              <td>Good</td>

            </tr>

            <tr>

              <td>Ravi</td>
              <td>Graphic Design</td>
              <td>25%</td>
              <td>At Risk</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}

const cardStyle = {

  background: "#2f80ed",

  color: "white",

  padding: "20px",

  borderRadius: "12px",

  textAlign: "center",

};

const inputStyle = {

  width: "100%",

  padding: "12px",

  marginBottom: "15px",

  border: "1px solid #ccc",

  borderRadius: "8px",

};

const buttonStyle = {

  padding: "12px 20px",

  background: "#27ae60",

  color: "white",

  border: "none",

  borderRadius: "8px",

  cursor: "pointer",

};

export default TeacherDashboard;