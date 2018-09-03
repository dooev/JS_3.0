function calc() {
	var persons = document.getElementsByClassName("counter-block-input")[0],
	    restDays = document.getElementsByClassName("counter-block-input")[1],
	    place = document.querySelector("#select"),
	    totalValue = document.querySelector("#total"),
	    personsSum = 0,
	    daysSum = 0,
	    total = 0,
	    zero = '';
	persons.setAttribute('type', 'text');
	restDays.setAttribute('type', 'text');

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function () {
		// почему обработчик не срабатывает если input type=number и я первым ввожу "е" или "+" ?
		var a = persons.value.replace(/[\>\<\[\]\{\}\/\|\\':;`~"e+A-Za-zА-Яа-я!@#$%^&*()_=.,?-]/gi, '' );
		persons.value = a; 
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;

		if (restDays.value == "" || restDays.value == 0 || restDays.value == " " || persons.value == "" || persons.value == 0 || persons.value == " " ) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	restDays.addEventListener('change', function () {
		// почему обработчик не срабатывает если input type=number и я первым ввожу "е" или "+" ?
		var a = restDays.value.replace(/[\>\<\[\]\{\}\/\|\\':;`~"e+A-Za-zА-Яа-я!@#$%^&*()_=.,?-]/gi, '' );
		restDays.value = a; 

		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (persons.value == "" || persons.value == 0 || persons.value == " " || restDays.value == "" || restDays.value == 0 || restDays.value == " ") {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('change', function () {
		if (persons.value == "" || persons.value == 0 || persons.value == " " || restDays.value == "" || restDays.value == 0 || restDays.value == " ") {
			totalValue.innerHTML = 0;
		} else {
			var a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

}

module.exports = calc;