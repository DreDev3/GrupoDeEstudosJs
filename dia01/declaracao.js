//Variáveis em JS var, let e const

//var é uma forma antiga do JS para declarar variáveis, as variáveis declaradas com var são içadas (hoisted), o que significa que podem ser usadas antes de serem declaradas no código, embora seu valor seja undefined até a atribuição ser feita.

//let por outro lado não permite que seja usada antes de ser declarada, apresentando 'ReferenceError' no console caso tente. Utilizando let também podemos declarar uma variável e atribuir um valor depois.

//const é utlizada para criar constantes, ou seja uma vez declarada seu valor não pooderá ser alterado, constantes percisam receber um valor ao serem declaradas, diferente de let.

//ambos let e const são utilizados de diferentes formas
//Geralmente vamos declarar constantes, a não ser em casos em que precisado de uma variável que precisará ter seu valor alterado, como em estruturas de repetição por exemplo.


//Tipos de dados

const name = 'André' //string
const num = 10 //número
const verify = false //boolean

console.log('Tipo de dado armazenado em nome:',typeof name);
console.log('Tipo de dado armazenado em num:',typeof num);
console.log('Tipo de dado armazenado em num:',typeof verify);
