const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Indtechs = mongoose.model(
  "Indtechs",
  new Schema(
    {
      titulo: {
        type: String,
        required: true,
      },
      descricao: {
        type: String,
        required: true,
      },
      caracteristicas: {
        type: String,
      },
      images: {
        type: Array,
      },
    },
    { timestamps: true }
  )
);

module.exports = Indtechs;
