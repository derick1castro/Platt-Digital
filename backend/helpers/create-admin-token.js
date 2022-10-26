const jwt = require("jsonwebtoken");

const createAdminToken = async (admin, req, res) => {
  //create a token
  const token = jwt.sign(
    {
      name: admin.name,
      id: admin._id,
    },
    "nossosecret"
  );

  // return token
  res.status(200).json({
    message: "Você está autenticado",
    token: token,
    adminId: admin._id,
  });
};

module.exports = createAdminToken;
