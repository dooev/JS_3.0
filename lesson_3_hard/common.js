let str = "урок-3-был слишком легким";
document.write("исходный текст:  ", str);

let strUpper = str[0].toUpperCase() + str.substring(1);
document.write("<br>задание 1:  ", strUpper);

let str2 = strUpper.replace(/-/g, ' ');
console.log( str2);
document.write("<br>задание 2:  ", str2);

let str3 = str2.match(/легким/);
str3 = str3.join(''); 
let str4 = str3.replace(/им/,'оо');
document.write("<br>задание 3:  ", str4);


// 4) У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
let arr = [20, 33, 1, "Человек", 2, 3]

let sum = 0;

for(let i = 0; i < arr.length; i++) {
	if ( !isNaN(arr[i]) ) {
  		sum += Math.pow(arr[i], 3);
	}
}

let sumSqrt = Math.sqrt(sum);
document.write("<br> задание 4: ", sumSqrt)

// 5) Создайте функцию, которая принимает 1 аргумент (название произвольное)
function foo(n){
	n = n.replace(/\s+/g, '');
	if (typeof(n) !== 'string'){
		document.write("<br>задание 5: это НЕ строка!" );
	} else if (n.length > 5){ // можно добавить 0 и станет 50, для краткости взял 5
		n = n.substring(0,5);
		n = n + "..."
	}
	document.write('<br>задание 5: ', n);
};

foo("   Диман 123465     ");
