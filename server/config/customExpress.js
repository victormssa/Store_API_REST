const express = require("express");
const consign = require("consign");

module.exports = () => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Adiciona headers antes das rotas serem definidas.
  app.use(function (req, res, next) {

    // Website que você deseja conectar-se.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Métodos de Request que você deseja aceitar.
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Solicitação de headers que você deseja.
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true; Se você precisar que o site inclua cookies nas solicitações enviadas.
    // para a API. (Por ex: em caso de você usar sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Passa para próxima camada de middleware.
    next();
  });

  consign()
    .include("controllers")
    .into(app);

  return app;
};
