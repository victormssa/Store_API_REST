class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.inserir = conexao;

    this.criarProdutos();
    this.inserirAuto();
  }




  criarProdutos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, produto varchar(30) NOT NULL, preco varchar(20) NOT NULL, condicao varchar(20) NOT NULL, marca varchar(20) NOT NULL, descricao text NOT NULL, imagem text NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Produtos foi criado com sucesso");
      }
    });
  }

  inserirAuto() {
    const inserir = 
      "REPLACE INTO Produtos (id,produto, preco, condicao, marca, descricao, imagem, data) VALUES ('1','RTX 3090', '15.000 Reais', 'Lançamento', 'MSI', 'Descrição', 'https://i.ebayimg.com/images/g/D3QAAOSw9gJf6c55/s-l600.jpg', '25/04/2023')";

    this.inserir.query(inserir, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Valores foram inseridos com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
