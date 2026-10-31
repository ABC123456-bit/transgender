import { useEffect, useState } from "react";

import axios from "axios";

function NgoDashboard() {

  const [students, setStudents] =
    useState([]);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");



  // SAFE USER FETCH

  const userData =
    localStorage.getItem("user");

  const user =
    userData
      ? JSON.parse(userData)
      : null;

  const ngoId =
    user?._id;



  // FETCH STUDENTS ON LOAD

  useEffect(() => {

    if (ngoId) {

      fetchStudents();

    }

  }, [ngoId]);



  // FETCH STUDENTS

  const fetchStudents = async () => {

    try {

      const response =
        await axios.get(

          `http://localhost:5000/api/ngo/students/${ngoId}`

        );

      setStudents(response.data);

    }

    catch (error) {

      console.log(
        "Fetch Error:",
        error
      );

    }

  };



  // ADD STUDENT

  const addStudent = async () => {

    try {

      if (
        !name ||
        !email ||
        !password
      ) {

        alert(
          "Please fill all fields"
        );

        return;

      }

      const response =
        await axios.post(

          "http://localhost:5000/api/ngo/add-student",

          {

            ngoId,

            name,

            email,

            password,

          }

        );

      alert(
        response.data.message
      );



      // CLEAR FORM

      setName("");

      setEmail("");

      setPassword("");



      // REFRESH STUDENTS

      fetchStudents();

    }

    catch (error) {

      console.log(
        "Add Student Error:",
        error
      );

      alert(

        error.response?.data
          ?.message ||

        "Failed To Add Student"

      );

    }

  };



  // ANALYTICS

  const totalStudents =
    students.length;

  const atRiskStudents =
    students.filter(

      (student) =>

        (student.progress || 0) < 30

    ).length;

  const activeStudents =
    students.filter(

      (student) =>

        (student.progress || 0) >= 30

    ).length;

  const averageProgress =

    students.length > 0

      ? (

          students.reduce(

            (acc, curr) =>

              acc +
              (curr.progress || 0),

            0

          ) / students.length

        ).toFixed(1)

      : 0;



  return (

    <div
      style={{
        padding: "30px",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1>
        NGO Dashboard
      </h1>



      {/* ADD STUDENT */}

      <div
        style={{

          background: "white",

          padding: "20px",

          borderRadius: "12px",

          marginTop: "30px",

          marginBottom: "40px",

        }}
      >

        <h2>
          Add Student
        </h2>



        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={inputStyle}
        />



        <input
          type="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />



        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />



        <button
          onClick={addStudent}
          style={buttonStyle}
        >

          Add Student

        </button>

      </div>



      {/* ANALYTICS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
          gap: "20px",
        }}
      >

        <DashboardCard
          title="Total Students"
          value={totalStudents}
          color="#2f80ed"
        />



        <DashboardCard
          title="Active Students"
          value={activeStudents}
          color="#27ae60"
        />



        <DashboardCard
          title="At Risk Students"
          value={atRiskStudents}
          color="#eb5757"
        />



        <DashboardCard
          title="Average Progress"
          value={`${averageProgress}%`}
          color="#9b51e0"
        />

      </div>



      {/* STUDENTS */}

      <h2
        style={{
          marginTop: "50px",
        }}
      >

        Registered Students

      </h2>



      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        {

          students.map(
            (student, index) => (

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

                <h3>
                  {student.name}
                </h3>

                <p>
                  Email:
                  {" "}
                  {student.email}
                </p>

                <p>
                  Progress:
                  {" "}
                  {student.progress || 0}%
                </p>

                <p>

                  Status:
                  {" "}

                  {

                    (student.progress || 0) < 30

                      ? "At Risk"

                      : "Active"

                  }

                </p>

              </div>

            )
          )

        }

      </div>

    </div>

  );

}



// DASHBOARD CARD

function DashboardCard({

  title,
  value,
  color,

}) {

  return (

    <div
      style={{

        background: color,

        color: "white",

        padding: "25px",

        borderRadius: "15px",

        textAlign: "center",

      }}
    >

      <h2>
        {value}
      </h2>

      <p>
        {title}
      </p>

    </div>

  );

}



// INPUT STYLE

const inputStyle = {

  width: "100%",

  padding: "12px",

  marginBottom: "15px",

  borderRadius: "8px",

  border: "1px solid #ccc",

};



// BUTTON STYLE

const buttonStyle = {

  padding: "12px 20px",

  background: "#2f80ed",

  color: "white",

  border: "none",

  borderRadius: "8px",

  cursor: "pointer",

};



export default NgoDashboard;