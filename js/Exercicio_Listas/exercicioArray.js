//Como escrever no HTML diretamente pelo JavaScript
// var filme1 = "Yesterday";
// var filme2 = "A Chegada";
// var filme3 = "Escola de Rock";

// document.write("<p>" + filme1 + "</p>");
// document.write("<p>" + filme2 + "</p>");
// document.write("<p>" + filme2 + "</p>");

//...............................................

//Fazendo a mesma coisa, mas usando Listas e for

var listaFilmes = ['Yesterday', 'A Chegada', 'Escola de Rock'];

listaFilmes.push('Harry Potter 2');
listaFilmes.push('Homem Aranha');
listaFilmes.push('Batman')

for(var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<p>" + listaFilmes[indice] + "</p>");
}
