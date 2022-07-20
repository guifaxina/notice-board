const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const apiRoute = require("./routes/api");

app.use("/api", apiRoute);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
