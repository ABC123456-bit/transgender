const mongoose =
  require("mongoose");

const progressSchema =
  new mongoose.Schema({

    userId: {

      type:
        mongoose.Schema.Types.ObjectId,

      ref: "User",

    },

    courseName: {
      type: String,
    },

    score: {
      type: Number,
    },

    percentage: {
      type: Number,
    },

    passed: {
      type: Boolean,
    },

    certificateGenerated: {
      type: Boolean,
    },

  },

  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "Progress",
    progressSchema
  );