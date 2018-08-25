window.addEventListener('DOMContentLoaded', function(){
	let date = new Date(),
		 h = date.getHours(),
		 m = date.getMinutes(),
		 s = date.getSeconds(),
		 time = [h,m,s],
		 counter = time.length;

	for (var i = 0; i < counter; i++) {
		addZero(time[i]);
		if (i !== counter - 1) {
			document.write(addZero(time[i]) + ':');
		} 	else {
				document.write(addZero(time[i]));
			}
	}

	function addZero(num){
		if (num < 10 ) {
			return '0' + num; 
		}	else {
			return num;
		}
	};
});