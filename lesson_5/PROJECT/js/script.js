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
		goodsItemS = document.querySelectorAll('.goods-item'),// получить каждый по индексу [0]...
		btn = document.getElementsByTagName('button'),
		goodsItemBtn = btn[1],
		countBudgeBtn = btn[2],
		hireEmployersBtn = btn[3],
		chooseItem = document.querySelector('.choose-item'), 
		timeValue = document.querySelector('.time-value'), 
		countBudgetValue = document.querySelector('.count-budget-value'), 
		hireEmployersEtemS = document.querySelectorAll('.hire-employers-item'),
		hireEmployersEtem1 = hireEmployersEtemS[0],
		hireEmployersEtem2 = hireEmployersEtemS[1],
		hireEmployersEtem3 = hireEmployersEtemS[2];
		