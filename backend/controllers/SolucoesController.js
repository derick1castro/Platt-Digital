const Solucoes = require("../models/Solucoes");

//helpers
const getAdminByToken = require("../helpers/get-admin-by-token");
const getToken = require("../helpers/get-token");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class SolucoesController {
  // create solution
  static async create(req, res) {
    const {
      titulo,
      descricao,
      indtech,
      caracteristicas1,
      caracteristicas2,
      caracteristicas3,
      caracteristicas4,
      caracteristicas5,
      dores1,
      dores2,
      dores3,
      dores4,
      dores5,
      case1,
      case2,
      case3,
      case4,
      case5,
    } = req.body;

    // images upload
    console.log("aqui está", req.files);
    const { images1, images2 } = req.files;

    // validations
    if (!titulo) {
      res.status(422).json({ message: "O título é obrigatório!" });
      return;
    }

    if (!descricao) {
      res.status(422).json({ message: "A descrição é obrigatória!" });
      return;
    }

    if (!indtech) {
      res.status(422).json({ message: "A indtech é obrigatória!" });
      return;
    }

    if (images1.length === 0) {
      res.status(422).json({ message: "A imagem é obrigatória!" });
      return;
    }

    if (images2.length === 0) {
      res.status(422).json({ message: "A imagem é obrigatória!" });
      return;
    }

    // get user
    const token = getToken(req);
    const admin = getAdminByToken(token);

    // create solution

    const solucoes = new Solucoes({
      titulo,
      descricao,
      indtech,
      caracteristicas1,
      caracteristicas2,
      caracteristicas3,
      caracteristicas4,
      caracteristicas5,
      dores1,
      dores2,
      dores3,
      dores4,
      dores5,
      case1,
      case2,
      case3,
      case4,
      case5,
      images1: [],
      images2: [],
      admin: {
        _id: admin._id,
        name: admin.name,
        images1: admin.images1,
        images2: admin.images2,
      },
    });

    images1.map((image1) => {
      solucoes.images1.push(image1.filename);
    });

    images2.map((image2) => {
      solucoes.images2.push(image2.filename);
    });

    try {
      const newSolucoes = await solucoes.save();
      res.status(201).json({
        message: "Solução cadastrada com sucesso!",
        newSolucoes: newSolucoes,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async getAll(req, res) {
    const solucoes = await Solucoes.find().sort("-createdAt");

    res.status(200).json({
      solucoes: solucoes,
    });
  }

  static async getAllSolucoes(req, res) {
    const solucoes = await Solucoes.find().sort("-createdAt");

    res.status(200).json({
      solucoes,
    });
  }

  static async getSoulucoesById(req, res) {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
    }

    // check if solution exists
    const solucoes = await Solucoes.findOne({ _id: id });

    if (!solucoes) {
      res.status(404).json({ message: "Solução não econtrada" });
    }

    res.status(200).json({
      solucoes: solucoes,
    });
  }

  static async removeSolucoesById(req, res) {
    const id = req.params.id;

    // check if ID is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if solucoes exists
    const solucoes = await Solucoes.findOne({ _id: id });

    if (!solucoes) {
      res.status(404).json({ message: "Solução não encontrada!" });
      return;
    }

    await Solucoes.findByIdAndRemove(id);

    res.status(200).json({ message: "Solução removida com sucesso!" });
  }

  static async UpdateSolucao(req, res) {
    const id = req.params.id;

    const {
      titulo,
      descricao,
      indtech,
      caracteristicas1,
      caracteristicas2,
      caracteristicas3,
      caracteristicas4,
      caracteristicas5,
      dores1,
      dores2,
      dores3,
      dores4,
      dores5,
      case1,
      case2,
      case3,
      case4,
      case5,
    } = req.body;

    const { images1, images2 } = req.files;

    const updatedData = {};

    // check id solucao exists
    const solucoes = await Solucoes.findOne({ _id: id });

    if (!solucoes) {
      res.status(404).json({ message: "Solução não encontrada!" });
      return;
    }

    //validations
    if (!titulo) {
      res.status(422).json({ message: "O título é obrigatório!" });
      return;
    } else {
      updatedData.titulo = titulo;
    }

    if (!descricao) {
      res.status(422).json({ message: "A descrição é obrigatória!" });
      return;
    } else {
      updatedData.descricao = descricao;
    }

    if (!indtech) {
      res.status(422).json({ message: "A indtech é obrigatória!" });
      return;
    } else {
      updatedData.indtech = indtech;
    }

    if (caracteristicas1) {
      updatedData.caracteristicas1 = caracteristicas1;
      return;
    }
    if (caracteristicas2) {
      updatedData.caracteristicas2 = caracteristicas2;
      return;
    }
    if (caracteristicas3) {
      updatedData.caracteristicas3 = caracteristicas3;
      return;
    }
    if (caracteristicas4) {
      updatedData.caracteristicas4 = caracteristicas4;
      return;
    }
    if (caracteristicas5) {
      updatedData.caracteristicas5 = caracteristicas5;
      return;
    }
    if (dores1) {
      updatedData.dores1 = dores1;
      return;
    }
    if (dores2) {
      updatedData.dores2 = dores2;
      return;
    }
    if (dores3) {
      updatedData.dores3 = dores3;
      return;
    }
    if (dores4) {
      updatedData.dores4 = dores4;
      return;
    }
    if (dores5) {
      updatedData.dores5 = dores5;
      return;
    }

    if (case1) {
      updatedData.case1 = case1;
      return;
    }
    if (case2) {
      updatedData.case2 = case2;
      return;
    }
    if (case3) {
      updatedData.case3 = case3;
      return;
    }
    if (case4) {
      updatedData.case4 = case4;
      return;
    }
    if (case5) {
      updatedData.case5 = case5;
      return;
    }

    if (images1.length > 0) {
      updatedData.images1 = [];
      images1.map((image1) => {
        updatedData.images1.push(image1.filename);
      });
    }

    if (images2.length > 0) {
      updatedData.images2 = [];
      images2.map((image2) => {
        updatedData.images2.push(image2.filename);
      });
    }

    await Solucoes.findByIdAndUpdate(id, updatedData);

    res.status(200).json({ message: "Solução atualizada com sucesso!" });
  }
};
