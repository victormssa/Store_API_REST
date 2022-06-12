class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.inserir = conexao;

    this.criarProdutos();
    this.inserirAuto();
  }

  criarProdutos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, produto varchar(30) NOT NULL, preco varchar(20) NOT NULL, condicao varchar(20) NOT NULL, marca varchar(20) NOT NULL, descricao text NOT NULL, imagem text NOT NULL, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Produtos foi criado com sucesso");
      }
    });
  }

  inserirAuto() {
    const inserir = "REPLACE INTO Produtos (id,produto, preco, condicao, marca, descricao, imagem) VALUES ('1','Samsung Galaxy S20 FE 128GB', 'R$ 1.889,00', 'Novo', 'Samsung', 'Smartphone Samsung Galaxy S20 FE 128GB, 6GB RAM, Snapdragon 865, Câmera Tripla, Carregamento Super Rápido, Cloud Navy.', 'https://i.ebayimg.com/images/g/h4MAAOSwCudfvppi/s-l1600.jpg') , ('2','Headset Gamer Havit H2002D', 'R$ 199,90', 'Novo', 'Havit', 'Headset Gamer Havit H2002D com Microfone plugável de 3,5 mm compatível para PC, PS4 e XBOX e Alto-falante magnético de 53 mm de alta qualidade de som.', 'https://i.ebayimg.com/images/g/KlIAAOSwLR5iZL0g/s-l1600.jpg') , ('3','Memória Corsair Vengeance RGB Pro 8GB', 'R$ 309,90', 'Novo', 'Corsair', 'Memória Corsair Vengeance RGB Pro, 8GB, 3200MHz, DDR4, CL16, Preta ', 'https://i.ebayimg.com/images/g/1GcAAOSw8gFiN9II/s-l1600.jpg') , ('4','Monitor Gamer LG 27 polegadas UltraGear', 'R$ 1.999,90', 'Novo', 'LG', 'Monitor Gamer LG Ultra Gear 27, IPS, Wide, 240 Hz, Full HD, 1ms, FreeSync Premium, HDR 10, 99% sRGB, HDMI/DisplayPort, VESA.', 'https://i.ebayimg.com/images/g/RSAAAOSwuutic5iy/s-l500.png') , ('5','Mouse Gamer Logitech G403 Hero ', 'R$ 179,90', 'Novo', 'Logitech', 'Mouse Gamer Logitech G403 HERO com RGB LIGHTSYNC, 6 Botões Programáveis, Ajuste de Peso e Sensor HERO.', 'https://i.ebayimg.com/images/g/X3wAAOSwSr5io5BJ/s-l500.jpg') , ('6','Notebook Gamer Acer Nitro 5', 'R$ 5.771,64', 'Novo', 'Logitech', 'Notebook Gamer Acer Nitro 5 Intel Core i5-10300H, GeForce GTX 1650, 8GB RAM, 512GB SSD, 15.6 polegadas IPS FHD, Win 11 Home, Preto.', 'https://imgs.casasbahia.com.br/1519489920/1xg.jpg') , ('7',' AMD Radeon RX 550', 'R$ 699,90', 'Usado', 'Duex', 'Placa de Vídeo AMD Radeon RX 550, 4GB DDR5, com clock de 1500MHz pouco uso conservada.', 'https://m.media-amazon.com/images/I/719L6rX7BZL._AC_SL1200_.jpg') , ('8','NVIDIA GeForce GTX 1650', 'R$ 1.899,90', 'Novo', 'Zotac', 'Placa de Vídeo Zotac Gaming NVIDIA GeForce GTX 1650 AMP, 4GB, GDDR6.', 'https://m.media-amazon.com/images/I/613TKu29R+S._AC_SL1356_.jpg') , ('9','SSD Kingston A400 480GB', 'R$ 299,90', 'Novo', 'Kingston', 'SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação 450MB/s', 'https://m.media-amazon.com/images/I/21ys6wDn1NL._AC_.jpg') , ('10','Teclado Mecânico Gamer HyperX Alloy FPS', 'R$ 199,90', 'Usado', 'HyperX', 'Teclado Mecânico Gamer HyperX Alloy FPS, RGB 5 níveis de brilho , Switch Kailh Silver, US. ', 'https://i.ebayimg.com/images/g/EcgAAOSw-EBg-D-k/s-l1600.jpg')";


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
