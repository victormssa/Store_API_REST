function fazPost(url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}

function cadastraProduto(){
    preventDefault()
    let url = "http://localhost:3000/produtos";

    let produto = document.getElementById("produto").value;
    let preco =  document.getElementById("preco").value;
    let condicao =  document.getElementById("condicao").value;
    let marca =  document.getElementById("marca").value;
    let descricao =  document.getElementById("descricao").value; 
    let imagem =  document.getElementById("imagem").value;

    body = {
        "produto": produto,
        "preco": preco,
        "condicao": condicao,
        "marca": marca,
        "descricao": descricao,
        "imagem": imagem
    }

    fazPost(url, body)
}

