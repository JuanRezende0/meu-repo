function encode(string) {
  string = string.split('');
  for(let aux = 0; aux < string.length; aux ++){
    if(string[aux] === 'a'){
      string[aux] = '1';
    }
    if(string[aux] === 'e'){
      string[aux] = '2';
    }
    if(string[aux] === 'i'){
      string[aux] = '3';
    }
    if(string[aux] === 'o'){
       string[aux] = '4';
    }
    if(string[aux] === 'u'){
      string[aux] = '5';
    }
  }
  return string.join('');
}

function decode(string) {
  string = string.split('');
  for(let aux = 0; aux < string.length; aux ++){
    if(string[aux] === '1'){
      string[aux] = 'a';
    }
    if(string[aux] === '2'){
      string[aux] = 'e';
    }
    if(string[aux] === '3'){
      string[aux] = 'i';
    }
    if(string[aux] === '4'){
      string[aux] = 'o';
    }
    if(string[aux] === '5'){
    	string[aux] = 'u';
    }
	}
	return string.join('');
}

function techList(arrayTech, nome) {
	const newObj = [];
  if (arrayTech.length === 0) {
		return 'Vazio!';
	}
	arrayTech.sort();
	arrayTech.forEach(element => {
		newObj.push({
			tech: element,
			name: nome
		});
	});
	return newObj;
}

function hydrate(string) {
	// extract numbers from a string // https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
	const numbers = string.match(/\d+/g).map(Number);
	let numTotal = 0;

	numbers.forEach(element =>{
		numTotal += element;
	});

	if (numTotal > 1) {
		return (`${numTotal} copos de água`);
	}
	return (`${numTotal} copo de água`);

}

module.exports = {
  decode,
  encode,
	hydrate,
	techList
}