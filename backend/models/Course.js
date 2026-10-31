const mongoose = require("mongoose");

const courseSchema =
  new mongoose.Schema({

    courseName: String,

    description: String,

    category: String,

    teacherId: {

      type:
        mongoose.Schema.Types.ObjectId,

      ref: "User",

    },

  });

module.exports =
  mongoose.model(
    "Course",
    courseSchema
  );