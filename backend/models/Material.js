const mongoose =
require("mongoose");

const materialSchema =
new mongoose.Schema({

  title: {

    type: String,

    required: true,

  },

  description: {

    type: String,

    default: "",

  },

  courseName: {

    type: String,

    required: true,

  },

  pdfLink: {

    type: String,

    default: "",

  },

  videoLink: {

    type: String,

    default: "",

  },

  teacherId: {

    type:
      mongoose.Schema.Types.ObjectId,

    ref: "User",

  },

},

{

  timestamps: true,

});

module.exports =
mongoose.model(

  "Material",

  materialSchema

);