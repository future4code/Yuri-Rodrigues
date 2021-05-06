/* 1. A) 10 e 50
      B)  Não vai imprimir
*/

/* 2. A) toLowerCase().includes("cenoura")
        retorna o valor da string que foi chamada convertido
      B) As 3 são true
*/

// Exercícios de escrita de código

// 1. A)
function imprimirTexto() {
    const mesagem = ('Eu sou Yuri, tenho 18 anos, moro no Rio de Janeiro e sou estudante.')
    console.log(mesagem)
}
imprimirTexto()

// B) 
function apresentacao (nome, idade, cidade, profissao) {
      console.log(`Eu sou o ${nome} e tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)
}
apresentacao('Yuri', 18, 'Rio de janeiro', 'Estudante')

// 2. A) 
function calc(num1, num2){
      const soma = num1 + num2
      return soma
}
const calcSoma = calc(2, 3)
console.log(calc(2, 3))

// B)
function calc2(num1, num2){
      const maiorIgual = Number(num1 >= num2)
      return maiorIgual
}
const maiorIgual = calc2(5, 5)
console.log(calc2(5, 5))

// C) 
function imparPar(num1){
      const par = Number(num1 %2)
      return par
}
const par = imparPar(1500)
console.log('O número 0 é par e impar é 1!!')
console.log(`É par?`, imparPar(1500))
// D)
function frases() {
      let frase = ('Olá mundo!')
      console.log(frase.toUpperCase())
}
frases()

// 3
function calculadora(soma, subtracao, multiplicacao, divisao) {
      const num1 = Number(prompt('Digite um número: '))
      const num2 = Number(prompt('Digite outro número: '))

      console.log(`Numero digitado: ${num1} e ${num2}`)
      console.log(`Soma:`, num1 + num2)
      console.log(`Subtração:`, num1 - num2)
      console.log(`Divisão:`, num1 / num2)

      return soma, subtracao, multiplicacao, divisao
}
calculadora()



