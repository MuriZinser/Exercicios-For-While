//Desafio 01
let soma = 0;

for (let i = 1; i <= 10; i++) {
  soma += i;
}

console.log(soma);

//Desafio 02

//Desafio 03
const frutas = ["Maça", "Banana", "Morango", "Abaxaci", "Uva"];

for (let fruta of frutas) {
  console.log(fruta);
}

// Desafio 04

let numero = 7;

for (let i = 1; i <= 10; i++) {
  console.log(numero * i);
}

//Desafio 05
const valores = {
  valor1: 10,
  valor2: 20,
  valor3: 30,
  valor4: 40,
};

let soma = 0;
for (let propriedade in valores) {
  soma += valores[propriedade];
}

console.log(soma);

//Desafio 06

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numero = 7;
let achado = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] === numero) {
    achado = true;
    break;
  }
}
console.log(numero ? "Numero achado" : "Numero não achado");

//Desafio 07
const start = Number(prompt("Digite aqui"));

const lista = [];

for (let count = 0; count < start; count++) {
  if (count <= 1) {
    lista.push(1);
  } else {
    const soma = lista[count - 1] + lista[count - 2];
    lista.push(soma);
  }
}

console.log(lista);

// Desafio 08

const palavra = prompt("Digite uma palavra: ");
let contatorDeVogais = 0;

const vogais = ["a", "e", "i", "o", "u"];

const separadorPalavra = palavra.split("");

for (letras of separadorPalavra) {
  if (vogais.includes(letras)) {
    contatorDeVogais += 1;
  }
}

console.log("Sua palavra tem " + contatorDeVogais + " vogais");

//Desafio 09_A
let array = [3, 7, 9, 8, 6, 3, 4, 1, 2, 5, 10];

for (let i = 0; i < array.length; i++) {
  for (let n = 0; n < array.length - 1 - i; n++) {
    if (array[n] > array[n + 1]) {
      [array[n], array[n + 1]] = [array[n + 1], array[n]];
    }
  }
}

console.log("A ordem crescente dos números é: ", array);

//Desafio 09_B

let array = [3, 7, 9, 8, 6, 3, 4, 1, 2, 5, 10];

console.log(array.sort((a, b) => a - b));

//Desafio 10

const quantidadeDeDados = 2;
let valorDadoIndividual = [];
let somaDosDados = 0;

console.log("Rolagens Individuais: ");
for (let i = 1; i <= quantidadeDeDados; i++) {
  let valorDado = Math.floor(Math.random() * 6) + 1;
  valorDadoIndividual.push(valorDado);
  somaDosDados += valorDado;
  console.log(`Dado ${i} : ${valorDado}`);
}

console.log(`A soma dos dados é ${somaDosDados}`);

// Desafio 11

const quantidadeDeDados = 2;
const quantidadeDeLados = 9;
let valorDadoIndividual = [];
let somaDosDados = 0;

console.log("Rolagens Individuais: ");
for (let i = 1; i <= quantidadeDeDados; i++) {
  let valorDado = Math.floor(Math.random() * quantidadeDeLados) + 1;
  valorDadoIndividual.push(valorDado);
  somaDosDados += valorDado;
  console.log(`Dado ${i} : ${valorDado}`);
}

console.log(`A soma dos dados é ${somaDosDados}`);

// Desafio 12

const quantidadeDeDados = 3;
const quantidadeDeLados = 9;
const tentativas = 3;
let valorDadoIndividual = [];
let count = 1;

while (count <= tentativas) {
  let somaDosDados = 0;
  console.log(`Tentativa nº ${count}`);
  console.log("Rolagens Individuais: ");

  for (let i = 1; i <= quantidadeDeDados; i++) {
    let valorDado = Math.floor(Math.random() * quantidadeDeLados) + 1;
    valorDadoIndividual.push(valorDado);
    somaDosDados += valorDado;
    console.log(`Dado ${i} : ${valorDado}`);
  }
  count++;
  console.log(`A soma dos dados é ${somaDosDados}`);
}
