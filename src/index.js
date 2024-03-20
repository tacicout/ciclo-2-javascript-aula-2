// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
const idade = 25;
//console.log(idade); 

//Resposta: Vai dar erro pois as variáveis declaradas com const mantém os valores constantes, logo o const não pode ser reatribuido. 
//Const é uma variável de bloco.



////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
    let x = 10;
   // console.log(x); 
}
// console.log(x);

//Resposta:a variável x é declarada em let que é considerada variável de bloco, então ela pode ser declarada apenas 
//dentro do seu escopo, logo, o console.log(x) fora do seu escopo, dará undefined pois o x não é acessível aqui.

///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

// console.log(x);
// console.log(y);

//resposta:O console.log(x) dá erro de referência por que X não está definida dentro desse escopo. 
//O console.log(y) vai funcionar porque na declaração do tipo Var ocorre o hoisting e a variável vai 
//para o escopo global, ficando acessível para o console.log 

///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

//console.log(a); 
var a = 5;
console.log(b);
//let b = 10;

// Resposta: O resultado será Cannot access 'b' before initialization. Pois como a é declarado com var, 
//ele é içado para o topo do escopo e inicializado com undefined. a é então definido como 5.
//Quando console.log(b) é executado, b também é içado para o topo do escopo, mas não é inicializado. 
//Portanto, tentar acessá-lo antes de sua inicialização resulta neste erro 
/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

var x = 5;
var x = 10;
// console.log(x); 

let y = 15;
let y = 20; 
// console.log(y); 

// Resposta: Ocorre um erro de sintaxe. "Identifier 'y' has already been declared" pois a variavel y foi redeclarada usando let,
// o que não é permitido em JavaScript. 
//No primeiro caso,  houve a redeclaração da variável x usando var. Como o Var pode ser redeclarado, então não deu erro. 
//porém a x=10 é a que prevalece devido ao hoisting do Var. 

//// Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = 'eduardo'

//sua lógica para pegar a primeira letra 
/// const letraInicial = ...
//console.log(letraInicial)

let nomeCompleto= "eduardo";
const letraInicial = nomeCompleto[0];
console.log (letraInicial); 





