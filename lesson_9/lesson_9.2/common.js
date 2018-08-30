
let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.call(age,'Dima', 'Dooev');
 // Если мы хотим передать в функцию что то в виде this, то пишим ИмяФункции.call(то что станет this, другие аргументы);  