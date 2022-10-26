const Company = require("../models/Empresas");

const getUserByToken = require("../helpers/get-user-by-token");
const getToken = require("../helpers/get-token");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class EmpresasController {
  //criação das empresa
  static async create(req, res) {
    const empresa = req.body.empresa;

    // validations
    if (!empresa) {
      res.status(400).json({ message: "A empresa é obrigatória!" });
      return;
    }

    //criar a empresa
    const company = new Company({
      empresa,
    });

    const token = getToken(req);

    try {
      const newCompany = await company.save();
      res.status(201).json({
        message: "Empresa cadastrada com sucesso!",
        newCompany,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  //acessar a dashboard com todas as empresas cadastradas
  static async getAllCompanies(req, res) {
    const company = await Company.find().sort("-createdAt");

    res.status(200).json({
      company,
    });
  }

  //acessar os detalhes de cada empresa individualmente
  static async getCompanyById(req, res) {
    const id = req.params.id;

    //check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if company exists
    const company = await Company.findOne({ _id: id });

    if (!company) {
      res.status(404).json({ message: "Empresa não encontrada!" });
      return;
    }
    res.status(200).json({
      company: company,
    });
    return;
  }

  //remoção das empresas
  static async removeCompanyById(req, res) {
    const id = req.params.id;

    //check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if company exists
    const company = await Company.findOne({ _id: id });

    if (!company) {
      res.status(404).json({ message: "Empresa não encontrada!" });
      return;
    }

    await Company.findByIdAndRemove(id);

    res.status(200).json({ message: "Empresa removida com sucesso!" });
  }

  static async UpdateCompany(req, res) {
    const id = req.params.id;

    const empresa = req.body.empresa;

    const updatedData = {};

    // check if company exists
    const company = await Company.findOne({ _id: id });

    if (!company) {
      res.status(404).json({ message: "Empresa não encontrada!" });
      return;
    }

    // validations
    if (!empresa) {
      res.status(422).json({ message: "A empresa é obrigatória!" });
      return;
    } else {
      updatedData.empresa = empresa;
    }

    await Company.findByIdAndUpdate(id, updatedData);

    res.status(200).json({ message: "Empresa atualizada com sucesso!" });
  }
};
