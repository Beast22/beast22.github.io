var number = +prompt('Укажите число');

var degree = +prompt('Укажите степень');

function pow(a, b){

	var result = a;
	
	for (var i = 1; i < b; i++) {
		result = result * a;
	}

	if( b < 1){
		alert('Степень должна быть больше 0')
		
	} else{

		return result;

	}
}

var result2 = pow(number, degree);

console.log('Результат выполнения функции pow =', result2);