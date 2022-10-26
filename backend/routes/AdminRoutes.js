const router = require("express").Router();

const AdminController = require("../controllers/AdminController");

// middleware
const verifyToken = require("../helpers/verify-token");
const { imageUpload } = require("../helpers/image-upload");

// registro de usuários
router.post("/register", AdminController.register);

// login de usuários
router.post("/login", AdminController.login);

// checando se o usuário existe
router.get("/checkadmin", AdminController.checkAdmin);

// lista de usuários
router.get("/administradores", verifyToken, AdminController.getAllAdmin);

// detalhes do usuário
router.get("/:id", AdminController.getAdminById);

// remoção do usuário
router.delete("/:id", verifyToken, AdminController.removeAdminById);

// atualização do usuário
router.patch(
  "/edit/:id",
  verifyToken,
  imageUpload.single("image"),
  AdminController.editAdmin
);

module.exports = router;
