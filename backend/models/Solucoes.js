const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Solucoes = mongoose.model(
  "Solucoes",
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
      descricaoCurta: {
        type: String,
        required: true,
      },
      indtech: {
        type: String,
        required: true,
      },
      caracteristicas1: {
        type: String,
      },
      caracteristicas2: {
        type: String,
      },
      caracteristicas3: {
        type: String,
      },
      caracteristicas4: {
        type: String,
      },
      caracteristicas5: {
        type: String,
      },
      dores1: {
        type: String,
      },
      dores2: {
        type: String,
      },
      dores3: {
        type: String,
      },
      dores4: {
        type: String,
      },
      dores5: {
        type: String,
      },
      case1: {
        type: String,
      },
      case2: {
        type: String,
      },
      case3: {
        type: String,
      },
      case4: {
        type: String,
      },
      case5: {
        type: String,
      },
      linkCase1: {
        type: String,
      },
      linkCase2: {
        type: String,
      },
      linkCase3: {
        type: String,
      },
      linkCase4: {
        type: String,
      },
      linkCase5: {
        type: String,
      },
      images1: {
        type: Array,
      },
      images2: {
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

module.exports = Solucoes;
