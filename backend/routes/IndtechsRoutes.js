const router = require("express").Router();

const IndtechsController = require("../controllers/IndtechsController");

// middlewares
const verifyToken = require("../helpers/verify-token");
const { imageUpload } = require("../helpers/image-upload");

//criação das solucoes
router.post(
  "/create",
  verifyToken,
  imageUpload.array("images"),
  IndtechsController.create
);

// home com todas as solucoes
router.get("/", IndtechsController.getAll);

//acessar a dashboard com todas as solucoes cadastradas
router.get("/indtechs", verifyToken, IndtechsController.getAllIndtechs);

//acessar os detalhes de cada um individualmente
router.get("/:id", IndtechsController.getIndtechsById);

//remoção das solucoes
router.delete("/:id", verifyToken, IndtechsController.removeIndtechsById);

//atualização das solucoes
router.patch(
  "/:id",
  verifyToken,
  imageUpload.array("images"),
  IndtechsController.UpdateIndtechs
);

module.exports = router;
