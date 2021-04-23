// Questao 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numImpar = 0;

for(let aux = 0; aux < numbers.length; aux++){

    if(numbers[aux] % 2 !== 0){
        numImpar++;
    }

}

if(numImpar > 0){
    console.log(numImpar);
}
else{
    console.log('Nenhum valor ímpar encontrado')
}
