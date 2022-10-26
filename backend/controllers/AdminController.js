const Admin = require("../models/Admin");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongoose").Types.ObjectId;

//helpers
const createAdminToken = require("../helpers/create-admin-token");
const getToken = require("../helpers/get-token");
const getAdminbyToken = require("../helpers/get-admin-by-token");

module.exports = class AdminController {
  static async register(req, res) {
    const { name, email, password } = req.body;

    // validations
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }

    if (!email) {
      res.status(422).json({ message: "O email é obrigatório" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória" });
      return;
    }

    // check if user ecists
    const AdminExists = await Admin.findOne({ email: email });

    if (AdminExists) {
      res.status(422).json({ message: "Por favor, utilize outro e-mail" });
      return;
    }

    // create a password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // create a user
    const admin = new Admin({
      name,
      email,
      password: passwordHash,
    });

    try {
      const newAdmin = await admin.save();
      await createAdminToken(newAdmin, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória" });
      return;
    }

    // check if user exists
    const admin = await Admin.findOne({ email: email });

    if (!admin) {
      res.status(422).json({
        message: "Não há administrador cadastrado com este e-mail",
      });
      return;
    }

    // check if password match with db password
    const checkPassword = await bcrypt.compare(password, admin.password);

    if (!checkPassword) {
      res.status(422).json({
        message: "Senha inválida!",
      });
      return;
    }

    await createAdminToken(admin, req, res);
  }

  static async checkAdmin(req, res) {
    let currentAdmin;
    console.log(req.headers.authorization);

    if (req.headers.authorization) {
      const token = getToken(req);
      const decoded = jwt.verify(token, "nossosecret");

      currentAdmin = await Admin.findById(decoded.id);

      currentAdmin.password = undefined;
    } else {
      currentAdmin = null;
    }

    res.status(200).send(currentAdmin);
  }

  static async getAllAdmin(req, res) {
    const admin = await Admin.find().sort("-createdAt");

    res.status(200).json({
      admin,
    });
  }

  static async getAdminById(req, res) {
    const id = req.params.id;

    const admin = await Admin.findById(id).select("-password");

    if (!admin) {
      res.status(422).json({
        message: "Administrador não encontrado!",
      });
      return;
    }

    res.status(200).json({ user });
  }

  static async removeAdminById(req, res) {
    const id = req.params.id;

    // check if ID is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido" });
      return;
    }

    // check if user exists
    const admin = await Admin.findOne({ _id: id });

    if (!admin) {
      res.status(409).json({ message: "Administrador não encontrado! " });
      return;
    }

    await User.findByIdAndRemove(id);

    res.status(200).json({ message: "Administrador removido com sucesso!" });
  }

  static async editAdmin(req, res) {
    const id = req.params.id;

    const token = getToken(req);
    const admin = await getAdminbyToken(token);

    const { name, email, password } = req.body;

    if (req.file) {
      admin.image = req.file.filename;
    }

    // validations
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }
    admin.name = name;

    if (!email) {
      res.status(422).json({ message: "O email é obrigatório" });
      return;
    }

    // check if user exists
    const adminExists = await Admin.findOne({ email: email });

    if (admin.email !== email && adminExists) {
      res.status(422).json({
        message: "Por favor, utilize outro e-mail!",
      });
      return;
    }

    admin.email = email;

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória " });
      return;
    } else if (password != null) {
      // creating password
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      admin.password = passwordHash;
    }

    try {
      // returns user updated data
      await Admin.findOneAndUpdate(
        { _id: admin._id },
        { $set: admin },
        { new: true }
      );

      res
        .status(200)
        .json({ message: "Administrador atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: err });
      return;
    }
  }
};
