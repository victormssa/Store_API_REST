const customExpress = require("./config/customExpress");
const conexao = require("./connection/conexao");
const Tabelas = require("./sql/tabelas");


conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Conectado com sucesso");

    Tabelas.init(conexao);
    const app = customExpress();

    app.listen(3000, () => console.log("Servidor está rodando em http://localhost:3000"));
    app.get('/produtos', (req, res) => res.send('Você está na rota de produtos'))
  }
});
