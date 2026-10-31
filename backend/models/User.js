const mongoose = require("mongoose");

const userSchema =
  new mongoose.Schema(

    {

      // NAME

      name: {

        type: String,

        required: true,

      },



      // EMAIL

      email: {

        type: String,

        required: true,

        unique: true,

      },



      // PASSWORD

      password: {

        type: String,

        required: true,

      },



      // ROLE

      role: {

        type: String,

        enum: [

          "student",
          "teacher",
          "ngo",
          "recruiter",
          "admin",

        ],

        default: "student",

      },



      // NGO LINK

      ngoId: {

        type: String,

        default: null,

      },



      // ENROLLED PROGRAMS

      enrolledPrograms: [

        {

          type: String,

        },

      ],



      // STUDENT PROGRESS

      progress: {

        type: Number,

        default: 0,

      },



      // RISK STATUS

      riskStatus: {

        type: String,

        default: "Safe",

      },



      // RECRUITER SHORTLIST

      shortlisted: {

        type: Boolean,

        default: false,

      },



      // CERTIFICATES

      certificates: [

        {

          type: String,

        },

      ],



      // SKILLS

      skills: [

        {

          type: String,

        },

      ],

    },



    {

      timestamps: true,

    }

  );



module.exports =
  mongoose.model(

    "User",

    userSchema

  );