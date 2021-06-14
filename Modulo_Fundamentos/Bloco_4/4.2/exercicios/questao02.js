// Questao 02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for(let aux = 0; aux < numbers.length; aux++){
    total += numbers[aux];
}

console.log(total);
