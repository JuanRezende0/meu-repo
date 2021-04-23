// Questao 09 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array = [];

for(let aux = 1; aux < 26; aux++){

    array.push(aux);

}

let cont = 1;
for(let div of array){

    div = div / 2;
    console.log(cont +'/2 = '+ div);
    cont++;

}
