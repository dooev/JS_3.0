let week= [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота",
	"Воскресенье"
]; 
for (var i = 0; i < week.length; i++) {

	switch (week[i]) {
		case "Понедельник":
			document.write(week[i]+'<br>');
			break;
		case "Вторник":
			document.write(week[i]+'<br>');
			break;
		case "Среда":
			document.write(week[i]+'<br>');
			break;
		case "Четверг":
			document.write('<i>'+week[i]+'</i>'+'<br>');
			break;
		case "Пятница":
			document.write(week[i]+'<br>');
			break;
		case "Суббота":
			document.write('<b>'+week[i]+'</b>'+'<br>');
			break;
		case "Воскресенье":
			document.write('<b>'+week[i]+'</b>'+'<br>');
			break;
	}
	
}

// Задание 2 START

// arr =[
// 	"22",
// 	"132",
// 	"3546",
// 	"45657",
// 	"798788",
// 	"96795999",
// 	"3356757999"
// ];

// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i].length[] == )
// }

charAt(позиция)
Чтобы получить символ, используйте вызов charAt(позиция). Первый символ имеет позицию 0


Также для доступа к символу можно использовать квадратные скобки:

 var str = "Я - современный браузер!";
alert( str[0] ); // "Я"


Разница между этим способом и charAt заключается в том, что если символа нет – charAt выдает пустую строку, а скобки – undefined:

 alert( "".charAt(0) ); // пустая строка
alert( "" [0] ); // undefined