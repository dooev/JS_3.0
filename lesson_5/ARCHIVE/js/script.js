let menuItem = document.getElementsByClassName('menu-item'),
		menu = document.getElementsByClassName('menu'),
		li = document.createElement('li'),
		title = document.getElementById('title'),
		advertising = document.getElementsByClassName('adv'),
		column = document.querySelectorAll('.column'),
		rating = prompt("Ваше отношение к технике apple?"),
		promptBlock = document.querySelector('#prompt'); 


menu[0].insertBefore(menuItem[2], menuItem[1]);

li.innerHTML = 'Пятый пункт';		
menu[0].appendChild(li);
li.className = 'menu-item';

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title1 = title.textContent.replace("технику" , "подлинную технику");
title.innerHTML = title1;

column[1].removeChild(advertising[0]);

promptBlock.innerHTML = rating;