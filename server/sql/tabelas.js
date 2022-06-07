class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarAtendimentos();
  }


  criarAtendimentos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, produto varchar(50) NOT NULL, preço varchar(20), condição varchar(20) NOT NULL, marca varchar(20) NOT NULL, descrição text, data datetime NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Atendimentos criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
