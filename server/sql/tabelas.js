class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarProdutos();
  }


  criarProdutos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, produto varchar(50) NOT NULL, preco varchar(20), condicao varchar(20) NOT NULL, marca varchar(20) NOT NULL, descricao text, data datetime NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Produtos criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
