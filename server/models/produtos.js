const moment = require("moment");
const conexao = require("../connection/conexao");

class Produto {
  adiciona(produto, res) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:mm:ss");
    const data = moment(produto.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:mm:ss"
    );

    const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
    const produtoEhValido = produto.produto.length >= 5;

    const validacoes = [
      {
        nome: "data",
        valido: dataEhValida,
        mensagem: "Data deve ser maior ou igual a data atual",
      },
      {
        nome: "produto",
        valido: produtoEhValido,
        mensagem: "Produto deve ter pelo menos cinco caracteres",
      },
    ];

    const erros = validacoes.filter((campo) => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      res.status(400).json(erros);
    } else {
      const produtoDatado = { ...produto, dataCriacao, data };

      const sql = "INSERT INTO Produtos SET ?";

      conexao.query(sql, produtoDatado, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro);
        } else {
          res.status(200).json(resultados);
        }
      });
    }
  }

  lista(res) {
    const sql = "SELECT * FROM Produtos";

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Produtos WHERE id=${id}`; // template string do javascript

    conexao.query(sql, (erro, resultados) => {
      const produto = resultados[0];
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  altera(id, valores, res) {
    if (valores.data) {
      valores.data = moment(valores.data, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:MM:SS"
      );
    }
    const sql = "UPDATE Produtos SET ? WHERE id=?";
    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  deleta(id, res) {
    const sql = "DELETE FROM Produtos WHERE id=?";

    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ resultados });
      }
    });
  }
}

module.exports = new Produto();
