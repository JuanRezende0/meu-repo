// Questao 04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for(let aux = 0; aux < numbers.length; aux++){
    total += numbers[aux];
}

let media = total / numbers.length;

if(media > 20){
    console.log('Valor da media maior que 20')
}
else{
    console.log('Valor da media menor ou igual a 20')
}