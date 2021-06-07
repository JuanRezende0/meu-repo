// Questao 07 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = 0;

for(let aux = 0; aux < numbers.length; aux++){

    if(!menorNum) menorNum = numbers[aux];

    if(numbers[aux] < menorNum){
        menorNum = numbers[aux];
    }

}

console.log(menorNum);
