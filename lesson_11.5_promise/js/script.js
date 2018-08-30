https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js
window.addEventListener('DOMContentLoaded', ()=> {

	let info = document.getElementsByClassName('info-header')[0],
			tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		};
	};
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');		
		};	
	};

	info.addEventListener('click', event => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				};
			};
		};
	});

// Timer

	let deadLine = '2018-08-30';

	function getTimeRemaining(endTime){
		let t = Date.parse(endTime) - Date.parse(new Date()),
			 sec = Math.floor( (t/1000) % 60 ), 
			 min = Math.floor( (t/1000/60) % 60 ), 
			 hou = Math.floor( (t/(1000*60*60)) ); 
		
		return {
			'total': t,
			'hou': hou,
			'min': min,
			'sec': sec
		};
	};

	function setClock(id, endTime){
		let timeInterval = setInterval(updateClock, 1000);
		let timer = document.getElementById(id),
			 h = timer.querySelector('.hours')
			 m = timer.querySelector('.minutes')
			 s = timer.querySelector('.seconds')
	
		function updateClock() {
			let t = getTimeRemaining(endTime);
			h.innerHTML = addZero(t.hou);
			m.innerHTML = addZero(t.min);
			s.innerHTML = addZero(t.sec);

			if (t.total <= 0) {
				h.innerHTML = '00';
				m.innerHTML = '00';
				s.innerHTML = '00';
				clearInterval(timeInterval);
			}
		};

		updateClock();

	};

	setClock('timer', deadLine);

	function addZero(num){
		if (num < 10 ) {
			return '0' + num; 
		}	else {
			return num;
		}
	};

	//Modal
	let more = document.querySelector('.more'),
		 overlay = document.querySelector('.overlay'),
		 close = document.querySelector('.popup-close'),
		 moreTab = document.querySelectorAll('.description-btn');
	
	more.addEventListener('click', () => {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	for (let i = 0; i < moreTab.length; i++) {
		moreTab[i].addEventListener('click', function(){
			if (this.classList == 'description-btn') {
				// this.classList.add('more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			}

		});
	}


	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

// Оправка формы

	let formPopup = document.getElementsByClassName('main-form')[0],
		 btnPopup = document.getElementsByClassName('popup-form__btn')[0],
		 inputPopup = formPopup.getElementsByTagName('input'),
		 formFooter = document.getElementById('form'),
		 btnFooter = formFooter.getElementsByTagName('button')[0],
		 inputFooter = formFooter.getElementsByTagName('input'),
		 inputS = [inputPopup, inputFooter[0], inputFooter[1]],
		 statusMessage = document.createElement('div'),
		 statusMessageLoad = document.createElement('IMG'),
		 statusMessageOk = document.createElement('IMG');
		 statusMessageLoad.classList.add('status-img');
		 statusMessageOk.classList.add('status-img');
		 statusMessageLoad.src = "img/ajax-loader.GIF";
		 statusMessageOk.src = "img/success.SVG";
		 statusMessage.classList.add('status');
	

	let status = new Object();
		 status.ok = ` Заявка получена, мы перезвоним Вам в течении 10 минут`;
		 status.load = ` Загрузка...`;
		 status.fail = "Что то пошло не так... Отправьте форму еще раз, пожалуйста";

		let toServer = { // Создаем объект с методом отправки данных на сервер
			Go(event) { // В качестве аргумента передаем контекст вызова

				event = event.preventDefault();
				let formData = new FormData(this);

				function postData(data) {
					return new Promise(function(resolve, reject){
						let request = new XMLHttpRequest();

						request.open('POST', 'server.php');

						request.setRequestHeader('Content-Type', 'application/x-www-form-unlencoded');

						request.onreadystatechange = () => {
							if (request.readyState < 4) {
								resolve()
							}
							else if (request.readyState === 4) {
								if (request.status == 200 && request.status < 300) {// коды ошибок
										resolve()
								} 
								else { 
									reject()
								}
							};
						};

						request.send(formData);
					});
				}// END postData

				function clearInput() {
					for (var i = 0; i < inputS.length; i++) {
						inputS[i].value = ''; // очищаем поля ввода
					}
				};	

				postData(formData)
					.then(()=> {
						this.appendChild(statusMessageLoad);
						this.appendChild(statusMessage);
						statusMessage.innerHTML = status.load;
					})
					.then(()=> {
						this.removeChild(statusMessageLoad);
						this.removeChild(statusMessage);
						this.appendChild(statusMessageOk);
						this.appendChild(statusMessage);
						statusMessage.innerHTML = status.ok;
					})
					.catch(()=>{
						this.removeChild(statusMessageLoad);
						this.removeChild(statusMessageOk);
						statusMessage.innerHTML = status.fail;
					})
					.then(clearInput)
			}// END Go метод объекта
		}; // END toServer object

	formPopup.addEventListener('submit', toServer.Go);
	formFooter.addEventListener('submit', toServer.Go);


});


