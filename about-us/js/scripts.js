$( document ).ready(function() {

    $('.header-page__btn').click(function(){
		$(this).toggleClass('header-page__btn_opened');
	});

    $('.header-page__btn').click(function(){
		$('.header-page__mob-dropdown_navi').toggleClass('header-page__mob-dropdown_opened');
        $('body').toggleClass('body-hidden');
	});

    $('.header-page__user-btn').click(function(){
		$('.header-page__mob-dropdown_active').toggleClass('header-page__mob-dropdown_opened');
        $('.header-page__btn').toggleClass('header-page__btn_hidden');
        $('.header-page__user-btn').toggleClass('header-page__user-btn_opened');
        $('body').toggleClass('body-hidden');
	});

    $('.header-page__user-login').click(function(){
		$('.header-page__mob-dropdown_register').toggleClass('header-page__mob-dropdown_opened');
        $('.header-page__btn').toggleClass('header-page__btn_hidden');
        $('.header-page__user-login').toggleClass('header-page__user-login_opened');
        $('body').toggleClass('body-hidden');
	});

    $('.header-page__search-loupe').click(function(){
		$('.header-page__search').toggleClass('header-page__search_opened');
	});

    $('.header-page__search-loupe').click(function(){
		$('.header-page').toggleClass('header-page_active-search');
	});

    $('.achievements__counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});
