getFriendlyNumbers(1, 300);


function getFriendlyNumbers (start, end) {
	let arr = [];
	let arrFrendly = [];
	let z = start;
	if (isNaN(start) || isNaN(end)){
		alert("Нужно ввести числа!");
	} 
	else{

		while (z <= end) {
			arr.push(z++)
		};
		let a = arr[0],
			 b = arr[1];

		for (var n = 0; a <= end; n++) {
			if (getDivisorsSum(a) === b && getDivisorsSum(b) === a && a < b) {
					arrFrendly.push(a);
					arrFrendly.push(b);
					a++;
			}
			else if (b <= end) {
				b++;
			}
			else {
				a++;
				b = arr[1];
			}
		}
		return alert(arrFrendly);
	}

}

function getDivisorsSum (num) { // находит сумму делителей переданного числа
	return getSum(getDivisors(num));
}

function getDivisors (num) { // находит делители числа
	let arr = [];
	for (var i = 1; i < num; i++) {
		if (num % i == 0){
			arr.push(i);
		}
	}
	return arr;
}

function getSum(arr){ // сумма элементов массива
	let sum =0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum;
}

