const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

//get user by jwt token
const getAdminByToken = async (token) => {
  if (!token) {
    return res.status(401).json({ message: "Acesso Negado!" });
  }

  const decoded = jwt.verify(token, "nossosecret");

  const adminId = decoded.id;

  const admin = await Admin.findOne({ _id: adminId });

  return admin;
};

module.exports = getAdminByToken;
