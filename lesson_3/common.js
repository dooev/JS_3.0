let shopName,
		monthMoney,
		dayMoney,
 		time,
 		prise

mainList = {
	shopName: shopName,
	monthMoney: monthMoney,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
};

/*ФУНКЦИИ START*/
// Название магазина SRART
function start () {
	shopName = prompt("Название Вашего магазина?").toUpperCase();
	while (!isNaN(shopName) || shopName == "" || shopName == null) {
		shopName = prompt("Название Вашего магазина?").toUpperCase();
	};
};

start();
// Название магазина END


// Рабочие часы START
function workTime(time) {
	if (time > 8 && time < 20) {
		document.write('Магазин " '+shopName+' " открыт! <br>')
	} else if(time < 24){
		document.write('Мы уже закрыты!<br>')
		} else if (time < 8) {
			document.write('Мы еще не открылись!<br>')
			} else {
				document.write('Это невозможно!<br>')
				}
};
workTime(18);
// Рабочие часы END


// Дисконт START
function discountSistem(prise) {
	if (mainList.discount == true) {
		prise = prise * 0.8;
		console.log("С учетом скидки, цена составит: "+ prise +'руб.');
	};
};
discountSistem(30);
// Дисконт END

// Emploers START
function newEmploer(){
	for (var i = 0; i < 4; i++) {
			let a = prompt(" Введите имя сотрудника: ");
		if ((typeof(a)) === 'string' && isNaN(a) && (typeof(a)) != null && a != "" && a.length < 50 ) {
			mainList.employers['employer_' +i] = a;
			console.log('Новый сотрудник "'+a+'" добавлен');
		} else {
				i--;
				console.log('Нечего не получится, если вы не введете правельные данные.');
			}
	};
};
newEmploer();
// Emploers END

// Бюджет START
function budget() {

	for (var i = 0; i < 1; i++) {
		monthMoney = prompt("Ваш месячный бюджет?");
		if (isNaN(monthMoney) || monthMoney == "" || monthMoney == null) {
			i--;
		} else {
				dayMoney = (monthMoney / 30);
				alert("Бюджет на один день около  " + Math.round(dayMoney) + "руб"); // добавил обнуление
				document.write("Бюджет на один день около  " + Math.round(dayMoney) + 'руб<br/>')			
			}
	};	
};
budget();
// Бюджет END


// Выбор товара START
function chooseGoods() {
	for(let i = 0; i<5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != "" && a.length < 50 ) {
			mainList.shopGoods.push(a);
			console.log('Все верно, "'+a+'" подходит');
			document.write('Все верно, "'+a+'" подходит<br/>');
		} else {
				i--;
				console.log('Нечего не получится, если вы не введете правельные данные.');
			}
	}
};
chooseGoods();
//  Выбор товара END
/*ФУНКЦИИ END*/

