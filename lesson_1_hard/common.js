let num = '33721'.split(''); // деление числа на массив и запись в переменную

// let result = num[0]*num[1]*num[2]*num[3]*num[4]; // умножение всех чисел

var	result = 1;
for(i = 0; i < num.length; i++) {
	result = result*num[i];
}

let answer = Math.pow(result,3);
document.write(' Результат умножения: ' + result + '<br>');
document.write(' Результат возведения в степень: ' + answer + '<br>');
let firstTwo = answer / 100000  // оставляю 2 цифры пред запятой
document.write(' Первые две цифры: ' + ~~firstTwo); // отрезаю лишнее после запятой (битовыми операторами ~~)


