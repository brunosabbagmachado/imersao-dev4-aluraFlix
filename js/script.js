function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela();    
  } else {
      console.error("Endereço do filme inválido")
  }

  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeFavorito) {
    var elementoFilmeFavotiro = "<img src=" + filmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavotiro;
}