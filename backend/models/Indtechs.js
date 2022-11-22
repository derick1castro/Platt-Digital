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
      paradasDeManutencao: {
        type: String,
      },
      EngenhariaEManutencao: {
        type: String,
      },
      LogisticaEBackoffice: {
        type: String,
      },
      planejamentoEControle: {
        type: String,
      },
      Esg: {
        type: String,
      },
    },
    { timestamps: true }
  )
);

module.exports = Indtechs;
