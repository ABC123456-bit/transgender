import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

function Login() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await fetch(

            "http://localhost:5000/api/login",

            {

              method: "POST",

              headers: {

                "Content-Type":
                  "application/json",

              },

              body: JSON.stringify({

                email,
                password,

              }),

            }

          );

        const data =
          await response.json();

        alert(data.message);

        if (response.ok) {

          // SAVE TOKEN

          localStorage.setItem(

            "token",
            data.token

          );

          // SAVE USER

          localStorage.setItem(

            "user",

            JSON.stringify(
              data.user
            )

          );

          // ROLE BASED NAVIGATION

          const role =
            data.user.role;

          if (
            role === "student"
          ) {

            navigate(
              "/dashboard"
            );

          }

          else if (
            role === "ngo"
          ) {

            navigate(
              "/ngo-dashboard"
            );

          }

          else if (
            role === "teacher"
          ) {

            navigate(
              "/teacher-dashboard"
            );

          }

          else if (
            role === "recruiter"
          ) {

            navigate(
              "/recruiter-dashboard"
            );

          }

          else if (
            role === "admin"
          ) {

            navigate(
              "/admin-dashboard"
            );

          }

        }

      }

      catch (error) {

        console.log(error);

        alert(
          "Login Failed"
        );

      }

    };

  return (

    <div

      style={{

        height: "100vh",

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        background:
          "linear-gradient(to right, purple, hotpink)",

      }}

    >

      <form

        onSubmit={
          handleLogin
        }

        style={{

          background:
            "white",

          padding: "30px",

          borderRadius:
            "10px",

          width: "350px",

          display: "flex",

          flexDirection:
            "column",

          gap: "15px",

        }}

      >

        <h2>
          Login
        </h2>

        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e) =>

            setEmail(
              e.target.value
            )

          }

          style={{

            padding: "12px",

          }}

        />

        <input

          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e) =>

            setPassword(
              e.target.value
            )

          }

          style={{

            padding: "12px",

          }}

        />

        <button

          type="submit"

          style={{

            padding: "12px",

            background:
              "black",

            color: "white",

            border: "none",

            borderRadius:
              "8px",

            cursor:
              "pointer",

          }}

        >

          Login

        </button>

        <Link to="/signup">

          Create New Account

        </Link>

      </form>

    </div>

  );

}

export default Login;