const express = require("express");
const cors = require("cors");

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credential: true, origin: "http://127.0.0.1:5173" }));

// Public folder for images
app.use(express.static("public"));

//Routes
const AdminRoutes = require("./routes/AdminRoutes");
const UserRoutes = require("./routes/UserRoutes");
const EmpresasRoutes = require("./routes/EmpresasRoutes");
const SolucoesRoutes = require("./routes/SolucoesRoutes");
const IndtechsRoutes = require("./routes/IndtechsRoutes");

app.use("/admin", AdminRoutes);
app.use("/users", UserRoutes);
app.use("/solucoes", SolucoesRoutes);
app.use("/empresas", EmpresasRoutes);
app.use("/indtechs", IndtechsRoutes);

app.listen(5000);
