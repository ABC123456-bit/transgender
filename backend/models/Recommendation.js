const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({

  interest: {
    type: String,
  },

  recommendations: {
    type: Array,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model(
  "Recommendation",
  recommendationSchema
);