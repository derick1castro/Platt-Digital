const router = require("express").Router();

const UserController = require("../controllers/UserController");

// middleware
const verifyToken = require("../helpers/verify-token");
const { imageUpload } = require("../helpers/image-upload");

// registro de usuários
router.post("/register", UserController.register);

// login de usuários
router.post("/login", UserController.login);

// checando se o usuário existe
router.get("/checkuser", UserController.checkUser);

// lista de usuários
router.get("/usuarios", verifyToken, UserController.getAllUsers);

// detalhes do usuário
router.get("/:id", UserController.getUserById);

// remoção do usuário
router.delete("/:id", verifyToken, UserController.removeUserById);

// atualização do usuário
router.patch(
  "/edit/:id",
  verifyToken,
  imageUpload.single("image"),
  UserController.editUser
);

module.exports = router;
