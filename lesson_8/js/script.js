window.addEventListener('DOMContentLoaded', function(){

	let info = document.getElementsByClassName('info-header')[0],
			tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent');

	function hideTabContent(a) {
		for (var i = a; i < tabContent.length; i++) {
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

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				};
			};
		};
	});

// Timer

	let deadLine = '2018-08-26';

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

});


