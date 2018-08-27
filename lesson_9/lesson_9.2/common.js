
let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

function User (name, surname){
	this.name = name;
	this.surname = surname;
	this.age = age;
}

let Di = new User('Dima', 'Dooev'); 

showUser.call(Di.age, Di.surname, Di.name);



