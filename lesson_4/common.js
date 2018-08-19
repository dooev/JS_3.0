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
	discount: true,
	shopItems: [],
// Название магазина SRART
	start: function start () {
						shopName = prompt("Название Вашего магазина?", "").toUpperCase();
						while (!isNaN(shopName) || shopName == "" || shopName == null) {
							shopName = prompt("Название Вашего магазина?", "").toUpperCase();
						}
				},
// Название магазина END

// Выбор товара START
	chooseGoods: function chooseGoods() {
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
								},
//  Выбор товара END

// Рабочие часы START
	workTime: function workTime(time) {
								if (time > 8 && time < 20) {
									document.write('Магазин " '+shopName+' " открыт! <br>')
									mainList.open = true;
								} else if(time < 24){
									document.write('Мы уже закрыты!<br>')
									} else if (time < 8) {
										document.write('Мы еще не открылись!<br>')
										} else {
											document.write('Это невозможно!<br>')
											}
							},
// Рабочие часы END

// Дисконт START
	discountSistem: function discountSistem(prise) {
										if (mainList.discount == true) {
											prise = prise * 0.8;
											console.log("С учетом скидки, цена составит: "+ prise +'руб.');
										}
									},
// Дисконт END

// Emploers START
	newEmploer: function newEmploer(){
								for (var i = 0; i < 4; i++) {
										let a = prompt(" Введите имя сотрудника: ", "");
									if ((typeof(a)) === 'string' && isNaN(a) && (typeof(a)) != null && a != "" && a.length < 50 ) {
										mainList.employers['employer_' +i] = a;
										console.log('Новый сотрудник "'+a+'" добавлен');
									} else {
											i--;
											console.log('Нечего не получится, если вы не введете правельные данные.');
										}
								}
							},
// Emploers END

// Бюджет START
	budget: function budget() {
						for (var i = 0; i < 1; i++) {
							monthMoney = prompt("Ваш месячный бюджет?", "");
							if (isNaN(monthMoney) || monthMoney == "" || monthMoney == null) {
								i--;
							} else {
									dayMoney = (monthMoney / 30);
									alert("Бюджет на один день около  " + Math.round(dayMoney) + "руб"); // добавил обнуление
									document.write("Бюджет на один день около  " + Math.round(dayMoney) + 'руб<br/>')			
								}
						}	
				},
// Бюджет END


// 2) При помощи метода перебора массива(forEach) START
	chooseShopItems: function chooseShopItems() {
											for (let q = 0; q < 1; q++) {
												let items = prompt("Перечислите через запятую товары", "");
												if (typeof(items) === "string" && typeof(items) != null && items != "" && items.length < 50) {
															
															mainList.shopItems = items.split(","); 
															// console.log("shopItems", mainList.shopItems);
															// console.log("items", items);
															// mainList.shopItems.push(prompt("Подождите, еще ", ""));
														// } else if (){
															// mainList.shopItems = mainList.shopItems.split(",");
															mainList.shopItems = mainList.arrIsGood(mainList.shopItems);
															// mainList.shopItems.push(goodArr);
															// mainList.shopItems.sort();

														} else {
															q = 0;
															}
											}
											mainList.shopItems.forEach(function(item, i, shopItems){
												document.write( "У нас вы можете купить: " + (++i) +'. '+ item + '<br>');
											})
											
									},

// проверка массива на пустые значения 
		arrIsGood: function arrIsGood(arr) {
		let count = arr.length;
		let goodArr = [];
							for (let i = 0; i < count; i++) {
								if (typeof(arr[i]) === "string" && arr[i].length > 0) {
									goodArr.push(arr[i]);
								} 
							}
							console.log("goodArr", goodArr);
							return goodArr;
						},
// 2) При помощи метода перебора массива(forEach) END


// 3) Используя цикл for in для объекта START
	weHave: function weHave() { 
						for (let key in mainList) {
						 console.info("Наш магазин включает в себя разделы: " + key );
						}
					}
// 3) Используя цикл for in для объекта END


};



/*ФУНКЦИИ START*/


mainList.chooseShopItems(); //
mainList.weHave();

// start();// Название магазина 

// chooseGoods();//  Выбор товара 

// workTime(18);// Рабочие часы 

// discountSistem(30);// Дисконт 

// newEmploer();// Emploers 

// budget();// Бюджет 

/*ФУНКЦИИ END*/

