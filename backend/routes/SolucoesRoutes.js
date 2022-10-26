const router = require("express").Router();

const SolucoesController = require("../controllers/SolucoesController");

// middlewares
const verifyToken = require("../helpers/verify-token");
const { imageUpload } = require("../helpers/image-upload");

//criação das solucoes
router.post(
  "/create",
  verifyToken,
  imageUpload.fields([{ name: "images1" }, { name: "images2" }]),
  SolucoesController.create
);

// home com todas as solucoes
router.get("/", SolucoesController.getAll);

//acessar a dashboard com todas as solucoes cadastradas
router.get("/minhassolucoes", verifyToken, SolucoesController.getAllSolucoes);

//acessar os detalhes de cada um individualmente
router.get("/:id", SolucoesController.getSoulucoesById);

//remoção das solucoes
router.delete("/:id", verifyToken, SolucoesController.removeSolucoesById);

//atualização das solucoes
router.patch(
  "/:id",
  verifyToken,
  imageUpload.array("images"),
  SolucoesController.UpdateSolucao
);

module.exports = router;
