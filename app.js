let listaAmigo = [];

// Manipula a alteração do título e subtítulo
function titulo(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

titulo("h1", "Amigo Secreto");
titulo("h2", "Adicione um amigo");

function adicionarAmigo() {
  limparResultados();
  let input = document.getElementById("amigo");
  let amigo = input.value.trim(); // Remove espaços extras

  if (amigo !== "") {
    listaAmigo.push(amigo);
    input.value = ""; // Limpa o input
    atualizarListaAmigos(); // Atualiza a lista na tela
  } else {
    alert("Adicione pelo menos um amigo!");
  }
}

function atualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de adicionar os itens

  //Percorre a listaAmigo e adiciona cada amigo dentro de um elemento <li> para ser exibido
  listaAmigo.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigo.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear!");
    return;
  }

  //Math.random gera um indice aleatório entre 0 e 1, os incluindo também.
  //Math.floor faz com que o número gerado seja arredondado para baixo, garantindo que resulte em um número intereiro.
  let indiceAmigoSorteado = Math.floor(Math.random() * listaAmigo.length);
  let amigoSorteado = listaAmigo[indiceAmigoSorteado];

  document.getElementById(
    "resultado"
  ).innerHTML = `🎉 Amigo Sorteado: <strong>${amigoSorteado}</strong>`;

  // Após clicar em sortear um amigo, limpa e atualiza a lista. Também limpará o resultado quando o botão adicionarAmigo for clicado
  listaAmigo = [];
  atualizarListaAmigos();
}

//limpa o resultado do sorteio após o botão adicionar amigo ser clicado novamente
function limparResultados() {
  document.querySelector(".button-add").addEventListener("click", function () {
    if (document.getElementById("resultado").innerHTML != "") {
      document.getElementById("resultado").innerHTML = "";
    }
  });
}
