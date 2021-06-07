// Questao 05 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = 0;

for(let aux = 0; aux < numbers.length; aux++){

    if(numbers[aux]>maiorNum){
        maiorNum = numbers[aux];
    }

}

console.log(maiorNum);
