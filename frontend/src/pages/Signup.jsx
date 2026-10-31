import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
            role,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {

        navigate("/");

      }

    } catch (error) {

      console.log(error);

      alert("Signup Failed");

    }

  };

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, purple, hotpink)",
      }}
    >

      <form
        onSubmit={handleSignup}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >

        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        >

          <option value="student">
            Student
          </option>

          <option value="teacher">
            Teacher
          </option>

          <option value="ngo">
            NGO
          </option>

          <option value="recruiter">
            Recruiter
          </option>

          <option value="admin">
            Admin
          </option>

        </select>

        <button type="submit">
          Signup
        </button>

        <Link to="/">
          Already have an account?
        </Link>

      </form>

    </div>

  );

}

export default Signup;