const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Company = mongoose.model(
  "Empresa",
  new Schema(
    {
      empresa: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Company;
