function slider(){
	//Slider
	var slideIndex = 1,
	    slideS = document.querySelectorAll('.slider-item'),
	    prev = document.querySelector('.prev'),
	    next = document.querySelector('.next'),
	    dotsWrap = document.querySelector('.slider-dots'),
	    dots = document.querySelectorAll('.dot');

	ShowSlides(slideIndex);

	function ShowSlides(n) {
		if (n > slideS.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slideS.length;
		}
		for (var i = 0; i < slideS.length; i++) {
			slideS[i].style.display = 'none';
		}
		for (var i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}
		slideS[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	};

	function plusSlide(n) {
		ShowSlides(slideIndex += n);
	}
	function currentSlide(n) {
		ShowSlides(slideIndex = n);
	}

	prev.addEventListener('click', function () {
		plusSlide(-1);
	});

	next.addEventListener('click', function () {
		plusSlide(1);
	});

	dotsWrap.addEventListener('click', function (event) {
		for (var i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});
}

module.exports = slider;