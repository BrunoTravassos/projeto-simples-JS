// pagar o input
// Se for sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
// Se for não, mostra todos os livros em ordem crescente pela quantidade de paginas

const livros = require("./database");

const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro?S/N ");

if (entradaInicial.toLocaleUpperCase() === "S") {
  console.log("Essas são as categorias disponiveis:");
  console.log(
    "Produtividade e estilo de vida\n",
    "Historia Brasileira\n",
    "Americas\n",
    "Tecnologia\n",
    "Estilo de Vida\n",
    "Tecnologia"
  );

  const entradaCategoria = readline.question("Qual categoria voce escolhe: ");

  const retorno = livros.filter(
    (livro) => livro.categoria === entradaCategoria
  );

  console.table(retorno);
} else {
  const livrosOrdenados =   livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todas os livros disponiveis:')
    console.table(livrosOrdenados)
}
