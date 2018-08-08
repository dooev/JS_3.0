var shopName = prompt("Название Вашего магазина?");
var budget = prompt("Ваш месячный бюджет?");

mainList = {
	shopGoods: [],
	employers: {},
	open: false
};

mainList.budget = budget;
mainList.shopName = shopName;

mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));

// console.log(mainList);

var i = (mainList.budget / 30);

alert("Бюджет на один день " + i + "руб");



// for(let i = 0; i<3; i++) 
// 	shopGoods.push(prompt("Какой тип товаров будем продавать?"));
// alert(mainList.shopGoods);