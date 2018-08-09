var shopName = prompt("Название Вашего магазина?");
var budget = prompt("Ваш месячный бюджет?");

mainList = {
	shopGoods: [],
	employers: {},
	open: false
};

mainList.budget = budget;
mainList.shopName = shopName;

// mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
// mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
// mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));

for(let i = 0; i<3; i++) 
	mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
alert(mainList.shopGoods);

// console.log(mainList);

var i = (mainList.budget / 30);
if (true) {}
alert("Бюджет на один день около  " + Math.round(i) + "руб");
