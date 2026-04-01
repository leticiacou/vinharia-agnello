
let nome = prompt("Digite seu nome pro cadastro:");
let email = prompt("Digite seu email pro cadastro:");
let senha = prompt("Digite sua senha pro cadastro:");
let cadastro = [nome, email, senha]
alert('Cadastro realizado! Veja os detalhes no console');
console.log(cadastro);



// sobre o vinho
document.addEventListener("DOMContentLoaded", () => {
let nomeVinho = prompt('Insira o nome do vinho: ');
let tipo = prompt('Insira o tipo do vinho (Branco, Tinto ou Rosé): ');
let safra = prompt('Insira a safra: ');
let estoque = prompt('Insira a quantidade em estoque: ');
detalhesVinho = [nomeVinho, tipo, safra, estoque]

alert('veja os detalhes do vinho no console');
console.log(detalhesVinho);
})
