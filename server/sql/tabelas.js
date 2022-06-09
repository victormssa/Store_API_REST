class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarProdutos();
  }


  criarProdutos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, produto varchar(50) NOT NULL, preco varchar(20) NOT NULL, condicao varchar(20) NOT NULL, marca varchar(20) NOT NULL, descricao text NOT NULL, imagem text NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))";

    const inserir = 
      "UPSERT INTO Produtos (produto, preco, condicao, marca, descricao, imagem, data) VALUES (,)";
        
    this.conexao.query(sql, inserir, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Produtos e Valores foram criados com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
