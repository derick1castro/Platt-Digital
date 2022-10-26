const Indtechs = require("../models/Indtechs");

//helpers
const getAdminByToken = require("../helpers/get-admin-by-token");
const getToken = require("../helpers/get-token");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class IndtechsController {
  // create solution
  static async create(req, res) {
    const { titulo, descricao, caracteristicas } = req.body;

    // images upload
    console.log("aqui está", req.files);
    const images = req.files;

    // validations
    if (!titulo) {
      res.status(422).json({ message: "O título é obrigatório!" });
      return;
    }

    if (!descricao) {
      res.status(422).json({ message: "A descrição é obrigatória!" });
      return;
    }

    if (images === 0) {
      res.status(422).json({ message: "A imagem é obrigatória!" });
      return;
    }

    // get user
    const token = getToken(req);
    const admin = getAdminByToken(token);

    // create solution
    const indtechs = new Indtechs({
      titulo,
      descricao,
      caracteristicas,
      images: [],
      admin: {
        _id: admin._id,
        name: admin.name,
        image: admin.image,
      },
    });

    images.map((image) => {
      indtechs.images.push(image.filename);
    });

    try {
      const newIndtechs = await indtechs.save();
      res.status(201).json({
        message: "Indtech cadastrada com sucesso!",
        newIndtechs: newIndtechs,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async getAll(req, res) {
    const indtechs = await Indtechs.find().sort("-createdAt");

    res.status(200).json({
      indtechs: indtechs,
    });
  }

  static async getAllIndtechs(req, res) {
    const indtechs = await Indtechs.find().sort("-createdAt");

    res.status(200).json({
      indtechs,
    });
  }

  static async getIndtechsById(req, res) {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
    }

    // check if solution exists
    const indtechs = await Indtechs.findOne({ _id: id });

    if (!indtechs) {
      res.status(404).json({ message: "Indtech não econtrada" });
    }

    res.status(200).json({
      indtechs: indtechs,
    });
  }

  static async removeIndtechsById(req, res) {
    const id = req.params.id;

    // check if ID is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if solucoes exists
    const indtechs = await Indtechs.findOne({ _id: id });

    if (!indtechs) {
      res.status(404).json({ message: "Indtech não encontrada!" });
      return;
    }

    await Indtechs.findByIdAndRemove(id);

    res.status(200).json({ message: "Indtech removida com sucesso!" });
  }

  static async UpdateIndtechs(req, res) {
    const id = req.params.id;

    const { titulo, descricao, caracteristicas } = req.body;

    const images = req.files;

    const updatedData = {};

    // check id solucao exists
    const indtechs = await Indtechs.findOne({ _id: id });

    if (!indtechs) {
      res.status(404).json({ message: "Indtech não encontrada!" });
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

    if (caracteristicas) {
      updatedData.caracteristicas1 = caracteristicas1;
      return;
    }
    if (images.length > 0) {
      updatedData.images = [];
      images.map((image) => {
        updatedData.images.push(image.filename);
      });
    }

    await Indtechs.findByIdAndUpdate(id, updatedData);

    res.status(200).json({ message: "Indtech atualizada com sucesso!" });
  }
};
