let open = document.getElementById('open-btn'),
		main = document.getElementsByClassName('main-info'),
		divs = document.getElementsByTagName('div'),
		nameValue = divs[4],
		budgetValue = divs[6],
		goodsValue = divs[8],
		itemsValue = divs[10],
		employersValue = divs[12],
		discountValue = divs[14],
		isopenValue = divs[16],
		goodsItemS = document.querySelectorAll('.goods-item'),
		goodsItem1 = goodsItemS[0],
		goodsItem2 = goodsItemS[1],
		goodsItem3 = goodsItemS[2],
		goodsItem4 = goodsItemS[3],
		btn = document.getElementsByTagName('button'),
		goodsItemBtn = btn[1],
		countBudgeBtn = btn[2],
		EmployersBtn = btn[3],
		chooseItem = document.querySelector('.choose-item'), 
		timeValue = document.querySelector('.time-value'), 
		countBudgetValue = document.querySelector('.count-budget-value'), 
		hireEmployersEtemS = document.querySelectorAll('.hire-employers-item'),
		hireEmployersEtem1 = hireEmployersEtemS[0],
		hireEmployersEtem2 = hireEmployersEtemS[1],
		hireEmployersEtem3 = hireEmployersEtemS[2];
		
let monthMoney,
		shopName,
 		prise;



// Открыть магазин START
open.addEventListener('click', () => {
	for (var i = 0; i < 1; i++) {
	monthMoney = prompt("Ваш месячный бюджет?", "");
		if (isNaN(monthMoney) || monthMoney == "" || monthMoney == null) {
			i--;
		}
	};

	budgetValue.textContent = monthMoney;

	shopName = prompt("Название Вашего магазина?", "").toUpperCase();
	nameValue.textContent = shopName;
});
// Открыть магазин END

// Введите категории товаров START
goodsItemBtn.addEventListener('click', () => {
	let counter = goodsItemS.length;
	for(let i = 0; i < counter; i++) {
		let a = goodsItemS[i].value;
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 ) {
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;

		} else {
				i--;
			}
	}
});
// Введите категории товаров END

// Введите продукты START
chooseItem.addEventListener('change', () => {
	for (let q = 0; q < 1; q++) {
		let items = chooseItem.value;
		if (typeof(items) === "string" && typeof(items) != null && items != "" && items.length < 50) {
			mainList.shopItems = items.split(","); 
			mainList.shopItems = arrIsGood(mainList.shopItems);
		} else {
				q = 0;
			};
		itemsValue.textContent = mainList.shopItems;
	}
});
// Введите продукты END

// проверка массива на пустые значения 
function arrIsGood(arr) {
	let count = arr.length;
	let goodArr = [];
	for (let i = 0; i < count; i++) {
		if (typeof(arr[i]) === "string" && arr[i].length > 0) {
			goodArr.push(arr[i]);
		} 
	}
	console.log("goodArr", goodArr);
	return goodArr;
};

// Рабочие часы START
timeValue.addEventListener('change', () => {
	let time = timeValue.value;
	if (time > 8 && time < 20) {
		mainList.open = true;
	} else if(time < 24){
		mainList.open = false;
		} else if (time < 8) {
		mainList.open = false;
			} else {
					mainList.open = false;
				};
	if (mainList.open == true) {
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	}
});
// Рабочие часы END

// Расчет дневного бюджета START
countBudgeBtn.addEventListener('click', () => {
	countBudgetValue.value = monthMoney / 30;
});
// Расчет дневного бюджета END

// Имена сотрудников START
EmployersBtn.addEventListener('click', () => {
 	for (var i = 0; i < 3; i++) {
 			let a = hireEmployersEtemS[i].value;
 			mainList.employers[i] = a;
		 	employersValue.textContent += mainList.employers[i] + ', ';

 	}
});
// Имена сотрудников END

mainList = {
	shopName: shopName,
	monthMoney: monthMoney,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
// 3) Используя цикл for in для объекта START
	weHave: function weHave() { 
						for (let key in mainList) {
						 console.info("Наш магазин включает в себя разделы: " + key );
						}
					}
// 3) Используя цикл for in для объекта END
};


//  ДЗ START

// Дисконт START
open.addEventListener('click', () => {
	if (monthMoney > 50000 ) { // если бюджет больше 50000 включается скидка 20%
		mainList.discount == true;
		prise = prise * 0.8;
		discountValue.style.backgroundColor = 'green';
	} else {
		mainList.discount == false;
		discountValue.style.backgroundColor = 'red';
	}
});
// Дисконт END

if (mainList.open == false){
	open.setAttribute("disabled","");
	goodsItemBtn.setAttribute("disabled","");
	countBudgeBtn.setAttribute("disabled","");
	EmployersBtn.setAttribute("disabled",""); 
}
timeValue.addEventListener('change', () => {
	if (mainList.open == true){
		open.removeAttribute("disabled");
		countBudgeBtn.removeAttribute("disabled");
		EmployersBtn.removeAttribute("disabled");
	}
});

for (var i = 0; i < goodsItemS.length; i++) {
	goodsItemS[i].addEventListener('change', () =>{
		let counter = goodsItemS.length;
		for (var i = 0; i < counter; i++) {
			if (goodsItemS[i].value !== ""){
					goodsItemBtn.removeAttribute("disabled");
			}
		}
	})
};

countBudgetValue.setAttribute('disabled','');
// ДЗ END



//  START
//  END


