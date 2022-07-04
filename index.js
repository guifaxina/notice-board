const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

let posts = [
  {
    id: "sauhdusad",
    title: "Teste de Post",
    description: "Descrição teste",
  },
];

app.get("/all", (req, res) => {
  res.json(JSON.stringify(posts));
});

app.post("/new", bodyParser.json(), (req, res) => {
  let id = idGen();
  let title = req.body.title;
  let description = req.body.description;

  posts.push({ id, title, description });

  res.send("Post adicionado")
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

function idGen() {
  return Math.random().toString(36).substring(2, 9);
}
