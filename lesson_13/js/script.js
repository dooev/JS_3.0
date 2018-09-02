$(document).ready(function(){ // при загрузке страницы
	$('.main_btna, .main_btn, [href="#sheldure"]').on('click', function(){
		$('.overlay').fadeIn(1000);
		$('.modal').delay(700).slideDown(700);
	});	

	$('.close').on('click', function(){
		$('.modal').slideUp(700);
		$('.overlay').fadeOut(1000);
	});
});