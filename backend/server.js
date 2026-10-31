const Material =
require("./models/Material");

const Course =
require("./models/Course");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/User");
const Progress = require("./models/Progress");

const app = express();



// ===================================
// MIDDLEWARE
// ===================================

app.use(cors());

app.use(express.json());



// ===================================
// MONGODB CONNECTION
// ===================================

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {

    console.log(
      "MongoDB Connected Successfully"
    );

  })

  .catch((error) => {

    console.log(error);

  });



// ===================================
// HOME ROUTE
// ===================================

app.get("/", (req, res) => {

  res.send(
    "Backend Running Successfully"
  );

});



// ===================================
// SIGNUP API
// ===================================

app.post(
  "/api/signup",

  async (req, res) => {

    try {

      const {

        name,
        email,
        password,
        role,

      } = req.body;

      const userExists =
        await User.findOne({

          email,

        });

      if (userExists) {

        return res.status(400).json({

          message:
            "User Already Exists",

        });

      }

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      const newUser =
        new User({

          name,
          email,

          password:
            hashedPassword,

          role,

        });

      await newUser.save();

      res.json({

        message:
          "User Registered Successfully",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Signup Failed",

      });

    }

  }
);



// ===================================
// LOGIN API
// ===================================

app.post(
  "/api/login",

  async (req, res) => {

    try {

      const {

        email,
        password,

      } = req.body;

      const user =
        await User.findOne({

          email,

        });

      if (!user) {

        return res.status(400).json({

          message:
            "User Not Found",

        });

      }

      const isMatch =
        await bcrypt.compare(

          password,
          user.password

        );

      if (!isMatch) {

        return res.status(400).json({

          message:
            "Invalid Password",

        });

      }

      const token =
        jwt.sign(

          {

            id: user._id,

            role: user.role,

          },

          process.env.JWT_SECRET,

          {

            expiresIn: "1d",

          }

        );

      res.json({

        message:
          "Login Successful",

        token,
        user,

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Login Failed",

      });

    }

  }
);



// ===================================
// NGO ADD STUDENT
// ===================================

app.post(
  "/api/ngo/add-student",

  async (req, res) => {

    try {

      const {

        ngoId,
        name,
        email,
        password,

      } = req.body;

      const existingStudent =
        await User.findOne({

          email,

        });

      if (existingStudent) {

        return res.status(400).json({

          message:
            "Student Already Exists",

        });

      }

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      const newStudent =
        new User({

          name,
          email,

          password:
            hashedPassword,

          role: "student",

          ngoId,

        });

      await newStudent.save();

      res.json({

        message:
          "Student Added Successfully",

        student:
          newStudent,

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed To Add Student",

      });

    }

  }
);



// ===================================
// NGO FETCH STUDENTS
// ===================================

app.get(
  "/api/ngo/students/:ngoId",

  async (req, res) => {

    try {

      const ngoId =
        req.params.ngoId;

      const students =
        await User.find({

          ngoId,

          role: "student",

        });

      res.json(students);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed To Fetch Students",

      });

    }

  }
);



// ===================================
// SAVE PROGRESS
// ===================================

app.post(
  "/api/save-progress",

  async (req, res) => {

    try {

      const {

        userId,
        courseName,
        score,
        percentage,
        passed,
        certificateGenerated,

      } = req.body;

      const newProgress =
        new Progress({

          userId,
          courseName,
          score,
          percentage,
          passed,
          certificateGenerated,

        });

      await newProgress.save();

      await User.findByIdAndUpdate(

        userId,

        {

          progress: percentage,

          riskStatus:

            percentage < 30

              ? "At Risk"

              : "Safe",

        }

      );

      res.json({

        message:
          "Progress Saved Successfully",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed To Save Progress",

      });

    }

  }
);



// ===================================
// FETCH USER PROGRESS
// ===================================

app.get(
  "/api/my-progress/:userId",

  async (req, res) => {

    try {

      const progress =
        await Progress.find({

          userId:
            req.params.userId,

        });

      res.json(progress);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed To Fetch Progress",

      });

    }

  }
);



