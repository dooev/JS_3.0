function timer(){

	var deadLine = '2018-08-30';

	function getTimeRemaining(endTime) {
		var t = Date.parse(endTime) - Date.parse(new Date()),
		    sec = Math.floor(t / 1000 % 60),
		    min = Math.floor(t / 1000 / 60 % 60),
		    hou = Math.floor(t / (1000 * 60 * 60));

		return {
			'total': t,
			'hou': hou,
			'min': min,
			'sec': sec
		};
	};

	function setClock(id, endTime) {
		var timeInterval = setInterval(updateClock, 1000);
		var timer = document.getElementById(id),
		    h = timer.querySelector('.hours'),
		m = timer.querySelector('.minutes'),
		s = timer.querySelector('.seconds');

		function updateClock() {
			var t = getTimeRemaining(endTime);
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

	function addZero(num) {
		if (num < 10) {
			return '0' + num;
		} else {
			return num;
		}
	};

}
module.exports = timer;