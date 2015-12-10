var names =[];

for (var i = 0; i < 5; i++){
	names[i] = prompt('Введите имя пользователя');
}

console.log(names);

var User = prompt('Введите свое имя');

var flag = false;

for (var i = 0; i < names.length; i++) {

	if (names[i] === User){

		var flag = true;

      	break;
      	
      	console.log(i);

	}
}

if(flag){
	alert(User + ' вы успешно вошли');
}else{
	alert('Такого пользователя не существует');
}
