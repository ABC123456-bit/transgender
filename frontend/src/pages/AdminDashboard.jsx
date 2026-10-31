import { useEffect, useState } from "react";

import axios from "axios";

function AdminDashboard() {

  const [users,
    setUsers] =

    useState([]);




  // FETCH USERS

  const fetchUsers =
    async () => {

      try {

        const response =

          await axios.get(

            "http://localhost:5000/api/admin/users"

          );



        setUsers(
          response.data
        );

      }

      catch (error) {

        console.log(error);

      }

    };




  useEffect(() => {

    fetchUsers();

  }, []);




  // DELETE USER

  const deleteUser =
    async (id) => {

      try {

        await axios.delete(

          `http://localhost:5000/api/admin/delete-user/${id}`

        );



        alert(
          "User Deleted"
        );



        fetchUsers();

      }

      catch (error) {

        console.log(error);

      }

    };




  // ANALYTICS

  const totalUsers =
    users.length;



  const totalStudents =
    users.filter(

      (u) =>

        u.role === "student"

    ).length;



  const totalNGOs =
    users.filter(

      (u) =>

        u.role === "ngo"

    ).length;



  const totalRecruiters =
    users.filter(

      (u) =>

        u.role === "recruiter"

    ).length;




  return (

    <div
      style={{
        padding: "30px",
        background:
          "#f4f4f4",
        minHeight: "100vh",
      }}
    >

      <h1>
        Admin Dashboard
      </h1>



      {/* ANALYTICS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        <DashboardCard
          title="Total Users"
          value={totalUsers}
          color="#2f80ed"
        />



        <DashboardCard
          title="Students"
          value={totalStudents}
          color="#27ae60"
        />



        <DashboardCard
          title="NGOs"
          value={totalNGOs}
          color="#9b51e0"
        />



        <DashboardCard
          title="Recruiters"
          value={totalRecruiters}
          color="#eb5757"
        />

      </div>



      {/* USERS */}

      <h2
        style={{
          marginTop: "50px",
        }}
      >

        All Users

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

          users.map(
            (user, index) => (

              <div
                key={index}

                style={{

                  background:
                    "white",

                  padding:
                    "20px",

                  borderRadius:
                    "12px",

                  boxShadow:

                    "0 0 10px rgba(0,0,0,0.1)",

                }}
              >

                <h2>
                  {user.name}
                </h2>

                <p>
                  Email:
                  {" "}
                  {user.email}
                </p>

                <p>
                  Role:
                  {" "}
                  {user.role}
                </p>

                <p>
                  Progress:
                  {" "}
                  {user.progress}%
                </p>



                <button

                  onClick={() =>

                    deleteUser(
                      user._id
                    )

                  }

                  style={{

                    marginTop:
                      "15px",

                    padding:
                      "10px 20px",

                    background:
                      "red",

                    color:
                      "white",

                    border:
                      "none",

                    borderRadius:
                      "8px",

                    cursor:
                      "pointer",

                  }}
                >

                  Delete

                </button>

              </div>

            )
          )

        }

      </div>

    </div>

  );

}



// ANALYTICS CARD

function DashboardCard({

  title,
  value,
  color,

}) {

  return (

    <div
      style={{

        background:
          color,

        color:
          "white",

        padding:
          "25px",

        borderRadius:
          "15px",

        textAlign:
          "center",

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



export default AdminDashboard;