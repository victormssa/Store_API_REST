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

    app.listen(3000, () => console.log("Servidor esstá rodando dentro da porta 3000"));
  }
});
