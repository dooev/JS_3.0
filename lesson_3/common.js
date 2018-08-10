let shopName,
		budget,
 		time,
 		prise

function start () {
	shopName = prompt("Название Вашего магазина?").toUpperCase();
	while (!isNaN(shopName) || shopName == "" || shopName == null) {
		shopName = prompt("Название Вашего магазина?").toUpperCase();
	};
	budget = prompt("Ваш месячный бюджет?");
	while (isNaN(budget) || budget == "" || budget == null) {
		budget = prompt("Ваш месячный бюджет?");
	};
};

start();

mainList = {
	shopName: shopName,
	budget: budget,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
};

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
				a;
				i--;
				console.log('Нечего не получится, если вы не введете правельные данные.');
			}
	};
};
newEmploer();
// Emploers END

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

// Вывод дневного бюджета START
let dayMoney = (mainList.budget / 30);
alert("Бюджет на один день около  " + Math.round(dayMoney) + "руб"); // добавил обнуление
document.write("Бюджет на один день около  " + Math.round(dayMoney) + 'руб<br/>')
// Вывод дневного бюджета END


// Решение из видеоурока START
function chooseGoods() {
	for(let i = 0; i<5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != "" && a.length < 50 ) {
			mainList.shopGoods.push(a);
			console.log('Все верно, "'+a+'" подходит');
			document.write('Все верно, "'+a+'" подходит<br/>');
		} else {
				a;
				i--;
				console.log('Нечего не получится, если вы не введете правельные данные.');
			}
	}
};
chooseGoods();
// Решение из видеоурока END

