/*1. a retorna false
     b retorna false
     c retorna true
     d retorna booleano
*/

/*2 and 3. o problema é que a resposta que recebemos do usuáiro é em string, então ira concatenar
 a re solução sereia botar o Number
 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// Exercícios de escrita de código

//1.
let idade = Number(prompt("Sua idade: "))
let idadeAmigo = Number(prompt("Idade do seu amigo: "))

console.log('Sua idade é maior do que seu amigo: ', idade > idadeAmigo)

//2.
let numero = Number(prompt('Digite um número par: '))

const soma = numero %2

console.log('O resto da divisão é: ', soma)

//Com números pares dava 0 e números ímpares 1

//3.
let idade = Number(prompt('Digite sua idade'))

const calculoMeses = idade * 12
console.log('Em Meses:', calculoMeses)
const calculoSemana = idade * 48
console.log('Em semanas:', calculoSemana)
const calculoHoras = idade * 8640
console.log('Em horas:', calculoHoras)

//4.
let numero1 = Number(prompt('Digite um número: '))
let numero2 = Number(prompt('Digite outro número: '))

console.log('O primeiro numero é maior que segundo?', numero1 > numero2)
console.log('O primeiro numero é igual ao segundo?', numero1 === numero2)
console.log('O primeiro numero é divisível pelo segundo?',numero1 % numero2 ==0)
console.log('O segundo numero é divisível pelo primeiro? ', numero2 % numero1 ==0)