// ===================================
// AI RECOMMENDATIONS
// ===================================

app.get(
  "/api/recommendations/:userId",

  async (req, res) => {

    try {

      const userId =
        req.params.userId;

      const progress =
        await Progress.find({

          userId,

        })

        .sort({
          createdAt: -1,
        })

        .limit(1);

      let recommendations = [];

      progress.forEach((item) => {

        if (
          item.percentage < 50
        ) {

          recommendations.push({

            title:
              "Basic Foundation Course",

            description:
              "Improve your fundamentals with beginner-friendly learning modules.",

          });

        }

        else if (

          item.percentage >= 50 &&
          item.percentage < 75

        ) {

          recommendations.push({

            title:
              "Intermediate Skill Training",

            description:
              "Enhance your practical understanding with guided projects and quizzes.",

          });

        }

        else {

          recommendations.push({

            title:
              "Advanced Employability Program",

            description:
              "You are performing well. Explore advanced employability and career-oriented programs.",

          });

        }

      });

      res.json(recommendations);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed To Generate Recommendations",

      });

    }

  }
);



// ===================================
// RECRUITER FETCH CANDIDATES
// ===================================

app.get(
  "/api/recruiter/candidates",

  async (req, res) => {

    try {

      const candidates =

        await User.find({

          role: "student",

          progress: {
            $gte: 50,
          },

        });

      res.json(candidates);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed To Fetch Candidates",

      });

    }

  }
);



// ===================================
// SHORTLIST CANDIDATE
// ===================================

app.put(
  "/api/recruiter/shortlist/:id",

  async (req, res) => {

    try {

      await User.findByIdAndUpdate(

        req.params.id,

        {

          shortlisted: true,

        }

      );

      res.json({

        message:
          "Candidate Shortlisted",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed To Shortlist",

      });

    }

  }
);



// ===================================
// ADMIN FETCH USERS
// ===================================

app.get(
  "/api/admin/users",

  async (req, res) => {

    try {

      const users =
        await User.find();

      res.json(users);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed To Fetch Users",

      });

    }

  }
);



// ===================================
// ADMIN DELETE USER
// ===================================

app.delete(
  "/api/admin/delete-user/:id",

  async (req, res) => {

    try {

      await User.findByIdAndDelete(
        req.params.id
      );

      res.json({

        message:
          "User Deleted Successfully",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed To Delete User",

      });

    }

  }

);
// ===================================
// TEACHER CREATE COURSE
// ===================================

app.post(
  "/api/teacher/course",

  async (req, res) => {

    try {

      const {
        courseName,
        description,
        category,
        teacherId,
      } = req.body;

      const newCourse =
        new Course({
          courseName,
          description,
          category,
          teacherId,
        });

      await newCourse.save();

      res.json({
        message: "Course Created",
      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        message: "Error",
      });

    }

  }

);


// ===================================
// FETCH TEACHER COURSES
// ===================================

app.get(
  "/api/teacher/courses/:teacherId",

  async (req, res) => {

    try {

      const courses =
        await Course.find({

          teacherId:
            req.params.teacherId,

        });

      res.json(courses);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Error Fetching Courses",
      });

    }

  }

);


// ===================================
// UPLOAD MATERIAL
// ===================================

app.post(
  "/api/teacher/material",

  async (req, res) => {

    try {

      const {
        title,
        description,
        pdfLink,
        videoLink,
        courseName,
        teacherId,
      } = req.body;

      const material =
        new Material({

          title,
          description,
          pdfLink,
          videoLink,
          courseName,
          teacherId,

        });

      await material.save();

      res.json({

        message:
          "Material Uploaded Successfully",

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Error Uploading Material",

      });

    }

  }

);


// ===================================
// FETCH MATERIALS
// ===================================

app.get(
  "/api/materials/:courseName",

  async (req, res) => {

    try {

      const materials =
        await Material.find({

          courseName:
            req.params.courseName,

        });

      res.json(materials);

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Error Fetching Materials",

      });

    }

  }

);



// ===================================
// SERVER
// ===================================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});