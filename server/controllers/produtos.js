const produto = require("../models/produtos");
const multer = require("multer");
const upload = multer({ dest: "upload/" });

module.exports = (app) => {
  app.get("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(req.params.id);
    produto.buscaPorId(id, res);
  });

  app.post("/produtos", upload.single('imagem'), (req, res) => {
    console.log(req.file);
    const produtos = req.body;
    produto.adiciona(produtos, res);
  });

  app.patch("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    produto.altera(id, valores, res);
  });

  app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    produto.deleta(id, res);
  });
};
