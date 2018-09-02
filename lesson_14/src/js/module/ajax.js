function ajax() {

	var formPopup = document.getElementsByClassName('main-form')[0],
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

	var status = new Object();
	status.ok = ' \u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0430, \u043C\u044B \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0412\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 10 \u043C\u0438\u043D\u0443\u0442';
	status.load = ' \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...';
	status.fail = "Что то пошло не так... Отправьте форму еще раз, пожалуйста";

	var toServer = {
		// Создаем объект с методом отправки данных на сервер
		Go: function Go(event) {
			var _this = this;

			// В качестве аргумента передаем контекст вызова

			event = event.preventDefault();
			var formData = new FormData(this);

			function postData(data) {
				return new Promise(function (resolve, reject) {
					var request = new XMLHttpRequest();

					request.open('POST', 'server.php');

					request.setRequestHeader('Content-Type', 'application/x-www-form-unlencoded');

					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								// коды ошибок
								resolve();
							} else {
								reject();
							}
						};
					};

					request.send(formData);
				});
			} // END postData

			function clearInput() {
				for (var i = 0; i < inputS.length; i++) {
					inputS[i].value = ''; // очищаем поля ввода
				}
			};

			postData(formData).then(function () {
				_this.appendChild(statusMessageLoad);
				_this.appendChild(statusMessage);
				statusMessage.innerHTML = status.load;
			}).then(function () {
				_this.removeChild(statusMessageLoad);
				_this.removeChild(statusMessage);
				_this.appendChild(statusMessageOk);
				_this.appendChild(statusMessage);
				statusMessage.innerHTML = status.ok;
			}).catch(function () {
				_this.removeChild(statusMessageLoad);
				_this.removeChild(statusMessageOk);
				statusMessage.innerHTML = status.fail;
			}).then(clearInput);
		} // END Go метод объекта

	}; // END toServer object

	formPopup.addEventListener('submit', toServer.Go);
	formFooter.addEventListener('submit', toServer.Go);

	
}
module.exports = ajax;
