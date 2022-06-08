const Atendimento = require("../models/atendimentos");
const multer = require("multer");
const upload = multer({ dest: "upload/" });

module.exports = (app) => {
  app.get("/atendimentos/:id", (req, res) => {
    console.log(req.params.id);
    Atendimento.buscaPorId(id, res);
  });

  app.post("/atendimentos", upload.single('imagem'), (req, res) => {
    console.log(req.file);
    const atendimento = req.body;
    Atendimento.adiciona(atendimento, res);
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    Atendimento.altera(id, valores, res);
  });

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.deleta(id, res);
  });
};
