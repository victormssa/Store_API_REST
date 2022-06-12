const produto = require("../models/produtos");

module.exports = (app) => {
  app.get("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(req.params.id);
    produto.buscaPorId(id, res);
  });
  app.get("/produtos",(req, res)=>{
    produto.lista(res);
  })

  app.post("/produtos", (req, res) => {
    
    const produtos = req.body;
      produtos.produto,
      produtos.preco,
      produtos.condicao,
      produtos.marca,
      produtos.descricao,
      produtos.imagem,
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
