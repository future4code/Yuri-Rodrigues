/*  
    A - undefined
    B - null
    C - 11
    D - 13
    E - [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
*/

/*
Vai ser impresso em maiúsculo e os números de espaços
*/

// Escrita código
// 1.
const nome = prompt('Digite seu nome: ')
const emailUser = prompt('Digite seu E-mail: ')
console.log(`O E-mail "${emailUser}, foi cadastrado com sucesso!\nSeja bem vindo(a) ${nome}!`)

// 2.
const comidas = [
    "Feijão", 
    "Quiabo", 
    "Macarrão", 
    "Açaí", 
    "Arroz"
]
console.log(`Essa são as minhas comidas preferidas:`)
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// 3.
const pergunta1 = prompt('Digite uma tarefa do seu dia a dia')

const pergunta2 = prompt('Digite outra tarefa do seu dia a dia')

const pergunta3 = prompt('Digite última tarefa do seu dia a dia')

const perguntaIndice = prompt('Digite (números em ordem), a tarefa que você realizou: ')

const listaDeTarefas = [pergunta1, pergunta2, pergunta3]
console.log(listaDeTarefas)

listaDeTarefas.splice(perguntaIndice)
console.log(listaDeTarefas)
