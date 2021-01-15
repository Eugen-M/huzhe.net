$( document ).ready(function() {

    $('.header-page__btn').click(function(){
		$(this).toggleClass('header-page__btn_opened');
	});

    $('.header-page__btn').click(function(){
		$('.header-page__navi').toggleClass('header-page__navi_opened');
	});

});
