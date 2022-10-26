const router = require("express").Router();

const EmpresasController = require("../controllers/EmpresasController");

// middlewars
const verifyToken = require("../helpers/verify-token");

//criação das empresas
router.post("/create", verifyToken, EmpresasController.create);

//acessar a dashboard com todas as empresas cadastradas
router.get(
  "/allcompanies",
  verifyToken,
  EmpresasController.getAllCompanies
);

//acessar os detalhes de cada empresa individualmente
router.get("/:id", EmpresasController.getCompanyById);

//remoção das empresas
router.delete("/:id", verifyToken, EmpresasController.removeCompanyById);

//atualização das empresas
router.patch("/:id", verifyToken, EmpresasController.UpdateCompany);

module.exports = router;
