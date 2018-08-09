let shopName = prompt("Название Вашего магазина?");
let budget = prompt("Ваш месячный бюджет?");

mainList = {
	shopName: shopName,
	budget: budget,
	shopGoods: [],
	employers: {},
	open: false
};

// Решение из урока START
for(let i = 0; i<5; i++) {

	let a = prompt
}

// Решение из урока END



// Мое решение 1 START
for(let i = 0; i<3; i++) {
	mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
}
alert(mainList.shopGoods);
// Мое решение 1 END

// console.log(mainList);

var i = (mainList.budget / 30);
if (true) {}
alert("Бюджет на один день около  " + Math.round(i) + "руб");
